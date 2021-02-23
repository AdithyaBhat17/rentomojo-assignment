import { useEffect, useState } from "react";
import { WindowDimensions } from "../types";

export function useWindowResize(): WindowDimensions {
  const [dimensions, setDimensions] = useState<WindowDimensions>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  function updateDimensions() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return function () {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
}
