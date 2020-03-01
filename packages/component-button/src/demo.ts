import Vue from 'vue';
import {BUTTON_MODE, ButtonComponent, ButtonMixin} from "./index";

Vue.config.productionTip = false;

const vm = new Vue({
  template: `
    <div>
      <ButtonComponent 
        @button-custom-click="log($event)"
        :mode="parentPropMode"
        :disabled="parentPropDisabled">
        DEMO TEXT
      </ButtonComponent>
    </div>
  `,
  components: {
    ButtonComponent,
  },
  methods: {
    log($event){
      console.log($event);
      this.parentPropDisabled = !this.parentPropDisabled;
    }
  },
  mixins: [
    ButtonMixin,
  ],
  data: {
    parentPropDisabled: false,
  },
  computed: {
    parentPropMode: function () {
      return this.mixinCompPropButtonMode.PRIMARY;
    },
  }
}).$mount("#app");
