<template>
  <div class="Login">
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '@/components/LoginPage.vue'

export default {
  name: 'Login',
  components: {
    LoginPage
  }
}
</script>

<style scoped>
.Signup{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 5vh 0;
}
</style>