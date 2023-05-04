import { ref } from "vue"

export const useToggle = () => {
    const elementVisible = ref(false)
    const pos = ref({left:0,top:0})
    const toggleElement = () => {
        elementVisible.value = !elementVisible.value
    }
    return {
        elementVisible,toggleElement,pos
    }
}