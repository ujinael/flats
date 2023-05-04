<template>
  <button class="delete_btn">
      Удалить
      <GarbageIcon/>
  </button>
</template>
<script setup lang="ts">
import GarbageIcon from "@/components/icons/GarbageIcon.vue";
</script>
<style lang="scss">
.delete_btn{
  display: inline-flex;
  gap: 1rem;
  border: 1px solid transparent;
  background-color: var(--color-delete);
  padding:9px 13px ;
  &:hover{
    cursor: pointer;
  }
}
</style>