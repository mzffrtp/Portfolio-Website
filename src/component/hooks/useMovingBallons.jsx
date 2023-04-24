import { useState, useEffect } from "react";

const useMovingBalloons = (startX, startY, speed) => {
  const [posX, setPosX] = useState(startX);
  const [posY, setPosY] = useState(startY);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosY((prevY) => prevY - speed);
      if (posY < -50) {
        setPosY(window.innerHeight + 50);
        setPosX(Math.random() * window.innerWidth);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [posX, posY, speed]);

  return { posX, posY };
};

export default useMovingBalloons;
