<template>
<div :title="localization[status]" class="status_tag" :class="[status]">
    <span class="dot">&#8226;</span>
    &nbsp;{{localization[status]}}
</div>
</template>
<script setup lang="ts">
import {EstateStatus} from "@/modules/flats";

const props =defineProps<{
    status:EstateStatus
}>()

const localization:Record<EstateStatus, string> = {
    "from_lawer":"Уступка от юр.лица",
    "from_physic":"Уступка от физ.лица",
    "sold":"Продано",
    "bronned":"Забронировано"
}

</script>
<style lang="scss">
.status_tag{
  padding:6px 9px ;
  font-family: PT Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
}
.status_tag.from_lawer{
  background-color: var(--color-from-lawer);
  color: #DD4C5D;
}
.status_tag.from_physic{
  background-color: var(--color-from-physic);
  color: #0291C1;
}
.status_tag.bronned{
  background-color: var(--color-bronned);
  color: #686868;
}
.status_tag.sold{
  background-color: var(--color-sold);
  color: #808080;
}
.dot{
  font-size: large;
  line-height: 1rem;
}
</style>