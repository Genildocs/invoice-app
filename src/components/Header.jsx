import React, { useContext } from "react";
import { cn } from "../utils";
import { motion } from "motion/react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import ImageAvatar from "../../public/images/image-avatar.jpg";
import Logo from "../../public/images/logo.svg";
export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-primary-dark h-20">
      <div className="flex h-full items-center justify-between gap-5">
        <div className="flex w-full items-center justify-between">
          <div className="bg-primary-light flex h-20 w-20 items-center justify-center rounded-r-3xl">
            <img src={Logo} alt="logo" className="size-7" />
          </div>

          <button className="group size-5 cursor-pointer" onClick={toggleTheme}>
            <IoMdMoon
              className={cn(
                "fill-secondary-dark group-hover:fill-secondary-light size-full",
                theme === "dark" && "hidden",
              )}
            />
            <IoMdSunny
              className={cn(
                "fill-secondary-dark group-hover:fill-secondary-light size-full",
                theme === "light" && "hidden",
              )}
            />
          </button>
        </div>
        <div className="bg-secondary-dark h-full w-[1px] opacity-65" />
        <div className="pr-4">
          <img
            src={ImageAvatar}
            alt="image avatar"
            className="h-8 max-w-fit rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
