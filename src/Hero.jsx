import React from "react";
export function Hero({ Juicy }) {
  return (
    <div className="Roboto h-screen relative flex flex-col bg-[#825DD2]">
      <header className="z-[1000] absolute inset-0">
        {/* Set navbar z-index to 0 or negative */}
        <nav className="w-[80%] mx-auto  flex justify-between items-center h-[100px]">
          <a href="#" className="text-[40px] text-[#fff] Anton tracking-[2px]">
            Juicy
          </a>
          <div className="text-[20px] text-white flex gap-10">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>

      <div
        className=" flex justify-center z-10 items-center flex-1 relative " // Set z-index to 10, making sure it's above the navbar
        style={{
          background:
            "radial-gradient(circle, #bd9fff, transparent, transparent)",
        }}
      >
        <h1 className="text-[28vw] text-white Anton tracking-[10px] font-[900]">
          JUICY
        </h1>
        <img
          ref={Juicy}
          id="cans"
          className="absolute  top-[11%] left-[33%] z-[2] w-[35%]"
          src="/img/can.png"
          alt=""
        />
        <img
          id="blackberry1"
          className="absolute w-[13vw] z-0 top-[20%] left-[55%]"
          src="/img/blackberry.png"
          alt=""
        />
        <img
          id="blackberry2"
          className="absolute z-0 w-[15vw] top-[45%] left-[35%]"
          src="/img/blackberry.png"
          alt=""
        />
        <img
          id="blackberry3"
          className="absolute z-0 top-[30%] left-[35%] w-[6vw]"
          src="/img/blackberry.png"
          alt=""
        />
        <img
          id="leaf"
          className="absolute w-[12%] z-[10] top-[60%] left-[10%]"
          src="img/leaf.png"
          alt=""
        />
        <img
          id="leaf3"
          className="absolute w-[20%] top-[10%] right-[0%]"
          src="img/coconoutleaf.png"
          alt=""
        />
      </div>
    </div>
  );
}
