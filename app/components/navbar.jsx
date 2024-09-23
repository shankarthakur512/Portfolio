
// @flow strict
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";


function Navbar() {
  return (
    <nav className=" bg-transparent z-50  ">
      <div className="flex  items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#f216ca] text-3xl font-bold">
            <div className="flex gap-5"> 
            Shankar 
              <DarkModeToggle /></div>
           
          </Link>

        </div>

        <ul className="mt-4 flex  h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm dark:hover:text-pink-600   dark:text-white text-gray-900 transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2  no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 dark:hover:text-pink-600 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 dark:hover:text-pink-600 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-gray-900 transition-colors dark:text-white duration-300 dark:hover:text-pink-600 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-gray-900 transition-colors dark:text-white dark:hover:text-pink-600 duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-gray-900 transition-colors dark:text-white duration-300 dark:hover:text-pink-600 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;