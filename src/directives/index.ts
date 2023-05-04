
import type { Plugin } from "vue";
import clickOutside from "./click-outside";

export const directivesPlugin: Plugin = {
    install(app) {
        app.directive("click-outside", clickOutside);
    },
};