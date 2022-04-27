import MyButton from "../Button/Button";
import MyButtonGroup from "./ButtonGroup.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/ButtonGroup",
  component: MyButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton, MyButtonGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-button-group v-bind='args'>
                <my-button type='primary'>button</my-button>
                <my-button type='primary'>button</my-button>
                <my-button type='primary'>button</my-button>
            </my-button-group>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = {
  lable: "123",
};
