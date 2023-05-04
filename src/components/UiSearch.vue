<template>
    <div class="search">
        <SearchIcon class="search__icon"/>
        <input v-bind="$attrs" v-model="value" class="search__input" placeholder="Введите ЖК / корпус / № квартиры / № паркинга">
    </div>
</template>
<script setup lang="ts">
import {SearchIcon} from "@/components/icons";
import {computed} from "vue";
const props = defineProps<{
    modelValue:string
}>()
const emit = defineEmits<{
    (event:"update:modelValue",v:string):void
}>()
const value = computed<string>({
    get(){return props.modelValue},
    set(v){
        emit('update:modelValue',v)
    }
})
</script>
<style lang="scss">
.search{
    display: flex;
    border: 1px solid var(--color-border);
    padding: 10px 34px ;
    gap: 52px;
&__icon{

}
    &__input{
        display: inline-block;
        width: 100%;
        color: #9B9B9B;
border: none;
        background-color: transparent;
        &:focus-visible{
            outline: none;
        }
    }
}


</style>