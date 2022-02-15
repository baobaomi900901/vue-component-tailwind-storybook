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
      options: ["tiny", "small", "medium", "large"],
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
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {
  type: "",
  label: "button",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "button",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  label: "button",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  label: "button",
};

export const Glass = Template.bind({});
Glass.args = {
  type: "glass",
  label: "button",
};

export const Plain = Template.bind({});
Plain.args = {
  type: "",
  isPlain: true,
  label: "button",
};

export const Round = Template.bind({});
Round.args = {
  type: "",
  isRound: true,
  label: "button",
};

export const Text = Template.bind({});
Text.args = {
  type: "",
  isText: true,
  label: "button",
  icon: "@",
};

export const Tiny = Template.bind({});
Tiny.args = {
  size: "tiny",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: "@",
  size: "medium",
  label: "Button",
};
