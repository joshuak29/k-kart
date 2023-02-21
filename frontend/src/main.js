import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faSearch,
  faCartShopping,
  faUser,
  faHeart,
  faStar,
  faXmark,
  faArrowLeft,
  faTrash,
  faCreditCard,
  faBars,
  faFilter,
  faHouse,
  faCartFlatbed,
  faSliders,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import router from "./router";
import "./index.css";

const pinia = createPinia();

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleLeft);
library.add(faAngleUp);
library.add(faCartShopping);
library.add(faUser);
library.add(faHeart);
library.add(faStar);
library.add(faXmark);
library.add(faArrowLeft);
library.add(faTrash);
library.add(faCreditCard);
library.add(faBars);
library.add(faFilter);
library.add(faHouse);
library.add(faCartFlatbed);
library.add(faSliders);
library.add(faGear);
library.add(faArrowRightFromBracket);

createApp(App)
  .use(router)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
