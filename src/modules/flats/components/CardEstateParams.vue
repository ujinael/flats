<template>
    <div class="estate_params">
        <ul class="col">
          <li v-if="params.flatNumber">кв.{{params.flatNumber}}</li>
            <li v-if="params.flatRoom">{{params.flatRoom}}&nbsp;комн.кв.</li>
            <li v-if="params.article">{{params.article}}</li>
        </ul>
        <ul class="col px-4">
            <li >{{params.square}}&nbsp;м<sup>2</sup></li>
            <li v-if="params.floor">{{params.floor}}&nbsp;этаж</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import type {EstateParams} from "@/modules/flats";

const props = defineProps<{
    params:EstateParams
}>()
</script>
<style lang="scss">
.estate_params{
  display: flex;
  gap: 1px;
  background-color: #C4C4C4;
}
.col{
  background-color: #ffffff;
flex:1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.col.px-4{
  padding: 0 28px;
}
sup{
  font-size: x-small;
}
</style>