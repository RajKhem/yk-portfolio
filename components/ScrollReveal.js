"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".work-card, .skill-card, .project-card"
    );

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}