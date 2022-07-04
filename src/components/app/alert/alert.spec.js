import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Alert from './AppAlert.vue'

describe('Alert', () => {
  it('should render props', () => {
    const mockText = 'Text from props'

    const wrapper = shallowMount(Alert, {
      props: {
        text: mockText,
      },
    })

    expect(wrapper.html()).contain(mockText)
  })
})
