<!--
* @description  参数1
* @fileName  CheckBox
* @author userName
* @date 2022-02-16 17:39:02
* @version V3.0.0
!-->
<template>
  <label :for="label" :class="myClass">
    <input ref="checkbox" type="checkbox" :name="label" :value="label" v-model="checkboxValue" @change="onChange"
      :disabled="isDisabled" />
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import "./Checkbox.css";
import { inject, computed } from "vue";

type IProps = {
  label: string | number,
  modelValue: boolean
  disabled: boolean
  type: "primary" | "success" | "danger"
}

type IInject = {
  modelValue: (string | number)[],
  changeEvent: (preload: string | number) => void
  disabled: boolean
}

export default {
  name: "my-checkbox",
  props: {
    label: {
      type: [String, Number]
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value: string) {
        return ["primary", "success", "danger"].indexOf(value) !== -1;
      },
    },
  },

  emits: ["update:modelValue", 'change'],

  setup(props: IProps, { emit }: any) {
    const checkboxGroup = inject("checkboxGroup", undefined) as IInject | undefined;

    const isDisabled = computed(() => {
      return checkboxGroup ? checkboxGroup.disabled : props.disabled
    })

    const checkboxValue = computed({
      get: () => !!checkboxGroup ? checkboxGroup.modelValue : props.modelValue,
      set: (val) => {
        if (checkboxGroup && Array.isArray(val)) {
          checkboxGroup.changeEvent(val as any)
        } else {
          emit("update:modelValue", val)
        }
      }
    });

    const checked = computed(() => {
      if (checkboxGroup) {
        return checkboxGroup.modelValue.includes(props.label)
      } else {
        return props.modelValue
      }
    });

    const myClass = computed(() => {
      const type = props.type ? `MYX-checkbox--${props.type}` : "";
      return {
        "MYX-checkbox": true,
        [type]: props.type,
        "MYX-checkbox--disabled": props.disabled,
      };
    })
    const onChange = (e: InputEvent) => {
      emit('change', checkboxValue.value, e)
    }
    return {
      myClass,
      checked,
      onChange,
      checkboxValue,
      isDisabled
    };
  }
};
</script>
