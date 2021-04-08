<template>
    <div class="publicationbox-layout">
        <div class="user_publication-container">
            <div class="user_pict-link">
            <img class="user_profile-picture" :src="user.imageUrl"  alt="">
            <div class="postlink-container" role="button">Que voulez vous dire, {{user.firstname}} ?</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SendPublication',
  components: {
  },
  computed: {
    ...mapState({
      user: 'user',
    })
  },
  methods: {
  }
}

</script>

<style scoped>
.publicationbox-layout{
    width: 100vw;
    display: flex;
    justify-content: center;
}
</style>>



