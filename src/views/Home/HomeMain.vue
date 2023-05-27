<template>
  <div class="home-main">
    <div class="main-body">
    <div v-for="(item, index) in store.bloodJSon" key="item.id">
      <MainCell :blood-obj="item" />
      
    </div>
    <div class="insert"><el-button type="primary" size="large" :icon="Plus" @click="goInsert()" /></div>
    
  </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  defineProps,
  defineEmits,
  onActivated,
  computed,
  nextTick,
  watchEffect,
  toRefs,
} from "vue";
import MainCell from "./MainCell.vue";
import { Plus } from '@element-plus/icons-vue'
import {useBlood} from "../../store/index.js";
import {useRouter} from 'vue-router';
let store = useBlood()
let router = useRouter()
const props = defineProps({
  bloodJSon: { type: Array, required: true, default: () => [] },
});
const goInsert=()=>{
  router.push({path:'/insert'})
}
console.log();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-body {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-gap: 20px;
  .insert{
    display: flex;
    justify-content:center;
    align-items:center;
  }

}
</style>
