/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../components/Navbar";
;

export type LangStore = {
  lang: TLang;
  isVisibleTossMenu: boolean;
};

export const langStore = map<LangStore>({
  lang: TLang.fr,
  isVisibleTossMenu: false,
});

export const setLang = action(
  langStore,
  "setIndex",
  (store, newLang: TLang) => {
    store.setKey("lang", newLang);
  }
);

export const toggleIsVisibleTossMenu = action(
  langStore,
  "toggleIsVisibleTossMenu",
  (store) => {
    const { isVisibleTossMenu } = store.get();
    store.setKey("isVisibleTossMenu", !isVisibleTossMenu);
  }
);
