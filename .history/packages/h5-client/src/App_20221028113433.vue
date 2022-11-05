<template>
  <MyButton>11111</MyButton>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import { userApi } from '@yeyanghui/apis'
import { add } from '@yeyanghui/utils'
import { MyButton } from '@yeyanghui/components'

onMounted(() => {
  userApi.getUserByUId(290).then((res: any)=>{
    console.log('res',res)
  })
  console.log('add(1,2)', add(1,2))
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
