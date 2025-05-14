import { Skill } from "@/types/skill";
import Link from "next/link";
import React from "react";
import Image from "next/image";
type SkillsPlaceholderProps = {
  title: string;
  skills: Skill[];
};

const SkillsPlaceholder = ({ title, skills }: SkillsPlaceholderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-sm sm:text-base tracking-tight">{title}</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {skills.map((skill, i) => {
          const Icon = skill.skill.icon;
          const Name = skill.skill.name;
          const Color = skill.skill.color;
          return (
            <li
              key={i}
              className="p-4 md:p-6 bg-white rounded-2xl ring-1 flex flex-col space-y-4 ring-neutral-200 shadow relative overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                <div className="w-full flex justify-center items-center">
                  <div className="flex flex-col space-y-3 justify-center items-center">
                    {typeof Icon === "string" ? (
                      <Image
                        src={Icon}
                        alt={Icon}
                        width={40}
                        height={40}
                        className="rounded-xl"
                      />
                    ) : (
                      <Icon
                        style={{ color: Color }}
                        size={40}
                        width={40}
                        height={40}
                      />
                    )}
                    <div className="flex flex-col text-center justify-between w-full items-center">
                      <h3 className="text-base md:text-lg font-bold">{Name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsPlaceholder;
