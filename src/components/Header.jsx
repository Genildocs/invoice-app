import React, { useContext } from 'react';
import { cn } from '../utils';
import { motion } from 'motion/react';
import { IoMdSunny } from 'react-icons/io';
import { IoMdMoon } from 'react-icons/io';
import { ThemeContext } from '../context/ThemeContext';
import ImageAvatar from '../../public/images/image-avatar.jpg';
import Logo from '../../public/images/logo.svg';
export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="h-20  bg-primary-dark">
      <div className="flex justify-between items-center h-full gap-5">
        <div className="flex items-center justify-between w-full">
          <div className="bg-primary-light h-20 w-20 rounded-r-3xl flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-7 h-7" />
          </div>

          <button
            className="group h-5 w-5 cursor-pointer"
            onClick={toggleTheme}>
            <IoMdMoon
              className={cn(
                'h-full w-full fill-secondary-dark group-hover:fill-secondary-light',
                theme === 'dark' && 'hidden'
              )}
            />
            <IoMdSunny
              className={cn(
                'h-full w-full fill-secondary-dark group-hover:fill-secondary-light',
                theme === 'light' && 'hidden'
              )}
            />
          </button>
        </div>
        <div className="w-[1px] h-full bg-secondary-dark opacity-65" />
        <div className="pr-4">
          <img
            src={ImageAvatar}
            alt="image avatar"
            className="h-8 max-w-fit object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
