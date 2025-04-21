import React from "react";
import { apps } from "@/data/apps";
import Image from "next/image";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Link from "next/link";

const AppsContent = () => {
  const revApps = [...apps].reverse();

  return (
    <ul className="flex flex-col w-full space-y-4">
      {revApps.map((app, i) => (
        <li
          key={i}
          className="p-4 md:p-6 bg-neutral-50 rounded-2xl ring-1 flex flex-col space-y-4 ring-neutral-200 shadow relative overflow-hidden"
        >
          <Link href={app.link ?? "/"} className="flex flex-col space-y-4">
            <div className="w-full flex justify-between">
              <div className="flex space-x-4">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
                <div className="flex flex-col">
                  <h3 className="md:text-xl font-bold">{app.title}</h3>
                  <h4 className="text-gray-600 text-xs">{app.release}</h4>
                </div>
              </div>
              {app.link ? (
                <LuCircleArrowOutUpRight />
              ) : (
                <p className="px-2 py-1 rounded-lg ring-1 text-xs ring-neutral-200 h-fit bg-white">
                  On the way
                </p>
              )}
            </div>
            <h4 className="font-inter text-xs md:text-sm tracking-tight">
              {app.description}
            </h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AppsContent;
