<template>
  <div class="home">
    <Navbar />
    <Hero />
    <SearchCta />
    <Discover />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import SearchCta from "@/components/SearchCta.vue";
import Discover from "@/components/Discover.vue";
import Register from "@/components/Register.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    SearchCta,
    Discover,
    Register
  }
}
</script>
