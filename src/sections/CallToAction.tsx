import { Button } from "@/components";
import gridLines from '@/assets/grid-lines.png';
import starsBg from '@/assets/stars.png';

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="border border-white/15 py-24 relative rounded-xl"  style={{backgroundImage : `url(${starsBg.src})`}}>
        <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"  style={{backgroundImage : `url(${gridLines.src})`}}></div>
         <div className="relative flex items-center flex-col gap-8">
            <h1 className="text-5xl max-w-sm mx-auto md:text-6xl font-medium tracking-tighter text-center">AI-driven SEO for everyone.</h1>
            <p className="text-white/70 max-w-xs mx-auto px-4 text-lg md:text-xl text-center tracking-tight">
            Achieve clear, impactful results without the complexity.
            </p>
            <Button> Join waitlist </Button>
         </div>
        </div>
      </div>
    </section>
  );
};
