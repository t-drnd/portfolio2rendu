"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { DockDemo } from "@/components/magicui/dock-demo";

export function TypingAnimationDemo() {
  return <TypingAnimation>Typing Animation</TypingAnimation>;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Accueil</HoveredLink>
            <HoveredLink href="/about">À propos</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">Mes Projets</HoveredLink>
            <HoveredLink href="/skills">Compétences</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Me Contacter</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Section initiale centrée verticalement */}
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center z-10"
        >
          <h1 className="text-3xl md:text-7xl font-bold">
            Welcome to my portfolio
          </h1>
          <TypingAnimation
            className="font-extralight text-base md:text-4xl py-4"
            duration={50}
          >
            Full Stack Developer & UI/UX Designer
          </TypingAnimation>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 mt-4">
            Let's start !
          </button>
        </motion.div>
      </section>

      {/* Section des cartes */}
      <section className="min-h-screen flex flex-col items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <CardDemo
            imageUrl="https://images.unsplash.com/photo-1476842634003-7dcca8f832de"
            title="Web Development"
            description="Modern and responsive web applications built with the latest technologies."
            hoverImage="https://i.giphy.com/syEfLvksYQnmM.gif"
          />
          <CardDemo
            imageUrl="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            title="UI/UX Design"
            description="Creative and intuitive user interfaces with seamless user experience."
            hoverImage="https://i.giphy.com/3o7qE1YN7aBOFPRw8E.gif"
          />
          <CardDemo
            imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            title="Mobile Apps"
            description="Cross-platform mobile applications that deliver exceptional performance."
            hoverImage="https://i.giphy.com/l41lJ8ywG1ncRXNeg.gif"
          />
        </motion.div>
      </section>

      {/* Dock en bas */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <DockDemo />
      </div>
    </div>
  );
};

interface CardDemoProps {
  imageUrl: string;
  title: string;
  description: string;
  hoverImage: string;
}

export function CardDemo({ 
  imageUrl,
  title,
  description,
  hoverImage,
}: CardDemoProps) {
  return (
    <div className="max-w-xs w-full">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-cover",
          "transition-all duration-500"
        )}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${hoverImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </AuroraBackground>
  );
}
