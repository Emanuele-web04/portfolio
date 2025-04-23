import React from "react";
import Image from "next/image";
import { navData } from "@/data/navData";
import { socials } from "@/data/social";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="block justify-between">
      <div className="flex space-x-4 sm:space-x-10">
        <Image
          width={100}
          height={100}
          src={"/profilepic.png"}
          alt=""
          className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-2xl shadow-lg ring-3 ring-neutral-200 object-contain"
        />
        <div className="flex flex-col h-full justify-between space-y-3">
          <div className="flex flex-col space-y-3">
            <h1 className="text">Emanuele Di Pietro</h1>
            <ul className="w-full flex flex-wrap md:flex-col gap-3">
              {navData.map((d, i) => {
                const Icon = d.icon;
                return (
                  <li key={i}>
                    <div className="capsule flex shadow-none! gap-1 items-center">
                      <Icon className="max-h-5" />
                      <h6 className="text-xxs font-medium">{d.text}</h6>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
