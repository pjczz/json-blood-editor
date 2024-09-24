<template>
  <div class="new">
    <el-button type="primary" :icon="Remove" @click="clearBloodJSon()">清空缓存数据</el-button>
    <el-select v-model="selectTeam" class="m-2" placeholder="请选择阵营" size="large">
      <el-option v-for="item in teamOptions" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <!-- <div class="transfer" v-if="selectTeam == 'townsfolk'">
      <el-transfer v-model="Tfvalue" filterable :filter-method="filterMethod" filter-placeholder="State Abbreviations"
        :data="data[0]" :titles="['镇民列表', '当前镇民角色']" />
    </div>
    <div class="transfer" v-if="selectTeam == 'outsider'">
      <el-transfer v-model="Osvalue" filterable :filter-method="filterMethod" filter-placeholder="State Abbreviations"
        :data="data[1]" :titles="['外来列表', '当前外来角色']" />
    </div>
    <div class="transfer" v-if="selectTeam == 'minion'">
      <el-transfer v-model="Mivalue" filterable :filter-method="filterMethod" filter-placeholder="State Abbreviations"
        :data="data[2]" :titles="['爪牙列表', '当前爪牙角色']" />
    </div>
    <div class="transfer" v-if="selectTeam == 'demon'">
      <el-transfer v-model="Dmvalue" filterable :filter-method="filterMethod" filter-placeholder="State Abbreviations"
        :data="data[3]" :titles="['恶魔列表', '当前恶魔角色']" />
    </div> -->
    <div v-for="(item, index) in teamOptions" :key="index">
      <div class="team-main" v-if="selectTeam == item.value">
        <VueDraggable ref="el" v-model="data[0]" class="drag-list" animation="150" ghostClass="ghost" group="people"
          @update="onUpdate" @add="onAdd" @remove="remove">
          <div v-for="(citem, cindex) in data[0]" :key="cindex" class="drag-list-item">

            <el-tooltip class="box-item" effect="dark" :content="citem.ability" placement="left-start">
              {{ citem.label }}
            </el-tooltip>
          </div>
        </VueDraggable>
        <VueDraggable ref="el1" v-model="Tfvalue" class="drag-list" animation="150" ghostClass="ghost" group="people"
          @update="onUpdate" @add="onAdd" @remove="remove">
          <div v-for="(citem, cindex) in Tfvalue" :key="cindex" class="drag-list-item">
            {{ citem.label }}
          </div>
        </VueDraggable>
      </div>

    </div>
  </div>
  <el-button type="primary" @click="submitForm()"> 添加 </el-button>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "@/store/index.js";
import { Remove } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { Action } from "element-plus";
import { VueDraggable } from 'vue-draggable-plus'

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
const selectTeam: Ref<string> = ref('townsfolk')
const teamOptions = ref([
  { label: "镇民", value: "townsfolk" },
  { label: "外来", value: "outsider" },
  { label: "恶魔", value: "minion" },
  { label: "爪牙", value: "demon" },
])
console.log(store.AllJSon)
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
      ...townsfolk.value[index]
    });
  });
  outsider.value.forEach((item, index) => {
    Osdata.push({
      label: item.name,
      key: index,
      ...townsfolk.value[index]
    });
  });
  minion.value.forEach((item, index) => {
    Midata.push({
      label: item.name,
      key: index,
      ...townsfolk.value[index]
    });
  });
  demon.value.forEach((item, index) => {
    Dmdata.push({
      label: item.name,
      key: index,
      ...townsfolk.value[index]
    });
  });
  return [
    Tfdata,
    Osdata,
    Midata,
    Dmdata,
    townsfolk.value,
    outsider.value,
    minion.value,
    demon.value,
  ];
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
  store.setBloodJSon([])
  const bloodJSon = []
  // 镇民
  Tfvalue.value.forEach((item, index) => {
    bloodJSon.push(data.value[4][item]);
  });
  // 外来
  Osvalue.value.forEach((item, index) => {
    bloodJSon.push(data.value[5][item]);
  });
  // 爪牙
  Mivalue.value.forEach((item, index) => {
    bloodJSon.push(data.value[6][item]);
  });
  // 恶魔
  Dmvalue.value.forEach((item, index) => {
    bloodJSon.push(data.value[7][item]);
  });
  store.setBloodJSon(bloodJSon)
  ElMessageBox.alert("保存成功！", "Title", {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: "OK",
    callback: (action: Action) => {
      ElMessage({
        type: "success",
        message: `保存成功`,
      });
    },
  });
};
// 清除之前的数据
const clearBloodJSon = () => {
  store.bloodJSon = [];
};
const onUpdate = () => { }

const onAdd = () => {

}
const remove = () => {

}
</script>
<style lang="less" scoped>
.new {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .team-main {
    width: 500px;
    display: flex;
    flex-wrap: nowrap;

    .drag-list {
      background-color: #fff;
      min-height: 200px;
      max-height: 600px;
      overflow-y: scroll;
      width: 200px;
    }

    .drag-list-item {}
  }
}

.transfer {
  margin-bottom: 30px;
}
</style>
