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
import { Timeline } from "@/components/ui/timeline";
import emailjs from "@emailjs/browser";

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
        <MenuItem setActive={setActive} active={active} item="Accueil">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#home">Accueil</HoveredLink>
            <HoveredLink href="#timeline">Mon Parcours</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projets">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#skills">Compétences</HoveredLink>
            <HoveredLink href="#projects">Mes Projets</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#contact">Me Contacter</HoveredLink>
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
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center"
      >
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
      <section id="timeline" className="w-full">
        <Timeline data={timelineData} />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="w-full py-20 bg-gray-50/50 dark:bg-neutral-950/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-black dark:text-white">
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Hard Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                Compétences Techniques
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "PHP",
                  "Symfony",
                  "Git",
                  "MySQL",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-black/[0.7] dark:bg-white/[0.1] text-white rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                Soft Skills
              </h3>
              <div className="space-y-4">
                {[
                  {
                    skill: "Travail d'équipe",
                    description:
                      "Capacité à collaborer efficacement et à partager des connaissances",
                  },
                  {
                    skill: "Communication",
                    description:
                      "Aptitude à présenter des idées clairement et à convaincre",
                  },
                  {
                    skill: "Adaptabilité",
                    description:
                      "Flexibilité face aux changements et nouvelles technologies",
                  },
                  {
                    skill: "Résolution de problèmes",
                    description: "Approche analytique et créative des défis",
                  },
                  {
                    skill: "Gestion du temps",
                    description: "Organisation efficace et respect des délais",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.skill}
                    className="p-4 rounded-lg bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-black dark:text-white">
                      {item.skill}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section des cartes */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-20 relative"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-black dark:text-white">
          Projets
        </h2>
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

      {/* Nouvelle section Contact */}
      <section
        id="contact"
        className="w-full py-20 bg-gray-50/50 dark:bg-neutral-950/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-black dark:text-white">
            Contact
          </h2>
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;

                emailjs
                  .sendForm(
                    "service_kkr19qn",
                    "template_4e211g7", 
                    form,
                    "EJDEiQdr3r1_48Tqd" 
                  )
                  .then(
                    (result) => {
                      console.log("Email envoyé avec succès!");
                      form.reset();
                      // Vous pouvez ajouter une notification de succès ici
                    },
                    (error) => {
                      console.log("Erreur:", error.text);
                      // Vous pouvez ajouter une notification d'erreur ici
                    }
                  );
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-neutral-800 dark:border-neutral-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-neutral-800 dark:border-neutral-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:bg-neutral-800 dark:border-neutral-700"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <footer className="w-full py-12 bg-black dark:bg-neutral-900 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">
                  Thomas Durand
                </h3>
                <p className="text-gray-400">
                  Développeur Full Stack & UI/UX Designer
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">
                  Liens Rapides
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#timeline"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Mon Parcours
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Compétences
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Projets
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:votre.email@example.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/votre-profil"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/t-drnd"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Thomas Durand. Tous droits
                réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
}
