"use client"
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from '@/assets/product-image.png';
import { useEffect, useRef, useState } from "react";
import { useMotionTemplate, useMotionValue, motion, animate, ValueAnimationTransition } from "framer-motion";

interface Tab {
  icon: string; // Path to the icon as a string
  title: string; // Title of the tab
  isNew: boolean; // Whether it's marked as new
  backgroundPositionX: number; // Background X position
  backgroundPositionY: number; // Background Y position
  backgroundSizeX: number; // Background size in X direction
}

const tabs: Tab[] = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const FeaturesTab: React.FC<{ tab: Tab, isSelected : Boolean } & React.ComponentPropsWithoutRef<'div'> > = ( { tab, onClick, isSelected, ...rest } ) => {
  const DotLottiePlayerRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate `radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(()=>{
    if(!tabRef.current || !isSelected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [ 0, width/circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1 ]

    const options: ValueAnimationTransition = {
      times,
      duration : 4,
      ease : "linear",
      repeatType : "loop",
      repeat : Infinity,
    }
    
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);

  },[isSelected])

  const handleTabHover = () => {
    if (DotLottiePlayerRef.current === null) return;
    // Redo the animation
    DotLottiePlayerRef.current.seek(0);
    DotLottiePlayerRef.current.play();
  }

  return (
    <div ref={tabRef} onClick={onClick} onMouseEnter={handleTabHover} className="relative border border-white/15 flex flex-1 p-2.5 rounded-xl gap-2.5 items-center cursor-pointer">
      {
      isSelected && 
      <motion.div className="absolute inset-0 border border-[#A369ff] rounded-xl -m-px" style={{
       maskImage
      }}></motion.div>
      }
    <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
    <DotLottiePlayer ref={DotLottiePlayerRef} src={tab.icon} className="h-5 w-5" autoplay/>
    </div>
    <div className="font-medium">{tab.title}</div>
    {tab.isNew &&  <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black">new</div>}
  </div>
  );
}

export const Features = () => {
  const [selectedTab, useSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate `${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate `${backgroundSizeX}% auto`;

  const handleSelectedTab = (index : number) => {
    useSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration : 2,
      ease : "easeInOut",
    }
    animate(backgroundSizeX,[backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],animateOptions)
    animate(backgroundPositionX,[backgroundPositionX.get(), tabs[index].backgroundPositionX],animateOptions)
    animate(backgroundPositionY,[backgroundPositionY.get(), tabs[index].backgroundPositionY],animateOptions)
  }

  return (
  <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts.</h2>
      <p className="text-white/70 text-lg md:text-xl text-center max-w-2xl m-auto tracking-tight mt-5">
        From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
      </p>
     <div className="mt-10 flex flex-col gap-3 lg:flex-row">
     {
        tabs.map((tab, tabIndex) => (
          <FeaturesTab tab={tab} key={tab.title} isSelected={ tabIndex === selectedTab } onClick={() => handleSelectedTab(tabIndex)}/>
        ))
      }
     </div>
     <div>
      <div className="border border-white/20 p-2.5 rounded-xl mt-3">
      <motion.div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{
        backgroundImage : `url(${productImage.src})`,
        backgroundPosition,
        backgroundSize,
      }}>
      </motion.div>
      </div>
     </div>
    </div>
    </section>
    );
};
