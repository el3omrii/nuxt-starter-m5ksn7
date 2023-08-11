import { createAvatar } from '@dicebear/core'
import { funEmoji } from '@dicebear/collection'
import Pusher from 'pusher-js'

export default function usePusher() {
const config = useRuntimeConfig()
const username = ref()
const avatar = ref()
const message = ref()
const conversations = ref([])
const login = () => {
    var data = { username: username.value}
    localStorage.setItem('user', JSON.stringify(data))
    isGuest.value = false
}
const isGuest =ref(true)
const logout = () => { 
    localStorage.removeItem('user')
    isGuest.value = true
}
const send = async () => {
    const data = {
        username: username.value,
        message: message.value,
        channel: "ch"
    }
    await useApi('conversations/store', {
        method: 'POST',
        body: data
    }).then(() => message.value = "")
}
const initPusher = () => 
    new Pusher(config.public.PUSHER_KEY,
        {
          cluster: 'eu',
          encrypted: true,
        }
  )

return {
    username,
    avatar,
    message,
    conversations,
    isGuest,
    login,
    logout,
    send,
    initPusher
}
}