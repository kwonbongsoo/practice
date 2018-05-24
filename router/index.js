import Vue from 'vue'
import Router from 'vue-router'
import chatList from '@/components/chatList'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chatList',
      component: chatList
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
