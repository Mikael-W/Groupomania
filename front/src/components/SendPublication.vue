<template>
    <div class="SP-layout">
    <div class="publicationbox-layout">
        <div class="user_publication-container">
            <div class="user_pict-link">
            <img class="user_profile-picture" :src="user.imageUrl"  alt="">
            <div @click="publishModal = true" class="postlink-container" role="button">Que voulez vous dire, {{user.firstname}} ?</div>
            </div>
        </div>
    </div>
    <teleport to="#modals">
      <div v-if="publishModal" class="Signup-modal">
        <div class="overlay"></div>
          <div class="userSignup">
              <div class="user_pict-link">
            <img class="user_profile-picture" :src="user.imageUrl"  alt="">
            <div> {{user.firstname}} {{user.lastname}}</div>
            </div>
            <button @click="publishModal=false" class="closemodalbtn">X</button>
            <div class="signup-form">
            <textarea v-model="content" class="text-content" type="text-area" placeholder="Que voulez vous dire?" />
            <div class="file-preview"><img class="file-preview_image" v-if="url" :src="url" alt=""></div>
            <div class="action-container_btn">
            <button @click="onPickFile" class="upload-btn">upload<img class="upload-icon" src="../assets/image-gallery.png" alt=""></button>
            <input class="file-upload_bnt" type="file" ref="fileInput" accept="image/*" @change="onFilePicked"/>
            <button @click="addPublication()" class="publish-btn">Publier<img class="publish-icon" src="../assets/send.png" alt=""></button>
            </div>
            </div>
          </div>
      </div>
    </teleport>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SendPublication',
  data(){
      return{
      publishModal:false,
        content:'',
        image :null,
        url:null
      }
    },
  computed: {
    ...mapState({
      user: 'user',
      publications: 'publications'
    })
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files[0];
      this.image = files.name
      this.url = URL.createObjectURL(files);
    },
     addPublication(){
         this.$store.dispatch('addPublication',{
             id:this.user.id,
             content: this.content,
             image:this.image
         })
         .then(function (){
             console.log(this.image)
            console.log('publié')
        },function(error){
        console.log (error);
        }) 
    }
  } 
}

</script>

<style scoped>
.publicationbox-layout{
    width: 100vw;
    display: flex;
    justify-content: center;
}
.text-content{
    width: 95%;
    min-height: 5vh;
    border: none;
    resize: vertical;
    outline: unset;
}
.file-preview{
    width:95%;
    height: auto;
}
.file-preview_image{
    width:100%;
}
.action-container_btn{
    display: flex;
}
.upload-btn, .publish-btn{
    display: flex;
    align-items: center;
    background: white;
    justify-content: center;
    width:25vw;
    border-width: 1px;
    border-color: grey;
    border-style: solid;
    padding: 10px 0;
}
.file-upload_bnt{
    display:none;
}
.upload-icon, .publish-icon{
    width: 2.5vw;
}
</style>>



