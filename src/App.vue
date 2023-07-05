<template>
  <nav class="background">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/Resume">Resume</router-link>|
    <router-link to="/Skills">Skills</router-link>|
    <router-link to="/Testimonials">Testimonials</router-link>|
    <router-link to="/Projects">Projects</router-link>|
    <router-link to="/Contact">Contact</router-link>|
  </nav>

  <router-view/>
  <Footer>

  </Footer>

</template>
<script>
import Footer from '@/components/Footer.vue'
export default{
  components:{
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: whitesmoke;
}

nav a.router-link-exact-active {
  color: crimson;
}
.background{
  background-color: black;
}
</style>
