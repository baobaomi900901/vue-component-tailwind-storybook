<!--
* @description  参数1
* @fileName  ButtonGroup
* @author userName
* @date 2022-02-15 15:08:38
* @version V3.0.0
!-->
<template>
	<div :class="buttonGroup"><slot></slot></div>
</template>

<script lang="ts">
import "./ButtonGroup.css";
import { ref, reactive, computed } from "vue";
import MyButton from "../Button/Button.vue";
export default {
	name: "my-button-group",
	props: {
		lable: {
			type: String,
		},
		size: {
			type: String,
		},
	},
	setup(props) {
		console.log(props.lable);
		return {
			buttonGroup: computed(() => ({
				"MYX-buttonGroup": true,
			})),
		};
	},
};
</script>
<style scoped></style>
