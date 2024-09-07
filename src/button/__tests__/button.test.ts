import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';

// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'dahuang'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('dahuang');
  });
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('x-button--primary');
  });
});
