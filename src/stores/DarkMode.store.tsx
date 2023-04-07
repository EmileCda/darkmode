/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";

export type DarkModeStore = {
  isDark : boolean;
};

export const DarkModeStore = map<DarkModeStore>({
  isDark : false,
});



export const toggleIsDark = action(
  DarkModeStore,
  "toggleIsDark",
  (store) => {
    const { isDark } = store.get();
    store.setKey("isDark", !isDark);
  }
);
