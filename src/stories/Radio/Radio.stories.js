import MyRadio from "./Radio.vue";
import { ref } from "vue";
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
  setup () {
    const groupValue = ref("直角");
    // const bbm = "vvn";
    return { args, groupValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: ` <div class="flex">
                  <my-radio v-model="groupValue" value="直角" v-bind="args">直角</my-radio>
                  <my-radio v-model="groupValue" value="钝角" v-bind="args">钝角</my-radio> 
                  <my-radio v-model="groupValue" value="锐角" v-bind="args">锐角</my-radio> 
              </div>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
