import MyButton from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

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
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  type: "",
  label: "button",
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: "primary",
  label: "button",
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  type: "success",
  label: "button",
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Danger.args = {
  type: "danger",
  label: "button",
};

export const Plain = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Plain.args = {
  type: "",
  isPlain: true,
  label: "button",
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  type: "",
  isText: true,
  label: "button",
};

export const Round = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Round.args = {
  type: "",
  isRound: true,
  label: "button",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
