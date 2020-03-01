import {Component, Vue} from 'vue-property-decorator';
import {BUTTON_MODE} from './button.enum';

@Component
export class ButtonMixin extends Vue {
  get mixinCompPropButtonMode(): typeof BUTTON_MODE {
    return BUTTON_MODE;
  }
}
