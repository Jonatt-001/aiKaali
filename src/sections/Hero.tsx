import { Button } from "@/components";
import Stars from '@/assets/stars.png'

export const Hero = () => {
  return <section className="h-[492px] flex items-center" style={{
    backgroundImage : `url(${Stars.src})`
  }}>
    <div className="container">
      <h1 className="text-8xl bg-white bg-clip-text text-center text-transparent font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">AI SEO</h1>
      <p className="text-lg text-white/70 mt-5 text-center">Elevate your site's visiblity effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
      <div className="flex justify-center mt-5">
      <Button>Join waitlist</Button>
      </div>
    </div>
  </section>;
};
