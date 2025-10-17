"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./component/Loding";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize loader
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize AOS after loader is gone
    if (!loading) {
      AOS.init({
        duration: 900,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });
    }
  }, [loading]);

  if (loading) return <Loader />;

  return <>{children}</>;
}

