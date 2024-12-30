import Logo from '@/assets/logo.svg';
import Menu from '@/assets/icon-menu.svg';
import { Button } from '@/components';

export const Header = () => {
  return <header className='border-b border-white/15 px-2 py-4 md:border-none transition-all'>
    {/* Centered part */}
    <div className="container flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto">
        <div className="border border-white/15 md:border-white/10 w-10 h-10 rounded-lg inline-flex justify-center items-center">
          <a href="#"><Logo className='w-8 h-8 cursor-pointer'/></a>
        </div>
        <div className='hidden md:block cursor-pointer'>
          <nav className='flex gap-8 text-sm'>
            <a href="#" className=' text-white/70 hover:text-white transition'>Features</a>
            <a href="#" className=' text-white/70 hover:text-white transition'>Developers</a>
            <a href="#" className=' text-white/70 hover:text-white transition'>Pricing</a>
            <a href="#" className=' text-white/70 hover:text-white transition'>Changelog</a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
            <Button>Join waitlist</Button>
            <Menu className='md:hidden cursor-pointer'/>
        </div>
    </div>
  </header>;
};
