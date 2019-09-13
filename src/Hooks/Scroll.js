import { useEffect, useState } from "react";

export default ({ y = 0, id, option = false }) => {
  if (typeof y !== "number" || typeof option !== "boolean") {
    return;
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const element = document.getElementById(id);

    if (element === null) {
      return setLoading(false);
    }

    /* can controll restoring scroll positions */
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: element.offsetTop + y,
      behavior: option ? "smooth" : "auto"
    });
  }, [id, loading, option, y]);
  return loading;
};
