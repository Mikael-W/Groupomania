<template>
  <div class="Home">
    <Homepage />
    <SendPublication />
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Home.vue'
import Timeline from '@/components/Timeline.vue'
import SendPublication from '@/components/SendPublication.vue'

export default {
  name: 'Home',
  components: {
    Homepage,
    SendPublication,
    Timeline
  }
}
</script>

<style>
</style>