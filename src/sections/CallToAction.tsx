"use client"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components";
import gridLines from '@/assets/grid-lines.png';
import starsBg from '@/assets/stars.png';
import { RefObject, use, useEffect, useRef } from 'react';

const useRelativeMousePosition = (to : RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const updateMousePosition  = (event : MouseEvent) =>{
    if(!to.current) return;

    const { left, top } = to.current?.getBoundingClientRect();

    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  }

  useEffect(() => {
    window.addEventListener('mousemove',updateMousePosition);

    return () => {
      window.removeEventListener('mousemove',updateMousePosition);
    }
  },[updateMousePosition])

  return [mouseX,mouseY];
}

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target : sectionRef,
    offset : ["start end","end start"]
  });
  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300]);

  const [ mouseX, mouseY ]  = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate `radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div 
        ref={borderedDivRef}
        className="border border-white/15 py-24 relative rounded-xl group"  
        style={{
          backgroundImage : `url(${starsBg.src})`,
          backgroundPositionY : backgroundPositionY
        }}
        animate = {{
          backgroundPositionX : starsBg.width
        }}
        transition={{
          repeat : Infinity,
          duration : 60,
          ease : "linear"
        }}
        >
        <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"  
        style={{backgroundImage : `url(${gridLines.src})`}}></div>
        <motion.div 
        className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700 rounded-xl"  
        style={{
          maskImage,
          backgroundImage : `url(${gridLines.src})`
        }}></motion.div>
         <div className="relative flex items-center flex-col gap-8">
            <h1 className="text-5xl max-w-sm mx-auto md:text-6xl font-medium tracking-tighter text-center">AI-driven SEO for everyone.</h1>
            <p className="text-white/70 max-w-xs mx-auto px-4 text-lg md:text-xl text-center tracking-tight">
            Achieve clear, impactful results without the complexity.
            </p>
            <Button> Join waitlist </Button>
         </div>
        </motion.div>
      </div>
    </section>
  );
};
