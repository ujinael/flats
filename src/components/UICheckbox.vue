<template>
<div class="ui_checkbox" @click="value=!value" :class="{checked:value}">
<CheckIcon v-if="value"/>
</div>

</template>
<script setup lang="ts">
import {computed} from "vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";

const props = defineProps<{
    modelValue:boolean
}>()
const emit = defineEmits<{
    (event:"update:modelValue",v:boolean):void
    (event:"change",v:boolean):void

}>()
const value = computed<boolean>({
    get(){return props.modelValue},
    set(v){
        emit('change',v)
        emit('update:modelValue',v)
    }
})
</script>
<style lang="scss">
.ui_checkbox{
  height: 16px;
  width: 16px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  border: 1px solid #C4C4C4;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
}
.checked{
  background-color: #FCE66F;
}
</style>