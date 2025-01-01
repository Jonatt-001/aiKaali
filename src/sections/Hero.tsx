import { Button } from "@/components";
import Stars from '@/assets/stars.png'

export const Hero = () => {
  return (
  <section className="h-[600px] lg:h-[650px] flex items-center relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_95%,transparent)] lg:-mt-10 overflow-hidden" style={{
    backgroundImage : `url(${Stars.src})`
  }}>
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
    {/* planet start */}
    <div className="absolute h-64 w-64 md:h-[400px] md:w-[400px] bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
    shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]   
    "></div>
    {/* planet end*/}
    {/* Start ring 1 */}
    <div className="absolute h-[344px] w-[344px] md:h-[480px] md:w-[480px] border border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
      <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full"></div>
      <div className="absolute h-2 w-2 top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white rounded-full"></div>
      <div className="absolute h-5 w-5 border border-white top-1/2 -translate-y-1/2 -translate-x-1/2 left-full inline-flex items-center justify-center rounded-full">
      <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>
    {/* End ring 1 */}
    {/* Start ring 2 */}
    <div className="absolute h-[444px] w-[444px] md:h-[580px] md:w-[580px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
    {/* End ring 2 */}
    {/* Start ring 3 */}
    <div className="opacity-20 absolute h-[544px] w-[544px] md:h-[680px] md:w-[680px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full"></div>
      <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-full bg-white rounded-full"></div>
    </div>
    {/* End ring 3 */}
    <div className="container relative mt-16">
      <h1 className="text-8xl md:text-[168px] md:leading-none bg-white bg-clip-text text-center text-transparent font-semibold tracking-tight bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">AI SEO</h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">Elevate your site's visiblity effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
      <div className="flex justify-center mt-5">
      <Button className='md:py-2.5 md:px-5 md:text-base'>Join waitlist</Button>
      </div>
    </div>
  </section>
  );
};
