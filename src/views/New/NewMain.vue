<template>
  <el-transfer
    v-model="Tfvalue"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data[0]"
    :titles="['角色列表', '当前剧本角色']"
  />
  <el-transfer
  v-model="Osvalue"
  filterable
  :filter-method="filterMethod"
  filter-placeholder="State Abbreviations"
  :data="data[1]"
  :titles="['角色列表', '当前剧本角色']"
/>
<el-transfer
  v-model="Mivalue"
  filterable
  :filter-method="filterMethod"
  filter-placeholder="State Abbreviations"
  :data="data[2]"
  :titles="['角色列表', '当前剧本角色']"
/>
<el-transfer
  v-model="Dmvalue"
  filterable
  :filter-method="filterMethod"
  filter-placeholder="State Abbreviations"
  :data="data[3]"
  :titles="['角色列表', '当前剧本角色']"
/>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "../../store/index.js";
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
  demon;
  store.bloodJSon.forEach((item, index) => {
    if (item.team) {
      if (item.team == "townsfolk") townsfolk.value.push(item.name);
      if (item.team == "outsider") outsider.value.push(item.name);
      if (item.team == "minion") minion.value.push(item.name);
      if (item.team == "demon") demon.value.push(item.name);
    }
  });
  console.log(store.bloodJSon);
  console.log(townsfolk.value);

  const initials = townsfolk.value;
  townsfolk.value.forEach((name, index) => {
    Tfdata.push({
      label: name,
      key: index,
      initial: townsfolk.value[index],
    });
  });
  outsider.value.forEach((name, index) => {
    Osdata.push({
      label: name,
      key: index,
      initial: outsider.value[index],
    });
  });
  minion.value.forEach((name, index) => {
    Midata.push({
      label: name,
      key: index,
      initial: minion.value[index],
    });
  });
  demon.value.forEach((name, index) => {
    Dmdata.push({
      label: name,
      key: index,
      initial: demon.value[index],
    });
  });
  return [Tfdata,Osdata,Midata,Dmdata];
};

const data = ref<Option[]>(generateData());
const Tfvalue = ref([]);
const Osvalue = ref([]);
const Mivalue = ref([]);
const Dmvalue = ref([]);

const filterMethod = (query, item) => {
  return item.initial.includes(query);
};
</script>
