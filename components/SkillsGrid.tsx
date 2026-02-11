"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

interface Skill {
  name: string;
  slug: string;
}

interface SkillsGridProps {
  skills: Skill[];
  className?: string;
}

export function SkillsGrid({ skills, className = "" }: SkillsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const timelineRefs = useRef<Map<string, gsap.core.Timeline>>(new Map());
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Détecter prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Initialiser les timelines GSAP pour chaque carte
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        skills.forEach((skill) => {
          const cardElement = cardRefs.current.get(skill.slug);
          if (!cardElement) return;

          const innerElement = cardElement.querySelector(
            "[data-card-inner]"
          ) as HTMLElement;
          if (!innerElement) return;

          // Créer une timeline pour cette carte
          const tl = gsap.timeline({ paused: true });
          timelineRefs.current.set(skill.slug, tl);

          if (prefersReducedMotion) {
            // Mode reduced motion : swap opacity instantané
            const frontFace = cardElement.querySelector(
              "[data-card-front]"
            ) as HTMLElement;
            const backFace = cardElement.querySelector(
              "[data-card-back]"
            ) as HTMLElement;

            if (frontFace && backFace) {
              tl.to(
                [frontFace, backFace],
                {
                  opacity: 0,
                  duration: 0,
                  immediateRender: false,
                },
                0
              )
                .to(
                  [frontFace, backFace],
                  {
                    opacity: 1,
                    duration: 0,
                    immediateRender: false,
                  },
                  0.5
                )
                .to(
                  cardElement,
                  {
                    scale: 1.03,
                    boxShadow:
                      "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 4px 16px 0 rgba(0, 0, 0, 0.1)",
                    duration: 0,
                    immediateRender: false,
                  },
                  0
                );
            }
          } else {
            // Mode normal : flip 3D avec scale et shadow
            tl.to(innerElement, {
              rotationY: 180,
              scale: 1.03,
              duration: 0.6,
              ease: "power2.inOut",
            }).to(
              cardElement,
              {
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 4px 16px 0 rgba(0, 0, 0, 0.1)",
                duration: 0.3,
                ease: "power2.out",
              },
              0
            );
          }
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef, dependencies: [skills, prefersReducedMotion] }
  );

  const handleEnter = (skillSlug: string) => {
    const tl = timelineRefs.current.get(skillSlug);
    if (tl) {
      tl.play();
    }
  };

  const handleLeave = (skillSlug: string) => {
    const tl = timelineRefs.current.get(skillSlug);
    if (tl) {
      tl.reverse();
    }
  };

  const handleClick = (skillSlug: string) => {
    // Pour mobile : toggle flip avec state
    if (prefersReducedMotion) {
      setFlippedCards((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(skillSlug)) {
          newSet.delete(skillSlug);
          handleLeave(skillSlug);
        } else {
          newSet.add(skillSlug);
          handleEnter(skillSlug);
        }
        return newSet;
      });
    } else {
      // Sur desktop, le hover gère déjà le flip
      // Sur mobile, on toggle manuellement
      const isFlipped = flippedCards.has(skillSlug);
      if (isFlipped) {
        handleLeave(skillSlug);
        setFlippedCards((prev) => {
          const newSet = new Set(prev);
          newSet.delete(skillSlug);
          return newSet;
        });
      } else {
        handleEnter(skillSlug);
        setFlippedCards((prev) => {
          const newSet = new Set(prev);
          newSet.add(skillSlug);
          return newSet;
        });
      }
    }
  };

  const setCardRef = (skillSlug: string, element: HTMLDivElement | null) => {
    if (element) {
      cardRefs.current.set(skillSlug, element);
    } else {
      cardRefs.current.delete(skillSlug);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ${className}`}
      style={{ perspective: "1000px" }}
    >
      {skills.map((skill) => (
        <div
          key={skill.slug}
          ref={(el) => {
            setCardRef(skill.slug, el);
            if (el) {
              el.style.zIndex = "1";
            }
          }}
          className="relative w-full aspect-square cursor-pointer overflow-hidden"
          style={{ 
            transformStyle: "preserve-3d",
            isolation: "isolate",
            zIndex: 1,
          }}
          onMouseEnter={() => {
            // Augmenter z-index au hover pour éviter chevauchement
            const card = cardRefs.current.get(skill.slug);
            if (card) {
              card.style.zIndex = "10";
            }
            handleEnter(skill.slug);
          }}
          onMouseLeave={() => {
            // Réinitialiser z-index
            const card = cardRefs.current.get(skill.slug);
            if (card) {
              card.style.zIndex = "1";
            }
            handleLeave(skill.slug);
          }}
          onFocus={() => handleEnter(skill.slug)}
          onBlur={() => handleLeave(skill.slug)}
          onClick={() => handleClick(skill.slug)}
          tabIndex={0}
          role="button"
          aria-label={`${skill.name} skill card`}
        >
          {/* Inner container pour la rotation 3D */}
          <div
            data-card-inner
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transition: prefersReducedMotion
                ? "opacity 0.2s ease"
                : "none",
            }}
          >
            {/* Face front */}
            <div
              data-card-front
              className="absolute inset-0 w-full h-full flex items-center justify-center rounded-lg bg-gray-100/70 dark:bg-gray-800/70 border border-gray-300/60 dark:border-gray-600/60 shadow-xl"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: prefersReducedMotion
                  ? "none"
                  : "rotateY(0deg)",
              }}
            >
              <span className="text-sm font-semibold text-center px-2 text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
            </div>

            {/* Face back */}
            <div
              data-card-back
              className="absolute inset-0 w-full h-full flex items-center justify-center rounded-lg bg-gray-100/70 dark:bg-gray-800/70 border border-gray-300/60 dark:border-gray-600/60 shadow-xl"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: prefersReducedMotion
                  ? "rotateY(0deg)"
                  : "rotateY(180deg)",
              }}
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <img
                  src={`/logos/${skill.slug}.svg`}
                  alt={skill.name}
                  className="w-full h-full object-contain filter dark:brightness-0 dark:invert"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".fallback-text")) {
                      const fallback = document.createElement("span");
                      fallback.className = "fallback-text text-xs text-gray-800 dark:text-white opacity-80 text-center font-medium";
                      fallback.textContent = skill.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

