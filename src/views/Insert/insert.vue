<template>
  <div class="insert">
    <el-button type="primary" @click="goBack()">返回</el-button>
    <el-form :label-position="labelPosition" label-width="200px" :model="bloodJSon" style="max-width: 1000px"
      ref="formRef">
      <el-form-item label="首夜提示">
        <el-input type="textarea" v-model="bloodJSon.firstNightReminder" />
      </el-form-item>
      <el-form-item label="是否官方">
        <el-switch v-model="bloodJSon.isOfficial" />
      </el-form-item>
      <el-form-item label="其他夜提示">
        <el-input type="textarea" v-model="bloodJSon.otherNightReminder" />
      </el-form-item>
      <el-form-item label="角色名" prop="name" :rules="[
        { required: true, message: '必须要有角色名' },
        { type: 'string', message: 'age must be a number' },
      ]">
        <el-input type="textarea" v-model="bloodJSon.name" />
      </el-form-item>
      <el-form-item label="其他夜顺序" prop="otherNight">
        <el-input v-model.number="bloodJSon.otherNight" />
      </el-form-item>
      <el-form-item label="是否首夜行动">
        <el-switch v-model="bloodJSon.setup" />
      </el-form-item>
      <el-form-item label="提示">
        <el-tag v-for="tag in bloodJSon.reminders" :key="tag" class="mx-1" closable :disable-transitions="false"
          @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input style="width: 50px;" v-if="inputVisible" ref="InputRef" v-model="inputValue" class="w-50 m-2"
          size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
          + 添加提示
        </el-button>
      </el-form-item>
      <el-form-item label="id" prop="id" :rules="[
        { required: true, message: '角色必须有id' },
        { type: 'string', message: 'id必须是字符' },
      ]">
        <el-input v-model="bloodJSon.id" />
      </el-form-item>
      <el-form-item label="版本">
        <el-input v-model="bloodJSon.edition" />
      </el-form-item>
      <el-form-item label="阵营" prop="team"> <el-select v-model="bloodJSon.team" class="m-2" placeholder="Select"
          size="large">
          <el-option v-for="item in teamOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-input
            v-if="bloodJSon.team != 'townsfolk' && bloodJSon.team != 'demon' && bloodJSon.team != 'outsider' && bloodJSon.team != 'minion'"
            v-model="bloodJSon.customTeam"></el-input>


      </el-form-item>
      <el-form-item  label="英文名">
        <el-input v-model="bloodJSon.name_eng" />
      </el-form-item>
      <el-form-item label="首夜顺序" prop="firstNight">
        <el-input v-model.number="bloodJSon.firstNight" />
      </el-form-item>
      <el-form-item label="角色能力" prop="ability">
        <el-input type="textarea" v-model="bloodJSon.ability" />
      </el-form-item>
      <el-form-item  label="图片地址" prop="image" :rules="[
        { required: true, message: '无图言xx' },
        { type: 'string', message: 'age must be a string' },
      ]">
        <el-input type="textarea" v-model="bloodJSon.image" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">
          添加
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw, nextTick } from "vue";
import { ElMessage, ElInput } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { useBlood } from "../../store/index.js";
let store = useBlood();
let route = useRoute();
let router = useRouter();
const inputVisible = ref(false);
const formRef = ref<FormInstance>();
const InputRef = ref<InstanceType<typeof ElInput>>()
const inputValue = ref('')
let bloodJSon = reactive({
  id: "",
  image: "",
  name: "",
  edition: "",
  team: "",
  firstNight: 0,
  firstNightReminder: "",
  otherNight: 0,
  otherNightReminder: "",
  reminders: [],
  setup: false,
  ability: "",
  isOfficial: false,
  name_eng: "",
  customTeam: ""
});
const teamOptions = [
  { label: '镇民', value: 'townsfolk' },
  { label: '外来', value: 'outsider' },
  { label: '恶魔', value: 'minion' },
  { label: '爪牙', value: 'demon' },
  { label: '自定义(可以用于创建提示)', value: 'custom' }
]
const props = defineProps({});
const labelPosition = ref("right");
const goBack = () => {
  router.go(-1);
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  formEl.validate((valid) => {
    if (valid) {
      let tempObj = toRaw(bloodJSon)
      if (tempObj.team == 'custom' && tempObj?.customTeam) {
        tempObj.team = tempObj.customTeam
        delete tempObj.customTeam
      }
      ElMessage({
        message: "添加成功，请勿重复添加.",
        type: "success",
      });
      store.bloodJSon.push(tempObj);
      goBack()
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
const handleClose = (tag: string) => {
  bloodJSon.reminders.splice(bloodJSon.reminders.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    bloodJSon.reminders.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
