<template>
  <div class="edit">
    <el-button type="primary" @click="goBack()" style="margin: 20px 0 30px 0">返回</el-button>
    <el-form :label-position="labelPosition" label-width="200px" :model="bloodJSon" style="width: 800px;"
      ref="formRef">
      <el-form-item :label="chineseName(item)" v-for="(item, index) in Object.keys(bloodJSon)" :key="index"
        v-if="item != 'customTeam'">
        <el-switch v-model="bloodJSon[item]" v-if="item == 'setup' || item == 'isOfficial'" />
        <template v-else-if="item == 'reminders'">
          <el-tag v-for="tag in bloodJSon.reminders" :key="tag" class="mx-1" closable :disable-transitions="false"
            @close="handleClose(tag)">
            {{ tag }}
          </el-tag>
          <el-input style="width: 50px" v-if="inputVisible" v-model="inputValue" class="w-50 m-2" size="small"
            @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
          <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
            + 添加提示
          </el-button>
        </template>

        <template v-else-if="item == 'state'">
          <div style="display: flex; flex-wrap: nowrap">
            <el-input v-model="bloodJSon[item].stateName"><template #prepend>标注名</template>
            </el-input>
            <el-input v-model="bloodJSon[item].stateDescription"><template #prepend>标注内容</template>
            </el-input>
          </div>
        </template>

        <template v-else-if="item == 'status'">
          <div style="display: flex; flex-wrap: nowrap">
            <el-input v-model="bloodJSon[item].stateName">
              <template #prepend>状态名</template>
            </el-input>
            <el-input v-model="bloodJSon[item].stateSkill">
              <template #prepend>状态内容</template>
            </el-input>
          </div>
        </template>

        <template v-else-if="item == 'team'">
          <el-select v-model="bloodJSon[item]" class="m-2" placeholder="请选择阵营" size="large">
            <el-option v-for="item in teamOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-input v-if="bloodJSon.team == 'custom'" v-model="bloodJSon.customTeam"></el-input>
        </template>
        <template v-else-if="item == 'customTeam'"> </template>
        <el-input type="textarea" v-model="bloodJSon[item]" v-else />
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
import { useBlood } from "@/store/index";
import { ElInput, ElMessage } from "element-plus";
type bloodJSonType = {
  ability: string;
  edition: string;
  firstNight: number;
  firstNightReminder: string;
  id: string;
  image: string;
  name: string;
  otherNightReminder: string;
  otherNight: number;
  reminders: string[];
  setup: boolean;
  team: string;
  customTeam?: string;
  state: { stateName: string; stateDescription: string }[];
  status: { stateName: string; stateSkill: string }[];
};
let translation = reactive({
  ability: "能力",
  edition: "版本",
  firstNight: "首夜行动顺序",
  firstNightReminder: "首夜行动提示",
  id: "id",
  image: "图片地址",
  name: "角色名",
  otherNight: "其他夜晚行动顺序",
  otherNightReminder: "其他夜行动顺序",
  reminders: "提示（可多个）",
  setup: "是否首夜行动",
  team: "阵营",
  state: "标注（原创）",
  customTeam: "",
  status: "状态（原创）",
});
const chineseName = (item: string) => {
  return translation[item] ? translation[item] : item;
};
const teamOptions = [
  { label: "镇民", value: "townsfolk" },
  { label: "外来", value: "outsider" },
  { label: "恶魔", value: "minion" },
  { label: "爪牙", value: "demon" },
  { label: "自定义(可以用于创建提示)", value: "custom" },
];
let store = useBlood();
let route = useRoute();
let router = useRouter();
let bloodJSon = reactive<bloodJSonType>({
  ability: "",
  edition: "",
  firstNight: 0,
  firstNightReminder: "",
  id: "",
  otherNight: 0,
  image: "",
  name: "",
  otherNightReminder: "",
  reminders: [],
  setup: false,
  team: "",
  state: [{ stateName: "", stateDescription: "" }],
  status: [{ stateName: "", stateSkill: "" }],
});

store.bloodJSon.forEach((item: bloodJSonType, index: number) => {
  if (route.params.id == item.id) {
    Object.keys(item).forEach((ele, index) => {
      if (typeof item[ele] != "object") {
        bloodJSon[ele] = item[ele];
      } else {
        bloodJSon[ele] = [...item[ele]];
      }
    });
    bloodJSon.customTeam = bloodJSon.team;
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
      let tempObj = { ...bloodJSon };
      if (tempObj.team == "custom" && tempObj?.customTeam) {
        tempObj.team = tempObj.customTeam;
        delete tempObj.customTeam;
      }
      store.bloodJSon[index] = tempObj;
    }
  });
  ElMessage({
    message: "保存成功！",
    type: "success",
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

.edit {
  width: 1000px;
  height: 80vh;
  overflow-y: scroll;
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
