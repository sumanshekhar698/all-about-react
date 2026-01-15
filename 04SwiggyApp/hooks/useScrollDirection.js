import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  //   const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show condensed header when scrolled down more than 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      //   setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    //Cleanup Function. In React, if you return a function inside a useEffect, React will call that function right before the component disappears (unmounts).
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};
