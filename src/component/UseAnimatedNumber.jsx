import { useState, useEffect } from "preact/hooks";

const useAnimatedNumbers = (
  data,
  triggerAnimation = true,
  animationDuration = 3000,
  updateInterval = 20
) => {
  const [animatedNumbers, setAnimatedNumbers] = useState(
    Array(data.length).fill(0)
  );

  useEffect(() => {
    let startTime;
    let animationFrameId;
    let animationStartTime;

    const animateNumbers = () => {
      animationStartTime = performance.now();
      const elapsedTime = animationStartTime - startTime;
      const progress = Math.min(1, elapsedTime / animationDuration);

      const updatedNumbers = data.map(({ number }) => {
        if (typeof number === "number") {
          return Math.round(progress * number);
        } else if (typeof number === "string" && /^\d+$/.test(number)) {
          return Math.round(progress * parseInt(number, 10));
        } else if (typeof number === "string" && /^\d+\+$/.test(number)) {
          return Math.round(progress * parseInt(number.slice(0, -1), 10)); // Remove the '+' sign for parsing
        } else {
          return 0;
        }
      });

      setAnimatedNumbers(updatedNumbers);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateNumbers);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    if (triggerAnimation) {
      startTime = performance.now();
      animateNumbers();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [data, triggerAnimation, animationDuration]);

  return animatedNumbers;
};

export default useAnimatedNumbers;
