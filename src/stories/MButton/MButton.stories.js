import MButton from "./MButton.vue";
import "../../assets/iconFont/iconfont.css"

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/MButton",
  component: MButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {
      action: "clicked",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg", "defaul"],
      defaultValue: "medium",
    },
    type: {
      control: { type: "select" },
      options: ["primary", "success", "danger", "glass"],
    },
    plain: { control: "boolean", defaultValue: false },
    round: { control: "boolean", defaultValue: false },
    text: { control: "boolean", defaultValue: false },
    icon: { control: "text", defaultValue: "" },
    disabled: { control: "boolean", defaultValue: false },
    label: { control: "text", defaultValue: "Button" },
  },
};
console.log(MButton);
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { MButton },
  setup() {
    return { args };
  },
  template: '<MButton v-bind="args" >button</MButton>',
});

export const Default = Template.bind({});