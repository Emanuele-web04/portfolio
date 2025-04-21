import React from "react";
import { experience } from "@/data/experience";
import Image from "next/image";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Link from "next/link";

const ExperienceContent = () => {
  const revExp = [...experience].reverse();

  return (
    <ul className="flex flex-col space-y-4">
      {revExp.map((exp, i) => (
        <li
          key={i}
          className="p-4 md:p-6 bg-neutral-50 rounded-2xl ring-1 flex flex-col space-y-4 ring-neutral-200 shadow relative overflow-hidden"
        >
          <Link href={exp.link ?? "/"} className="flex flex-col space-y-4">
            <div className="w-full flex justify-between">
              <div className="flex space-x-4">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={40}
                  height={40}
                  className="rounded-xl w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  />
                <div className="flex flex-col">
                  <h3 className="md:text-xl font-bold">{exp.title}</h3>
                  <h4 className="text-gray-600 text-xs">{exp.release}</h4>
                </div>
              </div>
            </div>
            <h4 className="font-inter text-xs md:text-sm tracking-tight">
              {exp.description}
            </h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceContent;
