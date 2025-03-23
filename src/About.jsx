import React from "react";
export function About({ triggerStart }) {
  return (
    <section ref={triggerStart} className="py-[100px] h-screen Roboto">
      <div className="flex justify-between mx-auto w-[80%] ">
        <div className="w-[50%] z-20">
          <h2 className="text-[3.5vw] font-bold text-[#0d071c] capitalize relative">
            Best Ingredients
            <br /> food juices
            <span className="text-[#825DD2]">on right handmade</span>
          </h2>
          <div className="flex gap-[50px] mb-[60px] mt-[30px]">
            <div className="">
              <img src="img/blackberry.png" className="w-[25%]" alt="" />
              <h4 className="text-[1.1vw] text-[#4b4b4b]">Lorem, Masdrites.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quas expedita sint.
              </p>
            </div>
            <div className="">
              <img src="img/blackberry.png" className="w-[25%]" alt="" />
              <h4 className="text-[1.1vw] text-[#4b4b4b]">Premum lights</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quas expedita sint.
              </p>
            </div>
          </div>
          <a
            href="#"
            class="px-11 py-4 text-lg border border-[#825DD2] bg-[#825DD2] rounded-full text-white font-bold no-underline"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
