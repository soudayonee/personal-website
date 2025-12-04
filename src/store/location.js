import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, photosLinks } from "#constants";

const WORK_LOCATION = locations.work;
const ABOUT_LOCATION = locations.about;

const DEFAULT_LOCATION = WORK_LOCATION || ABOUT_LOCATION;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        if (location === undefined) return;
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

const DEFAULT_PHOTOS = photosLinks[0];

export const usePhotosStore = create(
  immer((set) => ({
    activePhotos: DEFAULT_PHOTOS,

    setActivePhotos: (photos) =>
      set((state) => {
        if (photos === undefined) return;
        state.activePhotos = photos;
      }),

    resetActivePhotos: () =>
      set((state) => {
        state.activePhotos = DEFAULT_PHOTOS;
      }),
  }))
);

export default useLocationStore;
