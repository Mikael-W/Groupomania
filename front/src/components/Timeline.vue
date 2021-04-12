<template>
  <div class="timeline-container">
  <div class="publication-container">
    <div v-for="publication in publications" :key="publication" class="publication-card">
        <div class="profile-publication">
          <img class="user_profile-picture" src="" alt="">
          <button @click="editMenu = true"><img class="modif-icon" src="../assets/points.png" alt=""></button>
          <div v-show="editMenu" class="editMenu">
            <button @click="deletePublication()" class="delete-btn">Supprimer la publication</button>
            <button @click="editPublication()" class="edit-btn">Modififer la publication</button>
          </div>
        </div>
        <div class="publication-content">
          <p>{{publication.content}}</p>
          <img class="timeline-picture" :src="publication.imageUrl" alt="">
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
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
name: 'Timeline',
  data(){
    return {
      editMenu: false,
    }
  },
  components: {
  },
  mounted: function () {
   this.$store.dispatch('getPublications','getUserInfos','deletePublication');
  },
  computed: {
    ...mapState({
      user: 'user',
      publications: 'publications',
     // comments: 'comments'
    })
  },
  methods: {
    deletePublication(){
      this.$store.dispatch('deletePublication',{
             id:this.publications.id,
             userId:this.publications.userId    
         })
         .then(function (response){
            console.log(response)
        },function(error){
        console.log (error);
        }) 
    }
  },
   // editPublication({});
  
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
  position: relative;
  width:50%;
  background: white;
  margin: 1rem 0;
  border-radius: 6px ;
}
.modif-icon{
  position:absolute;
  top:1rem;
  right:1rem;
  width: 1.5vw;
}
.editMenu{
  position: absolute;
  top:1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:30%;
  background: white;
  border: solid 1px grey;
}
button{
  appearance: none;
  border:none;
  background: white;
}
.timeline-picture{
  width:100%;
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