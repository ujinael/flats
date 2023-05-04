import type { Directive, DirectiveBinding } from "vue";
interface DirectiveHTMLElement extends HTMLElement {
    clickOutsideEvent: (event: Event) => void;
}
export const clickOutside: Directive = {
    // export default {

    mounted(
        el: DirectiveHTMLElement,
        binding: DirectiveBinding<(event: Event) => void>
    ) {
        if (!el) return;
        el.clickOutsideEvent = function (event: Event) {
            if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value(event);
            }
        };
        document.body.addEventListener("mousedown", el.clickOutsideEvent);
    },
    unmounted(el: DirectiveHTMLElement) {
        document.body.removeEventListener("mousedown", el.clickOutsideEvent);
    },
};

export default clickOutside;


