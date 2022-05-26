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
    const checkboxValue = ref([])
    const onChange = (val) => {
      console.log('change', val);
    }
    const checkboxList = [
      { value: "A", },
      { value: "B", }
    ]
    return { args, checkboxValue, checkboxList, onChange };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-checkbox-group class="flex" v-model="checkboxValue" @change="onChange" v-bind="args">
                <my-checkbox v-for="(item, index) in checkboxList" :key="index" type='primary' :label='item.value' >{{ item.value }}</my-checkbox>
            </my-checkbox-group>
            `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args


export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}