<template>
  <div class="common-layout">
      <el-container>
        <el-header style="background-color: #409eff">
          <input type="file" @change="handleFile($event)" />
        </el-header>

        <el-main>
          <HomeMain :bloodJSon="bloodJSon"></HomeMain>
        </el-main>
        <el-footer>
          <!-- Target -->
          <el-input id="foo" :value="JSON.stringify(store.bloodJSon)" />
          <!-- Trigger -->
          <button class="cpbtn" data-clipboard-target="#foo">
            <img
              src="https://clipboardjs.com/assets/images/clippy.svg"
              alt="Copy to clipboard"
            />
          </button>
        </el-footer>
      </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import HomeMain from "./HomeMain.vue";
import { useBlood } from "../../store/index.js";
import Clipboard from "clipboard";
new Clipboard(".cpbtn");
let store = useBlood();
let bloodJSon = ref<Object[]>([{}]);
let result = ref("");
let isCollapse = ref(false);
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
.cpbtn {
  width: 30px;
  img {
    width: 100%;
  }
}
</style>