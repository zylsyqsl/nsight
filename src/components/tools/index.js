import ScrollDelete from "./ScrollDelete";
import AutoSelect from "./AutoSelect";
const GlobalComponent = {};
GlobalComponent.install = function(Vue) {
  Vue.component(ScrollDelete.name, ScrollDelete);
  Vue.component(AutoSelect.name, AutoSelect);
};
export default GlobalComponent;
