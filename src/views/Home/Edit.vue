<template>
  <div class="edit">
    <el-button type="primary" @click="goBack()">返回</el-button>
    <el-form
      :label-position="labelPosition"
      label-width="200px"
      :model="bloodJSon"
      style="max-width: 1000px"
      ref="formRef"
    >
      <el-form-item
        :label="item"
        v-for="(item, index) in Object.keys(bloodJSon)"
        :key="index"
      >
        <el-switch
          v-model="bloodJSon[item]"
          v-if="item == 'setup' || item == 'isOfficial'"
        />
        <template v-else-if="(item == 'reminders')">
          <el-tag
            v-for="tag in bloodJSon.reminders"
            :key="tag"
            class="mx-1"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            style="width: 50px"
            v-if="inputVisible"
           
            v-model="inputValue"
            class="w-50 m-2"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button
            v-else
            class="button-new-tag ml-1"
            size="small"
            @click="showInput"
          >
            + 添加提示
          </el-button>
        </template>
        <el-input v-model="bloodJSon[item]" v-else />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { useBlood } from "../../store/index.js";
import { ElInput } from "element-plus";
let store = useBlood();
let route = useRoute();
let router = useRouter();
let bloodJSon = reactive({});
store.bloodJSon.forEach((item, index) => {
  if (route.params.id == item.id) {
    Object.keys(item).forEach((ele, index) => {
      if(typeof item[ele] != 'object'){
        bloodJSon[ele] = item[ele];
      }
      else {bloodJSon[ele] = [...item[ele]];}
      
    });
  }
});
const inputVisible = ref(false);
const formRef = ref<FormInstance>();
const InputRef = ref<InstanceType<typeof ElInput>>();
const inputValue = ref("");
const props = defineProps({});
const labelPosition = ref("right");
const goBack = () => {
  router.go(-1);
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  store.bloodJSon.forEach((item, index) => {
    if (route.params.id == item.id) {
      store.bloodJSon[index] = bloodJSon;
    }
  });
};
const handleClose = (tag: string) => {
  bloodJSon.reminders.splice(bloodJSon.reminders.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  //这有经典element的诡异bug 莫名其妙用不了ref 非常有趣
 // nextTick(() => {
  //  InputRef.value!.input!.focus();
 // });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    bloodJSon.reminders.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-cell {
  display: flex;
  text-align: center;
  justify-content: space-between;
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
  color: var(--el-text-color-secondary);
}
</style>
