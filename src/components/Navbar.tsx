import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md "></div>

              {/* <LogoImage className="h-12 w-12 relative mt-1"/> */}
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="text-white" />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              {/* <a href="#demo" className='text-opacity-60 text-white hover:text-opacity-100 transition' >Demo</a> */}
              <a
                href="#faq"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Contact Us
              </a>
              <a href="https://forms.gle/PGPomN7oAHzYTJ3j9">
                <button className="bg-white py-2 px-4 rounded-lg text-black">
                  Sign up here!
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
