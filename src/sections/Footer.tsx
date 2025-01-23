import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import XLogo from '@/assets/social-x.svg';
import InstagramLogo from '@/assets/social-instagram.svg';
import YoutubeLogo from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
        <div className=" py-2 px-10 md:px-12 flex flex-col lg:flex-row gap-8 lg:justify-between">
          <div className="flex items-center gap-2">
            <Logo className='w-6 h-6 cursor-pointer'/>
            <p className='font-medium'>AIvista | AI startup</p>
          </div>
            <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 w-fit'>
            <a href="#" className=' text-white/70 hover:text-white transition text-xs md:text-sm'>Features</a>
            <a href="#" className=' text-white/70 hover:text-white transition text-xs md:text-sm'>Developers</a>
            <a href="#" className=' text-white/70 hover:text-white transition text-xs md:text-sm'>Company</a>
            <a href="#" className=' text-white/70 hover:text-white transition text-xs md:text-sm'>Blog</a>
            <a href="#" className=' text-white/70 hover:text-white transition text-xs md:text-sm'>Changelog</a>
            </nav>
          <div className='flex gap-5'>
            <XLogo className="text-white/40 hover:text-white transition cursor-pointer"/>
            <InstagramLogo className="text-white/40 hover:text-white transition cursor-pointer"/>
            <YoutubeLogo className="text-white/40 hover:text-white transition cursor-pointer"/>
          </div>
      </div>
    </footer>
  );
};
