<template>
<div class="estate_card">
    <div class="left-col" >
      <UICheckbox @click="onClick" :model-value="realEstate.selected" />
    </div>
    <div class="middle-col" >
        <div class="estate_card__header">
            <div class="estate_card__price"> {{realEstate.price}}&nbsp;руб.</div>
            <CardTypeTag class="estate_card__type_tag" :type="realEstate.type"> </CardTypeTag>

            <div class="estate_card__title">
                {{realEstate.title}},&nbsp;
                <span class="estate_card__commissioning_info">{{realEstate.commissioningInfo}}</span>

            </div>
        </div>

        <CardEstateParams :params="realEstate.params"/>
        <div class="estate_card__location">
            <GeoIcon/>
            {{realEstate.location}}</div>


    </div>
    <div class="right-col" >
        <CardTag :status="realEstate.state"/>

   <div class="estate_card__image">
       <img :src="imagePath">
   </div>
        <div class="estate_card__placement_date">
           Добавлено &nbsp;{{getDateStr}}
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import type {RealEstate} from "@/modules/flats";
import {computed} from "vue";
import GeoIcon from "@/components/icons/GeoIcon.vue";
import CardEstateParams from "@/modules/flats/components/CardEstateParams.vue";
import CardTag from "@/modules/flats/components/CardTag.vue";
import UICheckbox from "@/components/UICheckbox.vue";
import CardTypeTag from "@/modules/flats/components/CardTypeTag.vue";

const props = defineProps<{
    realEstate:RealEstate
}>()
const emit = defineEmits<{
    (event:'selectEstate',value:RealEstate):void
}>()
const onClick=()=>{
    emit('selectEstate',props.realEstate)
}
const imagePath = computed(()=>{
    return new URL(`../../../assets/images/${props.realEstate.imgPath}.png`,import.meta.url).href
})
const getDateStr = computed(()=>{
   return  props.realEstate.placementDate.toLocaleDateString("ru-RU",{dateStyle:"short"}).replaceAll(".","/")
})

</script>
<style scoped lang="scss">
.estate_card{
    background-color: #ffffff;
    display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 1.2rem;
  &__image{
    &>img{
      width: 100%;
    }
  }
  &__price{
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #FF0D29;
  }
  &__header{
    display: grid;
    justify-content: space-between;
  }
  &__price{
    grid-area: 1/1/2/2;

  }
  &__type_tag{
justify-self: flex-end;
  }
  &__title{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    grid-area: 2/1/3/3;
  }
  &__commissioning_info{
color: #808080;
  }
  &__placement_date{
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #9B9B9B;
  }
}
.left-col{
  display: flex;
  align-items: center;
  padding: 0 2rem 0 0;
}
.middle-col{
  display: flex;
  flex-direction: column;
justify-content: space-between;

}
.middle-col,.right-col{
  display: flex;
  flex-direction: column;
  gap:1.5rem 0;
}
.right-col{
  align-items: flex-end;

}
</style>