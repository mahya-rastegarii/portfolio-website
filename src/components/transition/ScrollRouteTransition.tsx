"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const routes = ["/", "/about", "/projects", "/contact"];

export default function ScrollRouteTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const currentIndex = routes.indexOf(pathname);
      let nextIndex = currentIndex;

      if (e.deltaY > 0 && currentIndex < routes.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        setIsScrolling(true);
        router.push(routes[nextIndex]);
        setTimeout(() => setIsScrolling(false), 1200);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling || touchStartY.current === null) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const currentIndex = routes.indexOf(pathname);
      let nextIndex = currentIndex;

      if (deltaY > 50 && currentIndex < routes.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (deltaY < -50 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        setIsScrolling(true);
        router.push(routes[nextIndex]);
        setTimeout(() => setIsScrolling(false), 1200);
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname]);

  return <>{children}</>;
}
