import { describe, it, expect, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Input from './AppInput.vue'

const factory = (args) =>
  shallowMount(Input, {
    ...args,
  })

const labelProps = 'Input label'
const inputMockValue = 'Input value'

describe('Input.vue', () => {
  let wrapper

  afterEach(async () => {
    await wrapper.unmount()
  })

  it('should display label', function () {
    wrapper = factory({
      props: {
        label: labelProps,
      },
    })

    expect(wrapper.html()).contain(labelProps)
  })

  it('should not display label if not pass label prop', function () {
    wrapper = factory()

    expect(wrapper.html()).not.contain(labelProps)
  })

  it('should set the value into input', async function () {
    wrapper = factory()

    const input = wrapper.find('[data-test="input"]')
    await input.setValue(inputMockValue)

    expect(input.element.value).toBe(inputMockValue)
  })

  it('should emits event if set value into input', async function () {
    wrapper = factory()

    await wrapper.find('[data-test="input"]').setValue(inputMockValue)

    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(inputMockValue)
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
  })
})
