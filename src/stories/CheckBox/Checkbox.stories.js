import MyCheckbox from "./Checkbox.vue";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: MyCheckbox,
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
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCheckbox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="flex">
                <my-checkbox v-bind='args'>吃烧饼</my-checkbox>
              </div>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {
  value: "烧饼",
  checked: false,
  disabled: false
};
