
import Transfer from "./Transfer.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Transfer",
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
  components: { Transfer },
  setup () { },
  template: ``,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Disabled.args = {};