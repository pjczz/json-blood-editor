<template>
  <div class="edit">
    <el-button type="primary" @click="goBack()">返回</el-button>
    <el-form
      :label-position="labelPosition"
      label-width="200px"
      :model="current"
      style="max-width: 1000px"
    >
      <el-form-item :label="item" v-for="(item, index) in Object.keys(current)">
        <el-switch v-model="current[item]" v-if="item == 'setup'" />

        <el-input v-model="current[item]" v-else />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(current)">
          保存
        </el-button>
      </el-form-item>
    </el-form>
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
import { useRoute, useRouter } from "vue-router";
import {useBlood} from "../../store/index.js";
let store = useBlood();
let route = useRoute();
let router = useRouter();
let current = ref();
let bloodJSon;
store.bloodJSon.forEach((item, index) => {
  if (route.params.id == item.id) {
    current.value = item;
    bloodJSon = Object.assign(item);
    console.log(bloodJSon);
  }
});

const props = defineProps({});
const labelPosition = ref("right");
const goBack = () => {
  router.go(-1);
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  console.log(store.bloodJSon);
};
const OnFormChange = () => {
  console.log(store.bloodJSon);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-cell {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.main-cell .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.main-cell .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
