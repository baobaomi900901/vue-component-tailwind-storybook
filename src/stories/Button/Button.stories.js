import MyButton from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {
      action: "clicked",
    },
    size: {
      control: { type: "select" },
      options: ["tiny", "small", "medium", "large"],
      defaultValue: "medium",
    },
    type: {
      control: { type: "select" },
      options: ["primary", "success", "danger", "glass"],
    },
    isPlain: { control: "boolean", defaultValue: false },
    isRound: { control: "boolean", defaultValue: false },
    isText: { control: "boolean", defaultValue: false },
    icon: { control: "text", defaultValue: "" },
    disabled: { control: "boolean", defaultValue: false },
    label: { control: "text", defaultValue: "Button" },
  },
};
console.log(MyButton);
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1

// export const Plain = Template.bind({});
// Plain.args = {
//   type: "",
//   isPlain: true,
//   label: "button",
// };


// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
//   label: "Button",
// };
