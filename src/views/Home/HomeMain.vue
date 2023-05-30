<template>
  <div class="home-main">
    <div class="main-body">
      <div v-for="(item, index) in store.bloodJSon" key="item.id">
        <MainCell :blood-obj="item" @deleteEvent="deleteForm" />
      </div>
      <div class="insert">
        <el-button
          type="primary"
          size="large"
          :icon="Plus"
          @click="dialogVisible = true"
        />
        <el-dialog
          v-model="dialogVisible"
          title="Tips"
          width="40%"
          center
        >
          <template #header>
            <span class="dialog-header">
              <div class="avatar-uploader" @click="goInsert">
                <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
                添加自定义角色
              </div>
              <div class="avatar-uploader" @click="goNew">
                <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
                添加已有角色
              </div>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//@click="goInsert()"
import { defineProps, ref } from "vue";
import MainCell from "./MainCell.vue";
import { Plus } from "@element-plus/icons-vue";
import { useBlood } from "../../store/index.js";
import { useRouter } from "vue-router";
let store = useBlood();
let router = useRouter();
const props = defineProps({
  bloodJSon: { type: Array, required: true, default: () => [] },
});
const dialogVisible = ref<boolean>(false);
//跳转 插入界面
const goInsert = () => {
  router.push({ path: "/insert" });
};
const goNew= ()=>{
  router.push({ path: "/new" })
}

//处理子组件删除事件
const deleteForm = (payload: string) => {
  store.bloodJSon.forEach((item: object, index: number) => {
    if (payload == item.id) {
      store.bloodJSon.splice(index, 1);
    }
  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-main{width: 100%;}
.main-body {
  display: grid;
  grid-template-columns: repeat(6, 15%);
  grid-gap: 20px;
  .insert {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.dialog-header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
}
.avatar-uploader {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  transition: var(--el-transition-duration-fast);
}

.avatar-uploader:hover {
  border-color: blueviolet;
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
