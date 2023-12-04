import { useEffect } from "react";

export function useKey(key, fn) {
  // useEffect - close collection display and go back when Escape key is pressed
  useEffect(() => {
    const callback = function (e) {
      if (e.code === key) fn();
    };

    document.addEventListener("keydown", callback);

    // clean up
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [fn, key]);
}
