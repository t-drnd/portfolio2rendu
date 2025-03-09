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
import { Timeline } from "@/components/ui/timeline";

export function TypingAnimationDemo() {
  return <TypingAnimation>Typing Animation</TypingAnimation>;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-[50]",
        className
      )}
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

// Définir les données de la timeline
const timelineData = [
  {
    title: "2023-2025",
    content: (
      <div className="prose prose-sm dark:prose-invert">
        <h4 className="text-xl font-bold">
          Etudiant Développeur Full Stack à l'IIM Digital School
        </h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          Actuellement, je travaille sur des applications web modernes utilisant
          Next.js, React, TypeScript et Tailwind CSS. Je me concentre sur la
          création d&apos;expériences utilisateur fluides avec des composants UI
          modernes.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="prose prose-sm dark:prose-invert">
        <h4 className="text-xl font-bold">Lycéen en Bac Général</h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          J&apos;ai suivi une formation en Bac Général au lycée Charles de
          Foucauld à Paris.
        </p>
      </div>
    ),
  },
];

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
            Bienvenue sur mon portfolio
          </h1>
          <TypingAnimation
            className="font-extralight text-base md:text-4xl py-4"
            duration={50}
          >
            Full Stack Developer & UI/UX Designer
          </TypingAnimation>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 mt-4">
            Découvrez mon portfolio !
          </button>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="w-full">
        <Timeline data={timelineData} />
      </section>

      {/* Section des cartes */}
      <section className="min-h-screen flex flex-col items-center justify-center py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 relative z-10"
        >
          <CardDemo
            imageUrl="https://images.unsplash.com/photo-1476842634003-7dcca8f832de"
            title="Pokemon Fight"
            description="Un jeu de combat de Pokémon en ligne avec une interface moderne et réactive."
            videoUrl="/videos/PokemonFight.mp4"
            githubUrl="https://github.com/t-drnd/projet-pokemon-php"
          />
          <CardDemo
            imageUrl="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            title="Site Accessibilité"
            description="Un site web accessible pour les personnes avec des handicaps."
            videoUrl="/videos/Accessibilite.mp4"
            githubUrl="https://github.com/MaxenceRault/Projet_IAN"
          />
          <CardDemo
            imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            title="To Do List"
            description="Une application de gestion de tâches avec une interface moderne et réactive."
            videoUrl="/videos/ToDoList.mp4"
            githubUrl="https://github.com/t-drnd/IIM_ToDoList"
          />
        </motion.div>
      </section>

      {/* Dock en bas */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100]">
        <DockDemo />
      </div>
    </div>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  // Empêcher le scroll quand le modal est ouvert
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay avec z-index très élevé */}
      <div
        className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-8"
        style={{ position: "fixed", zIndex: 9999 }}
      >
        <div className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
              {title}
            </h2>
            <div className="relative pt-[56.25%]">
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                src={videoUrl}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface CardDemoProps {
  imageUrl: string;
  title: string;
  description: string;
  videoUrl: string;
  githubUrl: string;
}

export function CardDemo({
  imageUrl,
  title,
  description,
  videoUrl,
  githubUrl,
}: CardDemoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-xs w-full"
    >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",
          "transition-all duration-500 hover:scale-105"
        )}
      >
        {/* Vidéo en arrière-plan */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Overlay sombre pour le texte */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors" />

        {/* Contenu */}
        <div className="relative z-10">
          <h1 className="font-bold text-xl md:text-3xl text-white">{title}</h1>
          <p className="font-normal text-base text-gray-200 my-4">
            {description}
          </p>
        </div>
      </div>
    </a>
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
