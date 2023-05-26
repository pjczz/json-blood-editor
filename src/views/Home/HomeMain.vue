<template>
  <div class="home-main">
    {{ bloodJSon[0] }}
    <div class="main-body">
    <div v-for="(item, index) in store.bloodJSon" key="item.id">
      <MainCell :blood-obj="item" />
    </div>
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
import {useBlood} from "../../store/index.js";
let store = useBlood()
const props = defineProps({
  bloodJSon: { type: Array, required: true, default: () => [] },
});

console.log();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-body {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-gap: 20px;

}
</style>
