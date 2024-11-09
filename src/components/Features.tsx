import Bentodemo from "./bentogrid";

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:pt-24 sm:pb-24 md:pb-0 lg:pb-0">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need{" "}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Options for almost all visa categories, live human support
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 md:mt-[0em] sm:mt-[8rem] mt-[20rem]">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};
