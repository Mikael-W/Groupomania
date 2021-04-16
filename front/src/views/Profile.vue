<template>
  <div>
    <Header />
    <div class="profile-pictures">
      <div class="user_profile">
        <div class="user_profile-pictures">
          <div class="user-bg_box">
          <img class="user-bg" :src="userInfos.bgUrl || '../assets/photoW.png'" alt="" />
          <button class="edit-bg_btn"><img class="user-bg_edit" src="../assets/photo.png" alt="">changer la photo de couverture</button>
          </div>
          <div class="user-picture">
          <div class="user-picture_box">
          <img class="user-img" :src="userInfos.imageUrl || '../assets/photo.png'"/>
          <button @click="onPickFile" class="edit-picture_btn"><img class="user-img_edit" src="../assets/photo.png" alt=""></button>
          <input class="file-upload_bnt" type="file" ref="fileInput" accept="image/*" @change="onFilePicked"/>
          <button @click="editUserAvatar()">Modifier</button>
          </div>
          </div>
        </div>
    </div>
    <div class="profile-data">
        <span class="user-name"> {{userInfos.firstname}} {{userInfos.lastname}} </span>
        <div class="user_profile-bio">
          <p class="bio-text">{{userInfos.bio}}</p>
        </div>
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
      image:null
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
      userInfos: 'userInfos'
    })
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
       this.files = event.target.files[0];
      const files = event.target.files
      const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
           })
      fileReader.readAsDataURL(files[0]);
      this.image = URL.createObjectURL(files[0]);
    },
    editUserAvatar(){
     const formData = new FormData();
            formData.append('image', this.files);
            console.log(...formData);
         this.$store.dispatch('editUser', formData);
    }
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
    text-align:center;
}
.user_profile{
  position: relative;
    background: white;
    width: 60%;
    height: auto;
    background: #D3D3D3 ;
}
.user_profile-pictures{
    position: relative;
    display: flex;
    height:300px;
}
.user-bg_box{
  position: relative;
  width:100%;
  background: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.edit-bg_btn{
  position: absolute;
  z-index: 10;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  background: white;
  border-radius:8px;
  border: solid 1px grey;
  width:30%;
  cursor: pointer;
}
.user-bg_edit{
    border-radius: 100%;
    width:2vw;
    margin-right:3px;
}
.file-upload_bnt{
  display:none;
}
.user-bg{
    width:100%;
    border-radius:6px;
    background: white;
}
.user-picture{
    position: absolute;
    bottom:-30px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-picture_box{
  position: relative;
}
.user-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid black;
    z-index: 1;
}
.user-img_edit{
    border-radius: 100%;
    width:2vw;
    
}
.edit-picture_btn{
  position:absolute;
  z-index: 10;
    bottom: 10px;
    right: 1rem;
    border: solid 1px grey;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width:2rem;
    height:2rem;
    cursor: pointer;
}
.profile-data{
    width:60%;
    background: white;
    margin-top: 3rem;
    border-radius:6px;
}
.user-name{
    display: block;
    font-size:2rem;
    margin-top: 2.5rem;
    color: black;
}
.user_profile-bio{
    width: 100%;
    display: flex;
    justify-content: center;
}
.bio-text{
    width: 70%;
}

</style>