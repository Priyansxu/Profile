import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex select-none text-sm py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      
      <a
        href="https://www.instagram.com/priyansxu_gupta"
        target="blank"
        rel="noreferrer"
        className="flex flex-col text-center group hover:text-purple-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 "
      >
        <div className="relative transition-all ease-in-out duration-1000">
          <p className="group font-bold animate-text duration-700 transition-all linear group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg">
            Priyanshu Gupta
          </p>
        </div>
      </a>
    </div>
  );
};

export default Footer;
