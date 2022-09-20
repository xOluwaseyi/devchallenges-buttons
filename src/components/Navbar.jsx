import React from "react";

const Navbar = () => {
  return (
    <header className="lg:col-span-1 bg-[#FAFBFD] p-10 pl-7 ">
      <div className="lg:h-[50%] flex flex-col justify-between">
        <h1 className="font-bold text-xl lg:text-lg ">
          <span className="text-[#F7542E]">Dev</span>challenges.io
        </h1>

        <br />

        {/* desktop */}
        <nav className=" hidden lg:flex flex-col h-[60%] justify-between text-[#9E9E9E]">
          <a href="#">Colors</a>
          <a href="#">Typography</a>
          <a href="#">Spaces</a>
          <a href="#" className="text-black font-bold">
            Buttons
          </a>
          <a href="#">Inputs</a>
          <a href="#">Grid</a>
        </nav>

        {/* mobile */}
        <nav
          className="lg:hidden flex flex-col gap-5 justify-between text-[#9E9E9E] 
          "
        >
          <a href="#">Colors</a>
          <a href="#">Typography</a>
          <a href="#">Spaces</a>
          <a href="#" className="text-black font-bold">
            Buttons
          </a>
          <a href="#">Inputs</a>
          <a href="#">Grid</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
