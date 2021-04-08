<template>
  <div class="timeline-container">
  <div class="publication-container">
    <div v-for="publication in publications" :key="publication.id" class="publication-card">
        <div class="profile-publication">
          <img class="profile-User" :src="publication.userId" alt="">
          <p class="publication-text">{{publication.createdAt}}</p>
        </div>
        <div class="publication-content">
          <p>{{publication.content}}</p>
          <img :src="publication.imageUrl" alt="">
        </div>
        <div class="interactions-count">
        <div class="likes-count">
          <img class="like" src="../assets/like.png" alt="">
          <span class="count-number">0</span>
        </div>
        <div class="comments-count">
          <span class="count-number">0</span>
          <span>commentaires</span>
        </div>
        <div class="shares-count">
          <span class="count-number">0</span>
          <span>partages</span>
        </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
name: 'Timeline',
  components: {
  },
  mounted: function () {
    this.$store.dispatch('getPublications');
    //this.$store.dispatch('getComments');
  },
  computed: {
    ...mapState({
      user: 'user',
      publications: 'publications',
     // comments: 'comments'
    })
  },
  methods: {
  }
}
</script>

<style scoped>

.timeline-container{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.publication-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
}
.publication-card{
  width:50%;
  background: white;
  margin: 1rem 0;
  border-radius: 6px ;


}

.interactions-count{
  display:flex;
  justify-content: space-around;
  width:100%;
  border-top: 1px solid #d3d3d3;
  border-bottom:1px solid #d3d3d3;
}
.like{
  width: 15px;
  height:15px;
}
.count-number{
  margin: 0 5px;
}
</style>