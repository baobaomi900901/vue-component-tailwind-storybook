<!--
* @description  参数1
* @fileName  Radio
* @author userName
* @date 2022-02-15 18:30:29
* @version V3.0.0
!-->
<template>
	<div :class="buttonGroup"><slot></slot></div>
</template>

<script lang="ts">
import "./RadioGroup.css";
import { ref, computed, provide } from "vue";
export default {
	name: "my-radio",
	props: {
		modelValue: {
			type: [String, Number, Boolean],
			default: "",
		},
	},
	emits: ["click", "change"],
	setup(props, { emit }) {
		provide("modelValue", props.modelValue as string);
		return {};
	},
};
</script>
<style scoped></style>
