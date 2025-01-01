"use client"
import { useState } from 'react';
import Logo from '@/assets/logo.svg';
import Menu from '@/assets/icon-menu.svg';
import { Button } from '@/components';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = (e:React.MouseEvent) => {
    e.stopPropagation();
    setIsSidebarOpen(prevState => !prevState);
  };

  return <header className='border-b sticky top-0 border-white/15 z-10 px-2 py-4 md:border-none transition-all backdrop-blur md:backdrop-blur-none'>
    {/* Centered part */}
    <div className="container flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur">
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
            <Menu onClick={toggleSidebar} className={`md:hidden cursor-pointer ${isSidebarOpen?'opacity-0':'opacity-100'}`}/>        
        </div>
    </div>
    {/* Sidebar */}
    {isSidebarOpen && (
        <div className='md:hidden absolute w-[98%] h-[550px] transparent' onClick={toggleSidebar}>
          <div className='md:hidden fixed top-0 right-0 h-full px-14 bg-black/80 text-white p-8 shadow-lg z-20' onClick={(e:React.MouseEvent)=> e.stopPropagation()}>
          <nav className='flex flex-col gap-5 text-sm'>
            <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
            <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
          </nav>
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white text-2xl z-100"
          >
            &times; {/* Close button */}
          </button>
        </div>
        </div>
      )}
  </header>;
};
