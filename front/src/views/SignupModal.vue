<template>
  <div class="Signup">
    <SignupModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupModal from '@/components/SignupModal.vue'

export default {
  name: 'Signup',
  components: {
    SignupModal
  }
}
</script>

<style scoped>

</style>