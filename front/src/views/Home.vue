<template>
  <div class="Home">
    <Homefeed />
  </div>
</template>

<script>
// @ is an alias to /src
import Homefeed from '@/components/Homefeed.vue'

export default {
  name: 'Home',
  components: {
    Homefeed
  }
}
</script>

<style scoped>
.Signup{
  display: flex;
  justify-content: center;
  margin: 5vh 0;
}
</style>