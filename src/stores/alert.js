import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const message = ref('')
  const error = ref('')
  let timeoutId = null

  function setMessage(msg) {
    message.value = msg
    error.value = ''
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      message.value = ''
    }, 4000)
  }
  function setError(msg) {
    error.value = msg
    message.value = ''
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      error.value = ''
    }, 4000)
  }
  function clear() {
    message.value = ''
    error.value = ''
    clearTimeout(timeoutId)
  }
  return { message, error, setMessage, setError, clear }
})