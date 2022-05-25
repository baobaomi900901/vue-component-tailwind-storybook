<template>
  <label :for="value" :class="classs">
    <input
      type="radio"
      :id="value"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="isCheck"
      @change="radioChange"
    />
    <span>
      <slot>选项</slot>
    </span>
  </label>
</template>

<script lang="ts">
import "./Radio.css";
import { ref, computed, inject, nextTick, toRef } from "vue";
export default {
  name: "my-radio",
  props: {
    modelValue: {
      type: [String, Boolean, Number],
    },
    type: {
      type: String,
      validator: function (value:string) {
        return ["primary", "success", "danger"].indexOf(value) !== -1;
      },
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Boolean, Number],
    },
    disabled: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const radioGroup = inject("radioGroup", undefined) as any; // from RadioGroup
    const classs = computed(() => {
      const type = `MYX-radio--${props.type}`;
      if (!!radioGroup) {
        const type2 = `MYX-radio--${radioGroup.type}`;
        return {
          "MYX-radio": true,
          [type]: props.type,
          [type2]: !!radioGroup,
        };
      }
      return {
        "MYX-radio": true,
        [type]: props.type,
      };
    });
    const radioValue = computed(() =>
      // 比较, 如果 radioGroup 有值, 则返回 radioGroup.modelValue
      !!radioGroup ? radioGroup.modelValue : props.modelValue
    );

    const isCheck = computed(() => radioValue.value == props.value);
    // // Radio, 外部 v-model 对比 :value 是否相等, 相等则激活 checked
    // const isCheck = computed(() => props.modelValue == props.value);

    const radioChange = () => {
      // 判断 RadioGroup 是否有传入值
      if (!!radioGroup) {
        // 调用 radioGroup 里面的 v-model 方法, 并将 Radio 上的 :value 传出去
        radioGroup.changeEvent(props.value);
      } else {
        // 没有 RadioGroup 时, 修改 Radio v-model
        emit("update:modelValue", props.value);
        console.log(props.value);
      }
      // Radio, 更改 modelValue, 传递 :value
      // emit("update:modelValue", props.value);
    };
    return {
      classs,
      isCheck,
      radioChange,
    };
  },
};
</script>
<style scoped></style>
