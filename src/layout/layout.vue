<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="260px">
        <el-col :span="15">
          <h5 class="mb-2">控制台</h5>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="home"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-menu-item index="home">
              <span>编辑剧本</span>
            </el-menu-item>
            <el-menu-item index="new">
              <span>添加已有角色</span>
            </el-menu-item>
            <el-menu-item index="about">
              <span>开摆</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-container>
        <router-view />
        <el-footer>
          <el-button
            :icon="Download"
            :value="JSON.stringify(store.bloodJSon)"
            @click="saveJSON()"
            >导出</el-button
          >
          <!-- Trigger 
          <button class="cpbtn" data-clipboard-target="#foo">
            <img
              src="https://clipboardjs.com/assets/images/clippy.svg"
              alt="Copy to clipboard"
            />
          </button>
          -->
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Download } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "../store/index.js";

let store = useBlood();
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const saveJSON = () => {
  // 生成json文件
  const filename: string = "custom.json";
  const blob: Blob = new Blob([JSON.stringify(store.bloodJSon)], {
    type: "text/json",
  });
  const e: Event = document.createEvent("MouseEvents");
  const a: HTMLElement = document.createElement("a");
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  e.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(e);
};
</script>

<style lang="less" scoped>

.common-layout {
  width: 100%;
}
.cpbtn {
  width: 30px;
  img {
    width: 100%;
  }
}
</style>