import { ref } from 'vue'
import { HELPER_TEXT_VISIBLE_TIMEOUT } from '@/utils/consts'

export default function useCode() {
  const isCodeSend = ref<boolean>(false)

  const getCode = () => {
    isCodeSend.value = true
    const timeout = setTimeout(() => {
      isCodeSend.value = false
      clearTimeout(timeout)
    }, HELPER_TEXT_VISIBLE_TIMEOUT)
  }

  return {
    isCodeSend,
    getCode,
  }
}
