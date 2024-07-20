import { create } from "zustand";

export const useLangStore = create((set) => ({
  lang: "hi",
  translation: "",

  changeLang: (lng) => {
    set((state) => ({
      ...state,
      lang: lng,
    }));
  },

  changeTranslation: (trans) => {
    set((state) => ({
      ...state,
      translation: trans,
    }));
  },
}));
