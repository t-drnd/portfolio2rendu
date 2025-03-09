"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";

export function DockDemo() {
  return (
    <Dock>
      <DockIcon className="group relative">
        <a href="https://github.com/t-drnd">
          <Image src="/icons/github.svg" alt="Github" width={40} height={40} />
          <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            Github
          </span>
        </a>
      </DockIcon>
      <DockIcon className="group relative">
        <a href="https://www.linkedin.com/in/thomas-durand-002a1428b/">
          <Image src="/icons/linkedin.svg" alt="Linkedin" width={40} height={40} />
          <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            LinkedIn
        </span>
        </a>
      </DockIcon>
      {/* <DockIcon className="group relative">
        <Image src="/icons/notebook.svg" alt="Projects" width={40} height={40} />
        <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          Projects
        </span>
      </DockIcon>
      <DockIcon className="group relative">
        <Image src="/icons/night.svg" alt="Dark Mode" width={40} height={40} />
        <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          Dark Mode
        </span>
      </DockIcon>
      <DockIcon className="group relative">
        <Image src="/icons/light.svg" alt="Light Mode" width={40} height={40} />
        <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          Light Mode
        </span>
      </DockIcon> */}
    </Dock>
  );
}
