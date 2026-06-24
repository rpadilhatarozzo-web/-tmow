import { useState, useEffect } from 'react';

const defaultObserverOptions = { rootMargin: '-30% 0px -60% 0px', threshold: 0 };

/**
 * Custom hook to track the active section in view.
 * @param {string[]} sectionIds - Array of section element IDs to track.
 * @param {object} options - IntersectionObserver configuration options.
 * @returns {string} - The active section ID.
 */
export default function useScrollSpy(sectionIds, options = defaultObserverOptions) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(listener, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeId;
}
