import { useState, useEffect } from "react";

export const useScrollLocation = () => {
  const [scrollLocation, setScrollLocation] = useState({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    // Handler to call on window scroll.
    const handleScroll = () => {
      // Set window width/height to state.
      setScrollLocation({
        x: window.scrollX,
        y: window.scrollY,
      });
    }
    // Add event listener.
    window.addEventListener("scroll", handleScroll);
    // Call handler right away so state gets updated with initial window scroll.
    handleScroll();
    // Remove event listener on cleanup.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures that effect is only run on mount.

  return scrollLocation;
}
