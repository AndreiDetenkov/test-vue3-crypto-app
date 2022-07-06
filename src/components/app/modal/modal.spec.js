import { describe, it, expect, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Modal from './AppModal.vue'

const factory = (args) =>
  shallowMount(Modal, {
    ...args,
  })

describe('Modal', () => {
  let wrapper

  afterEach(async () => {
    await wrapper.unmount()
  })

  it('should render the modal if props equal true', async function () {
    wrapper = factory({
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.find('[data-test="modal"]').exists()).toBe(true)
    await wrapper.setProps({ modelValue: false })
    expect(wrapper.find('[data-test="modal"]').exists()).toBe(false)
  })

  it('should not display modal if click "close" button', async function () {
    wrapper = factory({
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.find('[data-test="modal"]').exists()).toBe(true)

    await wrapper.find('[data-test="close_btn"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false)
  })

  it('should render passed slots', function () {
    const headerSlot = 'Test Header'
    const contentSlot = '<p>Test Content</p>'
    const actionSlot = '<button>Action</button>'

    wrapper = factory({
      props: {
        modelValue: true,
      },
      slots: {
        header: headerSlot,
        content: contentSlot,
        action: actionSlot,
      },
    })

    expect(wrapper.html()).toContain(headerSlot)
    expect(wrapper.find('[data-test="modal_header"]').text()).toContain(
      headerSlot
    )
    expect(wrapper.html()).toContain(contentSlot)
    expect(wrapper.html()).toContain(actionSlot)
  })
})
