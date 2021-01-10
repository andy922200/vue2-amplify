<template>
  <div class="home">
    <Navbar />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HelloWorld
  }
}
</script>
