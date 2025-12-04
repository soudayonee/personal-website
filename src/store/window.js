import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        const currentTop = Math.max(
          ...Object.values(state.windows).map((w) => w.zIndex)
        );

        win.isOpen = true;
        win.zIndex = data ? currentTop + 10 : currentTop + 1;
        win.data = data ?? win.data;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        const currentTop = Math.max(
          ...Object.values(state.windows).map((w) => w.zIndex)
        );

        win.zIndex = currentTop + 1;
      }),
  }))
);

export default useWindowStore;
