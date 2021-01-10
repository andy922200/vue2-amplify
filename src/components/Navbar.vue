<template>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click.stop.prevent="logout">Log Out</button>
    </div>
</template>

<script>
import router from '../router/index'

export default {
  name: 'Navbar',
  methods: {
    async logout () {
      await localStorage.clear()
      router.push('auth')
    },
    async clear () {
      localStorage.clear()
      return true
    }
  }
}
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn{
  padding:12px;
  margin: 6px;
}
</style>
