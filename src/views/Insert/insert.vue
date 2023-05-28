<template>
  <div class="insert">
    <el-button type="primary" @click="goBack()">返回</el-button>
    <el-form
      :label-position="labelPosition"
      label-width="200px"
      :model="current"
      style="max-width: 1000px"
    >
      <el-form-item label="id">
        <el-input v-model="bloodJSon.id" />
      </el-form-item>
      <el-form-item label="image">
        <el-input v-model="bloodJSon.image" />
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="bloodJSon.name" />
      </el-form-item>
      <el-form-item label="edition">
        <el-input v-model="bloodJSon.edition" />
      </el-form-item>
      <el-form-item label="team">
        <el-input v-model="bloodJSon.team" />
      </el-form-item>
      <el-form-item label="firstNight">
        <el-input v-model="bloodJSon.firstNight" />
      </el-form-item>
      <el-form-item label="otherNight">
        <el-input v-model="bloodJSon.otherNight" />
      </el-form-item>
      <el-form-item label="otherNightReminder">
        <el-input v-model="bloodJSon.otherNightReminder" />
      </el-form-item>
      <el-form-item label="reminders">
        <el-input v-model="bloodJSon.reminders" />
      </el-form-item>
      <el-form-item label="setup">
        <el-switch v-model="bloodJSon.setup" />
      </el-form-item>
      <el-form-item label="ability">
        <el-input v-model="bloodJSon.ability" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">
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
});

const props = defineProps({});
const labelPosition = ref("right");
const goBack = () => {
  router.go(-1);
};
const submitForm = () => {
  store.bloodJSon.push(bloodJSon.value)
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
