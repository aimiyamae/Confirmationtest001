<template>
  <div class='hello'>
    <h1>Hello {{ name }}!!</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="signOut">Sign out</button>
    <button @click="apiPublic">public</button>
    <button @click="apiPrivate">private</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
    apiPublic: async function () {
      let res = await axios.get('http://localhost:8080/public')
      this.msg = res.data
    },
    apiPrivate: async function () {
      let res = await axios.get('http://localhost:8000/private', {
      headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
    })
    this.msg = res.data
    }
  }
}

console.log("HELLO!!")
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>