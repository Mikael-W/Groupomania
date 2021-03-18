<template>
  <div class="Profile">
    <Homepage />
    <ProfilePage />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilePage from '@/components/Profile.vue'
import Homepage from '@/components/Home.vue'

export default {
  name: 'Profile',
  components: {
    Homepage,
    ProfilePage
  }
}
</script>

<style scoped>

</style>