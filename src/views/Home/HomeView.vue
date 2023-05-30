<template>
  <div class="common-layout">
      <el-container>
        <el-header style="background-color: #409eff">
          <input type="file" @change="handleFile($event)" />
        </el-header>

        <el-main>
          <HomeMain :bloodJSon="bloodJSon" ></HomeMain>
          <el-empty description="no data" v-if="store.bloodJSon.length==0" />
        </el-main>

      </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import HomeMain from "./HomeMain.vue";
import { useBlood } from "../../store/index.js";
let store = useBlood();
let bloodJSon = ref<Object[]>([{}]);
// 
let result = ref<string>("");

//上传
const handleFile = function (e: Event) {
  const fileInput = e.target;
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const text = reader.result;
    bloodJSon.value = JSON.parse(text);
    store.bloodJSon = bloodJSon.value;
    result.value = JSON.stringify(store.bloodJSon);
  };
  reader.readAsText(file);
};

</script>

<style lang="less" scoped>
.common-layout{
  width: 100%;
  overflow: visible;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>