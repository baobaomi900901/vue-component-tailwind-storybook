import MyCheckbox from "../CheckBox/Checkbox";
import MyCheckboxGroup from "./CheckboxGroup.vue";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/CheckboxGroup",
  component: MyCheckboxGroup,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyCheckbox, MyCheckboxGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    const arr = ref([])
    function getValue (value) {
      if (typeof value === 'string') {
        if (!arr.value.includes(value)) {
          arr.value.push(value)
        } else {
          arr.value.splice(arr.value.indexOf(value), 1)
        }
      }
    }
    return { arr, args, getValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-checkbox-group class="flex">
                <my-checkbox v-for="(item, index) in args" :key="index" type='primary' v-bind="item" @post="getValue">{{ item.value }}</my-checkbox>
            </my-checkbox-group>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args1
Default.args = [
  {
    value: "A",
    checked: false,
    disabled: false
  },
  {
    value: "B",
    checked: false,
    disabled: false
  }
];
