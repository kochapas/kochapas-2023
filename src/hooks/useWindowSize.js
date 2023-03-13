import { useState, useEffect } from "react";

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match.
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    containerClass: "container-fluid w-75",
  });

  useEffect(() => {
    // Handler to call on window resize.
    const handleResize = () => {
      // If the screen is smaller than large size, don't squeeze the container.
      // If the screen is big enough, squeeze the container with w-75 to make the page looks like reading from paper.
      const newContainerClass = (window.innerWidth < 992) ? "container-fluid ms-1 me-1" : "container-fluid w-75";

      // Set window width/height to state.
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        containerClass: newContainerClass,
      });
    }
    // Add event listener.
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size.
    handleResize();
    // Remove event listener on cleanup.
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount.

  return windowSize;
}
