import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./DarkToggle";
import { Separator } from "@/components/ui/separator";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="p-4 sticky top-0 rounded-xl z-10 mt-4 space-x-4 bg-inherit dark:bg-black">
      <div className="flex sm:flex-row justify-between mx-auto">
        <div className="grid grid-cols-2 ml-6">
          <Avatar>
            <AvatarImage
              src="https://github.com/adlonymous/portfolio/assets/93305952/9629b7c8-d7ac-4528-ad5d-cd8374f34298"
              alt="@aadil"
            />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900/90 rounded-xl shadow-xl hidden sm:block dark:shadow-slate-900">
          <ul className="flex space-x-6 text-black dark:text-white mt-2 px-6 ">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <Separator orientation="vertical" />
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <Separator orientation="vertical" />
            <li>
              <a href="#" className="hover:text-gray-300">
                Skills
              </a>
            </li>
            <Separator orientation="vertical" />
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="mr-6">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
