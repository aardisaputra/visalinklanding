import Bentodemo from "./bentogrid";

export const Features = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,_34%,#003366_70%,#003366_82%)] bg-black text-white py-[72px] sm:pt-24 sm:pb-24 md:pb-0 lg:pb-0">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need{" "}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Comprehensive support across all visa categories, with live
            assistance from experienced immigration professionals
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 md:mt-[0em] sm:mt-[8rem] mt-[20rem]">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};
