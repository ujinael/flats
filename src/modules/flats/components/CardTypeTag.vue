<template>
    <div class="type_tag">
<component :is="icons[type]"/>
        &nbsp;{{localization[type]}}
    </div>
</template>
<script setup lang="ts">

import type {EstateTypes} from "@/modules/flats";
import {CarIcon,FlatIcon} from "@/components/icons"
import type {Component} from "vue";
const props =defineProps<{
    type:EstateTypes
}>()
const icons:Record<EstateTypes,Component>= {
    "parking":CarIcon,
    "flat":FlatIcon
}
const localization:Record<EstateTypes, string> = {
    "parking":"Паркинг",
    "flat":"Квартира",
}

</script>
<style lang="scss">
.type_tag{
  display: flex;
  box-shadow: 0px 0px 2px rgba(94, 119, 157, 0.25);
  align-items: center;
  border-radius: 32px;
  padding: 5px 16px;
}
</style>