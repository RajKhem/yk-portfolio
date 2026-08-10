"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(
        ".work-card, .skill-card, .project-card"
      )
    );

    if (!cards.length) return;

    let ticking = false;

    const updateActiveCard = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestCard = null;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        // Viewport बाहिरको card ignore गर्ने
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          return;
        }

        const cardCenter = rect.top + rect.height / 2;

        const distance = Math.abs(
          cardCenter - viewportCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      cards.forEach((card) => {
        card.classList.toggle(
          "is-visible",
          card === closestCard
        );
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveCard);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveCard);

    // Initial state
    updateActiveCard();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  return null;
}