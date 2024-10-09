// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t dark:bg-[#0d1224] bg-gray-500 border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Description */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">
              Building innovative solutions with a passion for technology and design. 
              Stay connected with me through the links below!
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/shankarthakur512"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>

        {/* Contact and social media */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            <p>© 2024 My Portfolio by <Link target="_blank" href="https://www.linkedin.com//" className="text-[#16f2b3]">Shankar Thakur</Link></p>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="https://twitter.com/" target="_blank" className="hover:text-[#16f2b3]">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" className="hover:text-[#16f2b3]">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com/shankarthakur512" target="_blank" className="hover:text-[#16f2b3]">
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Footer;
