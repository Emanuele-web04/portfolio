import React from "react";
import { websites } from "@/data/websites";
import Image from "next/image";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Link from "next/link";

const WebsiteContent = () => {
  const revWeb = [...websites].reverse();

  return (
    <ul className="flex flex-col space-y-4">
      <li>
        <h3 className="text-xs pt-2">Fun fact about me: I tend to forget favicons :)</h3>
      </li>
      {revWeb.map((web, i) => (
        <li
          key={i}
          className="p-4 md:p-6 bg-neutral-50 rounded-2xl ring-1 flex flex-col space-y-4 ring-neutral-200 shadow relative overflow-hidden"
        >
          <Link href={web.link ?? "/"} className="flex flex-col space-y-4">
            <div className="w-full flex justify-between">
              <div className="flex space-x-4">
                <Image
                  src={web.image}
                  alt={web.title}
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">{web.title}</h3>
                  <h4 className="text-gray-600 text-xs">{web.release}</h4>
                </div>
              </div>
              {web.link ? (
                <LuCircleArrowOutUpRight />
              ) : (
                <p className="px-2 py-1 rounded-lg ring-1 text-xs ring-neutral-200 h-fit bg-white">
                  On the way
                </p>
              )}
            </div>
            <h4 className="font-inter text-sm tracking-tight">
              {web.description}
            </h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WebsiteContent;
