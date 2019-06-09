import { useEffect } from "react";

export default id => {
  useEffect(() => {
    /*
     * can controll restoring scroll positions
     */
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return window.scrollTo(
      0,
      typeof id === "undefined" ? 0 : document.getElementById(id).offsetTop
    );
  }, [id]);
};

/* ToDo
 - scroll시 menu 색상 변경
 */
