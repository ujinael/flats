import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {EstateStatus,type FilterTag, RealEstate} from "@/modules/flats";
import flatsJson from "@/api/real_estates.json"
import {plainToInstance} from "class-transformer";
export const useFlatsStore = defineStore("flats_store",()=>{
const flats = ref<RealEstate[]>([])
  const searchString = ref("")
const filterTags = ref<Array<FilterTag>>(Object.values(EstateStatus).map(value=>({
  tag:value,
  selected:false
    }))
 )
const selectedTags = computed(()=>filterTags.value.filter(tag=>tag.selected))

  const getFlats = computed(()=>{

    if(searchString.value.length)return flats.value.filter(flat=>{
        const normalizeString = searchString.value.toLowerCase().replace(" ","")
        return  (flat.title+flat.params.article+flat.params.flatNumber+flat.commissioningInfo).toLowerCase().replace(" ","").includes(normalizeString)

    })
        else if(selectedTags.value.length){
       return  flats.value.filter(flat=>{
           const pretender = selectedTags.value.find(tag=>tag.tag===flat.state)
           if(pretender)return true
           else return false
       })
    }
    else return flats.value


  })
  const selectEstate = (estate:RealEstate)=>{
  const pretender = flats.value.find(flat=>flat.id === estate.id)
    if(pretender){
      pretender.selected = !pretender.selected
    }
  }
  const deleteSelectedItems = ()=>{
  flats.value = flats.value.filter(flat=>!flat.selected)
  }
  const selectAll = ()=>{
    flats.value.forEach(flat=>flat.selected = true)
  }
  const deSelectAll = ()=>{
    flats.value.forEach(flat=>flat.selected = false)
  }
  const fetchFlats=async():Promise<void>=>{
    const path = new URL("@/api/real_estates.json",import.meta.url).href
    const result = await fetch(path)
        .then(resp=>resp.json())
      flats.value = plainToInstance(RealEstate,result)
    }

return{
  filterTags,
    flats,
  getFlats,
  searchString,
  selectEstate,
  fetchFlats,
  deleteSelectedItems,
  selectAll,
  deSelectAll
}

})