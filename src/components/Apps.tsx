"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { routePicker } from "@/data/picker";
import AppsContent from "./AppsContent";
import WebsiteContent from "./WebsiteContent";
import ExperienceContent from "./ExperienceContent";
import { socials } from "@/data/social";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import SkillsContent from "./Skills";

const Apps = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const handleNavigation = (route: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", route);
    router.push(`?${params.toString()}`);
  };

  const renderContent = () => {
    switch (tab) {
      case "website":
        return <WebsiteContent />;
      case "experience":
        return <ExperienceContent />;
      case "/":
        return <AppsContent/>
        case "skills":
          return <SkillsContent/>
      default:
        return <AppsContent />;
    }
  };

  return (
    <div className="block flex-col overflow-hidden space-y-4">
      <ul className="w-full flex flex-wrap space-x-3.5">
        {socials.map((d, i) => {
          const Icon = d.icon;
          return (
            <li key={i}>
              <Link
                href={d.link}
                className="capsule rounded-lg! bg-neutral-50! p-2! flex space-x-1 items-center"
              >
                <Icon className="max-h-5" />
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="mailto:manu.development.app@gmail.com"
            className="capsule rounded-lg! bg-neutral-50! p-2! flex space-x-1 items-center"
          >
            <LuMail className="max-h-5" />
          </Link>
        </li>
      </ul>
      <div className="flex items-center sm:space-x-4">
        {routePicker.map((rp, i) => {
          const isActive = rp.route === tab;
          const Icon = rp.icon;
          return (
            <button
              type="button"
              onClick={() => handleNavigation(rp.route)}
              key={i}
              className={`flex items-center space-x-1.5 px-2 py-1.5 border-b-2 transition-all duration-300 ${
                isActive ? "border-black" : "border-transparent"
              }`}
            >
              <Icon className="text-sm sm:text-lg" />
              <h2 className="text font-medium! text-xxs! max-w-sm:text-xs! md:text-md!">
                {rp.title}
              </h2>
            </button>
          );
        })}
      </div>
      {renderContent()}
    </div>
  );
};

export default Apps;
