<template>
  <div class="main-cell" >
    <div class="delete">
      <el-popconfirm title="确定删除该角色吗" @confirm="deleteEvent()">
    <template #reference>
      <el-button><el-icon><Delete /></el-icon
      ></el-button>
    </template>
  </el-popconfirm>
    
    </div>
    <div class="block" @click="toEdit">
      <el-avatar shape="square" :size="100" fit="cover" :src="bloodObj.image" />
      <span class="title">{{ bloodObj.name }}</span>
    </div>
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
} from "vue";
import { useRouter } from "vue-router";
import { Delete } from "@element-plus/icons-vue";

const router = useRouter();
const props = defineProps({
  bloodObj: { type: Object, required: true, default: () => [] },
});
const { bloodObj } = toRefs(props);
const toEdit = () => {
  router.push({ path: `/edit/${bloodObj.value.id}` });
};
const emits =defineEmits(['deleteEvent'])
const deleteEvent=()=>{
  emits('deleteEvent',bloodObj.value.id)
}
console.log();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-cell {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-cell:hover{
  cursor: pointer;
  .block{
    transition: 1s;
			/* 过度时间 */
		transform: scale(1.1);

  }
  
}
.main-cell:hover .delete {
  visibility: visible;
}

.main-cell .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.main-cell .title {
  margin-bottom: 10px;
  font-size: 14px;
}
.delete {
  visibility: hidden;
  transform: translateX(100%);
}
</style>
