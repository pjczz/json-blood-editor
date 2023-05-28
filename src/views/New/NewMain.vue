<template>
  <el-button type="primary" :icon="Remove" @click="clearBloodJSon()">清空缓存数据</el-button>
  <el-transfer
    v-model="Tfvalue"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data[0]"
    :titles="['镇民列表', '当前镇民角色']"
  />
  <el-transfer
    v-model="Osvalue"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data[1]"
    :titles="['外来列表', '当前外来角色']"
  />
  <el-transfer
    v-model="Mivalue"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data[2]"
    :titles="['爪牙列表', '当前爪牙角色']"
  />
  <el-transfer
    v-model="Dmvalue"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data[3]"
    :titles="['恶魔列表', '当前恶魔角色']"
  />
  <el-button type="primary" @click="submitForm()"> 保存 </el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "../../store/index.js";
import {Remove} from "@element-plus/icons-vue";
let store = useBlood();
let route = useRoute();
let router = useRouter();
interface Option {
  ability: string;
  edition: string;
  firstNight: number;
  firstNightReminder: string;
  id: string;
  image: string;
  name: string;
  otherNightReminder: string;
  reminders: string[];
  setup: boolean;
  team: string;
}

const generateData = () => {
  // 思路是将四种身份类型分开添加 到时候搞个华灯json数据直接开冲
  const Tfdata: Option[] = [];
  const Osdata: Option[] = [];
  const Midata: Option[] = [];
  const Dmdata: Option[] = [];

  const townsfolk = ref([]);
  const outsider = ref([]);
  const minion = ref([]);
  const demon = ref([]);

  store.AllJSon.forEach((item, index) => {
    if (item.team) {
      if (item.team == "townsfolk") townsfolk.value.push(item);
      if (item.team == "outsider") outsider.value.push(item);
      if (item.team == "minion") minion.value.push(item);
      if (item.team == "demon") demon.value.push(item);
    }
  });

  const initials = townsfolk.value;
  townsfolk.value.forEach((item, index) => {
    Tfdata.push({
      label: item.name,
      key: index,
      initial: townsfolk.value[index].name,
    });
  });
  outsider.value.forEach((item, index) => {
    Osdata.push({
      label: item.name,
      key: index,
      initial: outsider.value[index].name,
    });
  });
  minion.value.forEach((item, index) => {
    Midata.push({
      label: item.name,
      key: index,
      initial: minion.value[index].name,
    });
  });
  demon.value.forEach((item, index) => {
    Dmdata.push({
      label: item.name,
      key: index,
      initial: demon.value[index].name,
    });
  });
  return [Tfdata, Osdata, Midata, Dmdata, townsfolk.value, outsider.value, minion.value, demon.value];
};

const data = ref<Option[][]>(generateData());
const Tfvalue = ref([]);
const Osvalue = ref([]);
const Mivalue = ref([]);
const Dmvalue = ref([]);

const filterMethod = (query: string, item: any) => {
  return item.initial.includes(query);
};
const submitForm = () => {
  // 镇民
  Tfvalue.value.forEach((item, index) => {
    store.bloodJSon.push(data.value[4][item]);
  });
  // 外来
  Osvalue.value.forEach((item, index) => {
    store.bloodJSon.push(data.value[5][item]);
  });
  // 爪牙
  Mivalue.value.forEach((item, index) => {
    store.bloodJSon.push(data.value[6][item]);
  });
  // 恶魔
  Dmvalue.value.forEach((item, index) => {
    store.bloodJSon.push(data.value[7][item]);
  });
};
// 清除之前的数据 
const clearBloodJSon=()=>{
  store.bloodJSon= []
}
</script>
