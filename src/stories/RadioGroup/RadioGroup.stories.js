import MyRadio from "../Radio/Radio.vue";
import MyRadioButton from "../RadioButton/RadioButton.vue";
import MyRadioGroup from "./RadioGroup.vue";
import { ref } from "vue";
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
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyRadioGroup, MyRadio, MyRadioButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const groupValue = ref("直角");
    return { groupValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-radio-group  v-model="groupValue" type="primary">
  					  <my-radio value="直角" >直角</my-radio>
  					  <my-radio value="钝角" >钝角</my-radio>
            </my-radio-group>`,
});

export const Radio = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Radio.args = {
  type: "primary",
};

const Template2 = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyRadioGroup, MyRadio, MyRadioButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const groupValue = ref("烧饼");
    return { args, groupValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-radio-group v-model="groupValue" v-bind='args'>
				  <my-radio-button value="烧饼" >烧饼</my-radio-button>
				  <my-radio-button value="热干面" >热干面</my-radio-button> 
				  <my-radio-button value="蛋酒" >蛋酒</my-radio-button>
			  </my-radio-group>`,
});

export const Button = Template2.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Button.args = {
  type: "isPlain",
};
