import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => {
          //   const header = el.querySelector("#window-header");
          //   const isInHeader = header && header.contains(e.target);

          //   if (!isInHeader) {
          //     this.dragDisabled = true;
          //     this.endDrag();
          //   } else {
          //     this.dragDisabled = false;
          focusWindow(windowKey);
          // }
        },
        zIndexBoost: false,
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.zIndex = zIndex;
    }, [zIndex]);

    // If click outside to close window (optional)
    // useLayoutEffect(() => {
    //   const el = ref.current;
    //   if (!el) return;

    //   const root = document.getElementById("root");

    //   const handleClickOutside = (e) => {
    //     const clickedInsideWindow = el.contains(e.target);
    //     const clickedInsideRoot = root && root.contains(e.target);

    //     // Hanya tutup jika:
    //     // 1. Klik di area root
    //     // 2. Bukan klik dalam window
    //     // 3. Window sedang terbuka
    //     if (
    //       clickedInsideRoot &&
    //       !clickedInsideWindow &&
    //       windows[windowKey]?.isOpen
    //     ) {
    //       useWindowStore.getState().closeWindow(windowKey);
    //     }
    //   };

    //   document.addEventListener("mousedown", handleClickOutside);

    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [windows, isOpen]);
    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
