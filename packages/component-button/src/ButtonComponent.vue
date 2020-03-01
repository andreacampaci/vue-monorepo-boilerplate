<template>
  <button
    :disabled="localDisabled"
    :class="classObject"
    @click="$event => myClick($event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator';
  import {BUTTON_MODE} from "./button.enum";
  import {IButtonModeValues} from "./button.interfaces";

  Vue.config.productionTip = false;

  @Component
  export default class ButtonComponent extends Vue {

    @Prop({default: () => BUTTON_MODE.PRIMARY}) public mode!: IButtonModeValues;
    @Prop({default: () => false}) public disabled!: boolean;

    get classObject() {
      return {
        button: true,
        'button-primary': (this.mode === BUTTON_MODE.PRIMARY),
        'button-secondary': (this.mode === BUTTON_MODE.SECONDARY),
        'button-disabled': this.disabled,
      };
    }

    get localDisabled(): boolean {
      return this.disabled;
    }

    @Emit('button-custom-click')
    myClick() {
      return;
    }

  }
</script>

<style scoped lang="scss">
  .button {
    font-size: 12px;
    min-width: 200px;
    padding: 1em;
    margin: 0;
    border: 0;
    background: #00c7ff;
    color: white;
    border-radius: 0.5em;
    &-primary {
      background: #00c7ff;
      &.button-disabled {
        background: #aaaaaa;
      }
    }
    &-secondary {
      background: #2d4796;
      &.button-disabled {
        background: #aaaaaa;
      }
    }
  }
</style>
