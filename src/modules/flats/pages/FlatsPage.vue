<template>
<div class="flats_page">
    <div class="page_header">
        <UiSearch v-model="searchString"/>
    </div>
    <div class="page_controls">
        <label><UICheckbox @change="onChange" v-model="elementVisible"/>все</label>
        <DeleteButton @click="onDelete"/>
        <FilterComponent/>
    </div>

    <ul class="estates">
        <EstateCard @selectEstate="flatsStore.selectEstate" v-for="item in getFlats" :real-estate="item" :key="item.id">

        </EstateCard>
    </ul>

</div>
</template>
<script setup lang="ts">
import {useFlatsStore} from "@/modules/flats";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import UiSearch from "@/components/UiSearch.vue";
import EstateCard from "@/modules/flats/components/EstateCard.vue";
import UICheckbox from "@/components/UICheckbox.vue";
import {useToggle} from "@/composables";
import DeleteButton from "@/components/DeleteButton.vue";
import FilterComponent from "@/modules/flats/components/FilterComponent.vue";

const flatsStore = useFlatsStore()
const {getFlats,searchString} = storeToRefs(flatsStore)
const {elementVisible} = useToggle()
const onDelete = ()=>{
flatsStore.deleteSelectedItems()
}
const onChange = (value:boolean)=>{
    if(value)flatsStore.selectAll()
    else flatsStore.deSelectAll()
}
onMounted(async ()=>{
  await  flatsStore.fetchFlats()
})
</script>
<style lang="scss" scoped>
.flats_page{
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    padding: .5rem;
}
.page_controls{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
}
label{
    display: flex;
    gap:.5rem;
}
.estates{

    display: grid;
    gap: 1rem;
    align-content: flex-start;
}
@media screen and (min-width: 699px) {
    .estates{
        grid-template-columns: repeat(auto-fit,minmax(480px,1fr));

    }
}


@media screen and (min-width: 1000px) {
    .flats_page{
        max-width: 1090px;
    }

}
@media screen and (min-width: 1400px) {
    .flats_page{
        max-width: 1400px;
    }
}
</style>