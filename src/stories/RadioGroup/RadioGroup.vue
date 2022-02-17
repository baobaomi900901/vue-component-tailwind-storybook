<!--
* @description  参数1
* @fileName  Radio
* @author userName
* @date 2022-02-15 18:30:29
* @version V3.0.0
!-->
<template>
	<div :class="classs">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import "./radioGroup.css";
import { computed, provide, reactive, toRef } from "vue";
export default {
	name: "my-radio-group",
	props: {
		direction: {
			type: String,
			default: "row",
		},
		modelValue: {
			type: String,
		},
	},
	emits: ["click", "update:modelValue"],
	setup(props, { emit }) {
		const changeEvent = (value: any) => {
			emit("update:modelValue", value);
		};
		provide(
			"radioGroup",
			reactive({
				modelValue: toRef(props, "modelValue"),
				changeEvent,
			})
		);
		return {
			classs: computed(() => ({
				"MYX-radio-group": true,
				"MYX-radio-group-col": props.direction === "col",
			})),
		};
	},
};
</script>
<style scoped></style>
