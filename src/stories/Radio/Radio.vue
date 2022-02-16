<!--
* @description  参数1
* @fileName  Radio
* @author userName
* @date 2022-02-15 18:30:29
* @version V3.0.0
!-->
<template>
	<div class="flex">
		<input
			type="radio"
			name=""
			:id="label"
			:class="classs"
			:value="label"
			:checked="checked"
			:disabled="disabled"
			@click="onChang(label)"
		/>
		<label :for="label"
			><slot>选项{{ label }}</slot></label
		>
	</div>
</template>

<script lang="ts">
import "./radio.css";
import { ref, computed, inject } from "vue";
export default {
	name: "my-radio",
	props: {
		checked: {
			type: Boolean,
		},
		label: {
			type: String,
		},
		type: {
			type: String,
			validator: function (value) {
				return ["primary", "success", "danger"].indexOf(value) !== -1;
			},
		},
		disabled: {
			type: Boolean,
		},
	},
	emits: ["click"],
	setup(props, { emit }) {
		console.log(props.disabled);
		const checked = ref(props.checked);
		const radioGroup = inject("modelValue", undefined);
		const isGroup = computed(() => !!radioGroup);
		const value = computed(() => (isGroup.value ? radioGroup : props.modelValue));

		return {
			checked,
			classs: computed(() => {
				const type = props.type ? `MYX-radio--${props.type}` : "";
				return {
					"MYX-radio": true,
					[type]: props.type,
				};
			}),
			onChang($event) {
				if (!props.disabled && !checked.value) {
					this.checked = true;
					emit("click", $event);
				}
			},
		};
	},
};
</script>
<style scoped></style>
