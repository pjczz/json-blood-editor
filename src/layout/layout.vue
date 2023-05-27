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
              <span>上传并修改剧本</span>
            </el-menu-item>
            <el-menu-item index="new">
              <span>使用已有角色新建剧本</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span>开摆</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-container>
        <router-view />
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
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "../store/index.js";
import Clipboard from "clipboard";
const route = useRoute();
const router = useRouter();

new Clipboard(".cpbtn");
let store = useBlood();
let bloodJSon = ref<Object[]>([{}]);
let result = ref("");
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  switch (key) {
    case "1":
      if (route.name != "home") {
        router.push({ name: "home" });
      }
      break;
    case "2":
      if (route.name != "new") {
        router.push({ name: "new" });
      }
      break;
    case "3":
      if (route.name != "home") {
        router.push({ name: "home" });
      }
      break;
    case "4":
      break;
  }
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
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