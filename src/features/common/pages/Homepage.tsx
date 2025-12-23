import { useLayoutEffect } from "react";
import ParallaxLanding from "../components/parallax/ParallaxLanding"; // Assuming parallax folder is inside components

const Homepage = () => {
  useLayoutEffect(() => {
    // Multi-stage scroll to top to override any scroll restoration

    // Stage 1: Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Stage 2: Use requestAnimationFrame for next paint cycle
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    // Stage 3: Delayed fallback
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);

    // Stage 4: Additional safety net
    const timeoutId2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      {/* Note: TopSection, MiddleSection, and Footer are imported but not rendered 
        in this specific file in your previous code (they might be inside ParallaxLanding).
        I have kept the imports as per your request.
      */}
      <ParallaxLanding />
    </div>
  );
};

export default Homepage;