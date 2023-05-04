import { ref } from "vue";

export const useLoadingDecorator = () => {
    const loading = ref(false);
    function loadingDecorator<This, Args, Returned>(
        decorated: (...args: Args[]) => Promise<Returned>
    ) {
        return async function (this: This, ...args: Args[]):Promise<Returned>{
            loading.value = true;
            const result = await decorated.apply(this, args);
            loading.value = false;

            return result;
        };
    }
    return {
        loading,loadingDecorator
    }
};