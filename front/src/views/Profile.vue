<template>
  <div>
    <Header />
    <div class="profile-pictures">
      <div class="user_profile">
        <div class="user_profile-pictures">
          <div class="user-bg_box">
            <img
              class="user-bg"
              v-if="userOverlay == null"
              :src="userInfos.bgUrl || '../assets/photoW.png'"
              alt=""
            />
            <div class="file-overlay_preview">
              <img
                class="file-overlay_picture"
                v-if="userOverlay"
                :src="userOverlay"
                alt=""
              />
            </div>
            <input
              class="file-upload_bnt"
              type="file"
              ref="overlay"
              accept="image/*"
              @change="onOverlayPicked"
            />
            <button @click="onPickOverlay" class="edit-bg_btn">
              <img
                class="user-bg_edit"
                src="../assets/photo.png"
                alt=""
              />changer la photo de couverture
            </button>
          </div>
          <div class="user-picture">
            <div class="user-picture_box">
              <img
                class="user-img"
                v-show="userAvatar == null"
                :src="userInfos.imageUrl || '../assets/photo.png'"
              />
              <div class="file-preview">
                <img
                  class="file-preview_image"
                  v-if="userAvatar"
                  :src="userAvatar"
                  alt=""
                />
              </div>
              <button @click="onPickAvatar" class="edit-picture_btn">
                <img class="user-img_edit" src="../assets/photo.png" alt="" />
              </button>
              <input
                class="file-upload_bnt"
                type="file"
                ref="avatar"
                accept="image/*"
                @change="onAvatarPicked"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="profile-data">
        <span class="user-name">
          {{ userInfos.firstname }} {{ userInfos.lastname }}
        </span>
        <div class="user_profile-bio">
          <textarea class="bio-text" v-if="modificationBio" v-model="content" placeholder="dites en plus sur vous" ></textarea>
          <textarea v-if="userInfos.bio " class="bio-text" v-model="userInfos.bio"></textarea>
          <button @click="editBio(),(modificationBio == true)" >Modifier ma bio</button>
        </div>
        <button
          v-if="userInfos.id == userInfos.id || userId == userInfos.isAdmin"
          @click="deleteAccount()"
          class="deleteBtn"
        >
          Supprimer le compte
        </button>
        <button v-if="userOverlay != null" @click="editUserOverlay()">
          Publier Overlay
        </button>
        <button v-if="userAvatar != null" @click="editUserAvatar()">
          Publier
        </button>
      </div>
      <div class="profile-timeline"></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HomeHeader.vue'

import { mapState } from 'vuex'

export default {
  name: 'Profile',
  data(){
    return{
      userAvatar:null,
      userOverlay:null,
      modificationBio:false,
      content:"",
    }
  },
  components: {
    Header,
  },
  mounted: function () {
    if (this.$store.state.user.userId == -1) {
     this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos', 'editUser');
  },
  computed: {
    ...mapState({
      user: 'user', 
      userInfos: 'userInfos',
      token: 'token'
    })
  },
  methods: {
    onPickAvatar () {
      this.$refs.avatar.click()
    },
    onAvatarPicked (event) {
       this.files = event.target.files[0];
      const files = event.target.files
      const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
           })
      fileReader.readAsDataURL(files[0]);
      this.userAvatar = URL.createObjectURL(files[0]);
    },
    editUserAvatar(){
     const formData = new FormData();
            formData.append('image', this.files);
         this.$store.dispatch('editUser', formData);
      },
    onPickOverlay (){
      this.$refs.overlay.click()
    },
    onOverlayPicked (event) {
       this.files = event.target.files[0];
      const files = event.target.files
      const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
           })
      fileReader.readAsDataURL(files[0]);
      this.userOverlay = URL.createObjectURL(files[0]);
    },
    editUserOverlay(){
     const formData = new FormData();
            formData.append('overlay', this.files);
         this.$store.dispatch('editUserOverlay', formData);
      },
    editBio(){
      this.$store.dispatch('editUserBio',{
        bio: this.content
      })
      this.modificationBio = null;
    },

      },
    deleteAccount(){
      const user = this.userInfos
      this.$store
        .dispatch("deleteAccount", {
          id: user.id,
          userId: user.id,
          isAdmin: user.isAdmin
        })
        .then(function (error) {
            console.log(error);
        })
    }
  }

</script>

<style scoped>
.profile-pictures {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: center;
}
.user_profile {
  position: relative;
  background: white;
  width: 60%;
  height: auto;
  background: #d3d3d3;
}
.user_profile-pictures {
  position: relative;
  display: flex;
  width: 60vw;
  height: 35vh;
}
.user-bg_box {
  position: relative;
  width: 60vw;
  height: 35vh;
  background: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.file-overlay_preview {
  width: 60vw;
  height: 35vh;
}
.file-overlay_picture {
  width: 60vw;
  height: 35vh;
}
.edit-bg_btn {
  position: absolute;
  z-index: 10;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  border: solid 1px grey;
  width: 30%;
  cursor: pointer;
}
.user-bg_edit {
  border-radius: 100%;
  width: 2vw;
  margin-right: 3px;
}
.file-upload_bnt {
  display: none;
}
.user-bg {
    width: 60vw;
  height: 35vh;
  border-radius: 6px;
  background: white;
}
.user-picture {
  position: absolute;
  bottom: -30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-picture_box {
  position: relative;
}
.user-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 1;
}
.user-img_edit {
  border-radius: 100%;
  width: 2vw;
}
.edit-picture_btn {
  position: absolute;
  z-index: 10;
  bottom: 10px;
  right: 1rem;
  border: solid 1px grey;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.profile-data {
  text-align: center;
  width: 60%;
  background: white;
  margin-top: 3rem;
  border-radius: 6px;
}
.user-name {
  display: block;
  font-size: 2rem;
  margin-top: 2.5rem;
  color: black;
}
.user_profile-bio {
  width: 100%;
  display: flex;
  justify-content: center;
}
.bio-text {
  width: 70%;
}
</style>