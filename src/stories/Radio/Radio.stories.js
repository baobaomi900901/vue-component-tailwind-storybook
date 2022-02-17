import MyRadio from "./Radio.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Radio",
  component: MyRadio,
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
  components: { MyRadio },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const bbm = "bbm";
    const vvn = "vvn";
    return { args, bbm, vvn };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-radio v-bind='args' name='radio' v-model="bbm">直角</my-radio>
             <my-radio v-bind='args' name='radio' v-model="vvn">钝角</my-radio>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {
  name: "radio",
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Disabled.args = {
  checked: true,
  disabled: true,
};
