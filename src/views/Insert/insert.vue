<template>
  <div class="insert">
    <el-button type="primary" @click="goBack()">返回</el-button>
    <el-form
      :label-position="labelPosition"
      label-width="200px"
      :model="current"
      style="max-width: 1000px"
    >
      <el-form-item label="首夜提示">
        <el-input v-model="bloodJSon.firstNightReminder" />
      </el-form-item>
      <el-form-item label="是否官方">
        <el-switch v-model="bloodJSon.isOfficial" />
      </el-form-item>
      <el-form-item label="其他夜提示">
        <el-input v-model="bloodJSon.otherNightReminder" />
      </el-form-item>
      <el-form-item label="角色名">
        <el-input v-model="bloodJSon.name" />
      </el-form-item>
      <el-form-item label="其他夜顺序">
        <el-input v-model="bloodJSon.otherNight" />
      </el-form-item>
      <el-form-item label="是否首夜行动">
        <el-switch v-model="bloodJSon.setup" />
      </el-form-item>
      <el-form-item label="提示">
        <el-input v-model="bloodJSon.reminders" />
      </el-form-item>
      <el-form-item label="id">
        <el-input v-model="bloodJSon.id" />
      </el-form-item>
      <el-form-item label="版本">
        <el-input v-model="bloodJSon.edition" />
      </el-form-item>
      <el-form-item label="阵营">
        <el-input v-model="bloodJSon.team" />
      </el-form-item>
      <el-form-item label="英文名">
        <el-input v-model="bloodJSon.name_eng" />
      </el-form-item>
      <el-form-item label="首夜顺序">
        <el-input v-model="bloodJSon.firstNight" />
      </el-form-item>
      <el-form-item label="角色能力">
        <el-input v-model="bloodJSon.ability" />
      </el-form-item>
      <el-form-item label="图片地址">
        <el-input v-model="bloodJSon.image" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()"> 添加 </el-button>
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
  reactive,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "../../store/index.js";
let store = useBlood();
let route = useRoute();
let router = useRouter();
let current = ref();
let bloodJSon = ref({
  id: "",
  image: "",
  name: "",
  edition: "",
  team: "",
  firstNight: 0,
  firstNightReminder: "",
  otherNight: 0,
  otherNightReminder: "",
  reminders: [],
  setup: false,
  ability: "",
  isOfficial: false,
  name_eng: "",
});

const props = defineProps({});
const labelPosition = ref("right");
const goBack = () => {
  router.go(-1);
};
const submitForm = () => {
  store.bloodJSon.push(bloodJSon.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
