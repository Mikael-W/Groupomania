<template>
  <div class="Signup">
    <SignupPage />
  </div>
</template>

<script>
// @ is an alias to /src
import SignupPage from '@/components/SignupPage.vue'

export default {
  name: 'Signup',
  components: {
    SignupPage
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