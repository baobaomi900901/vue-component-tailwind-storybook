import MyCheckbox from "./Checkbox.vue";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: MyCheckbox,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // onClick: {},
    // type: {
    //   control: { type: "select" },
    //   options: ["primary", "success", "danger"],
    // },
  },
};

const Template = (args) => ({
  components: { MyCheckbox },
  setup () {
    const checkboxValue = ref(false);
    const onChange = (val) => {
      console.log('change', val);
    }
    console.log(args);
    return { checkboxValue, onChange, args };
  },
  template: `<div class="flex">
              <my-checkbox v-model="checkboxValue" @change="onChange" v-bind="args">吃烧饼</my-checkbox>
            </div>`,
});

// 默认模板
export const Default = Template.bind({});

// Disabled
export const Disabled = Template.bind({
  args: {
    disabled: true
  }
});
Disabled.args = {
  disabled: true
}
