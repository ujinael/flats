<template>
  <ul class="filter_tags">
<li class="tag" v-for="item in filterTags">
    <CardTag @click="item.selected = !item.selected" :class="{unselected:!item.selected}" :status="item.tag"/>
</li>
  </ul>
</template>
<script setup lang="ts">
import {useFlatsStore} from "@/modules/flats";
import {storeToRefs} from "pinia";
import CardTag from "@/modules/flats/components/CardTag.vue";

const store = useFlatsStore()
const {filterTags} = storeToRefs(store)

</script>
<style lang="scss">
.filter_tags{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.tag{
  cursor: pointer;
}
.unselected{
  opacity: .5;
  &:hover{
    opacity: 1;
  }
}
</style>