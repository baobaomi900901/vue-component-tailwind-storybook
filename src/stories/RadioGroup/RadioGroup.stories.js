import MyRadio from "../Radio/Radio.vue";
import MyRadioGroup from "./RadioGroup.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/RadioGroup",
  component: MyRadioGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyRadioGroup, MyRadio },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup(args) {
    const bbm = "bbm";
    const vvn = "vvn";
    return { args, bbm, vvn };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-radio-group name='radio'>
  					<my-radio v-bind='args' name='radio' v-model="bbm">直角</my-radio>
  					<my-radio v-bind='args' name='radio' v-model="vvn">钝角</my-radio>
  	          </my-radio-group>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {
  modelValue: "锐角",
};
