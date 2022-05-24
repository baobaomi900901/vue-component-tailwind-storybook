import MyRadioButton from "./RadioButton.vue";
import MyRadioGroup from "../RadioGroup/RadioGroup.vue";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/RadioButton",
  component: MyRadioButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["block", "isPlain"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyRadioButton, MyRadioGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const groupValue = ref("烧饼");
    return { args, groupValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-radio-group v-model="groupValue">
                <my-radio-button value="烧饼" >烧饼</my-radio-button>
                <my-radio-button value="热干面" >热干面</my-radio-button> 
                <my-radio-button value="蛋酒" v-bind='args'>蛋酒</my-radio-button>
            </my-radio-group>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {};
