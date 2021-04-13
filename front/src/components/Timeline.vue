<template>
  <div class="timeline-container">
    <div class="publication-container">
      <div
        v-for="publication in publications"
        :key="publication"
        class="publication-card"
      >
        <div class="profile-publication">
          <img class="user_profile-picture" src="" alt="" />
          <button @click="editMenu = true">
            <img class="modif-icon" src="../assets/points.png" alt="" />
          </button>
          <div v-show="editMenu" class="editMenu">
            <button @click="deletePublication()" class="delete-btn">
              Supprimer la publication
            </button>
            <button @click="editModal = true" class="edit-btn">
              Modififer la publication
            </button>
          </div>
        </div>
        <div class="publication-content">
          <p>{{ publication.content }}</p>
          <img class="timeline-picture" :src="publication.imageUrl" alt="" />
        </div>
        <div class="interactions-count">
          <div class="likes-count">
            <img class="like" src="../assets/like.png" alt="" />
            <span class="count-number">0</span>
          </div>
          <div class="comments-count">
            <span class="count-number">0</span>
            <span @click="commentsContainer = true">commentaires</span>
          </div>
        </div>
        <div v-if="commentsContainer" class="comments-container">
            <div class="comments" v-for="comment in comments" :key="comment"></div>
            <div class="sendbox-border"></div>
            <div class="user_publication-container">
            <div class="user_pict-link">
            <img class="user_profile-picture" :src="user.imageUrl"  alt="">
            <div class="sendbox-comment">
            <input type="text" class="post-comment_container" placeholder="Votre commentaire..."/>
            <button class="comment-btn"><img class="comment-send" src="../assets/send.png" alt=""></button>
            </div>
            </div>
        </div>
          </div>
      </div>
    </div>
    <teleport to="#modals">
      <div v-if="editModal" class="edit-modal">
        <div class="overlay"></div>
          <div class="userSignup">
            <div class="user_pict-link">
            <img class="user_profile-picture" :src="user.imageUrl"  alt="">
            <div> {{user.firstname}} {{user.lastname}}</div>
            </div>
            <button @click="editModal=false" class="closemodalbtn">X</button>
            <div class="edit-form">
            <textarea v-model="content" class="text-content" type="text-area" placeholder="Que voulez vous dire?" />
            <div class="file-preview"><img class="file-preview_image" v-if="url" :src="publication.imageUrl" alt=""></div>
            <div class="action-container_btn">
            <button @click="onPickFile" class="upload-btn">Photo<img class="upload-icon" src="../assets/image-gallery.png" alt=""></button>
            <input class="file-upload_bnt" type="file" ref="fileInput" accept="image/*" @change="onFilePicked"/>
            <button @click="editPublication()" class="publish-btn">Enregistrer<img class="publish-icon" src="../assets/send.png" alt=""></button>
            </div>
            </div>
          </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Timeline",
  data() {
    return {
      editMenu: false,
      editModal: false,
      commentsContainer:false,
      image:null,
      count:null
    };
  },
  components: {},
  mounted: function () {
    this.$store.dispatch(
      "getPublications",
      "getUserInfos",
      "deletePublication",
      "getPublicationComments",
      "editPublication"
    );
  },
  computed: {
    ...mapState({
      user: "user",
      publications: "publications",
      comments: 'comments'
    }),
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
    editPublication() {
      this.$store.dispatch("editPublication", {
        publicationId: this.publication.id,
        content: this.content,
        image: this.image
      })
    },
    deletePublication() {
      this.$store
        .dispatch("deletePublication", {
          id: this.publications.id,
          userId: this.publications.userId,
        })
        .then(
          function () {
            console.log("publication supprimée");
          },
          function (error) {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style scoped>
.timeline-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.publication-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.publication-card {
  position: relative;
  width: 50%;
  background: white;
  margin: 1rem 0;
  border-radius: 6px;
}
.modif-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5vw;
}
.editMenu {
  position: absolute;
  top: 1.5rem;
  right:1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 30%;
  background: white;
  border: solid 1px grey;
}
button {
  appearance: none;
  border: none;
  background: white;
  cursor: pointer;
}
.action-container_btn{
  display: flex;
}
.closemodalbtn{
  position: absolute;
  top:1rem;
  right:0.5rem;
  border: none;
  background: white;
  color: #042a5f;
  font-weight: bold;
  font-size:1rem;
}
a {
  text-decoration: none;
}
.edit-modal{
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay{
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.userSignup {
  z-index: 1;
  position: relative;
  width: 50vw;
  height:auto;
  align-items: center;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.1);;
}
.signup-title{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
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
.edit-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.timeline-picture {
  width: 100%;
}
.interactions-count {
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
}
.comments-container{
  width:100%;
  background: white;
}
.post-comment_container{
  width:35vw;
  height: 5vh;
  border-radius: 8px ;
  background: #d3d3d3;
  text-indent: 10px;
}
.sendbox-border{
  align-self: center;
  height: 2px;
  width: 80%;
  background: #d3d3d3;
}
.sendbox-comment{
  display: flex;
}
.comment-btn{
  right:10px;
}
.comment-send{
  width: 1rem;
  height: 1rem;
}
.like {
  width: 15px;
  height: 15px;
}
.count-number {
  margin: 0 5px;
}
</style>