import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faSearch,
  faCartShopping,
  faUser,
  faHeart,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import "./index.css";

const pinia = createPinia();

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);
library.add(faCartShopping);
library.add(faUser);
library.add(faHeart);
library.add(faStar);
library.add(faXmark);

createApp(App)
  .use(router)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
