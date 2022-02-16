import MyRadio from "../Radio/Radio.vue";
import MyRadioGroup from "./RadioGroup.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
	title: "Example/RadioGroup",
	component: MyRadioGroup,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		onClick: {},
		type: {
			control: { type: "select" },
			options: ["primary", "success", "danger"],
		},
	},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = () => ({
	// Components used in your story `template` are defined in the `components` object
	components: { MyRadioGroup, MyRadio },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup(args) {
		console.log(args);
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `<my-radio-group v-model="args.modelValue">
  <my-radio label="直角">直角</my-radio>
  <my-radio label="锐角">锐角</my-radio>
  <my-radio label="钝角">钝角</my-radio>
  </my-radio-group>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {
	modelValue: "锐角",
};
