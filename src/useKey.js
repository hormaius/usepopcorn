import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      // -- cleanup function
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      // -- cleanup end
      // - add event listener
      document.addEventListener("keydown", callback);
      // - execute cleanup, remove event listener
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
