<template>
<div class="layout">
<header>
      <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="Rechercher des collègues"/>
      <img class="searchlogo" src="../assets/search.png" alt="">
    </div>
    <router-link to="/Home"><img class="logo" alt="Groupomania logo" src="../assets/logoheader.png"></router-link>
    <div class="user_side">
      <div class="notiflogoborder">
        <span class="notif-count">0</span>
        <img class="user_side-logonotif" src="../assets/notification.png" alt="">
      </div>
      <div class="user-side_profile">
        <div class="user-profile_container">
         <router-link class="user-name" to="/Profile">{{user.firstname}}</router-link>
        <img class="user_profile-pict" :src="user.imageUrl" alt="">
        </div>
        <button class="logout-Btn" @click="logout()"><img class="sign-out_icon" src="../assets/log-out.png" alt=""></button>
      </div>
    </div>
</header>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
  },
  mounted: function () {
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'user',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('LOG_OUT');
      this.$router.push('/');
    }
  }
}

</script>


<style>
header{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100vw;
  background: #042a5f;
}
a{
  text-decoration: none;
}
.logo{
  padding: 1rem;
  background: #042a5f;
}
.search-wrapper{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
}
.search-input{
  position: relative;
  width: 100%;
  height: 35px;
  border-radius: 1rem;
  background: white;
  text-indent: 1.5rem;
}
input{
  outline: none;
  border:none;
}
.searchlogo{
  position: absolute;
  left:10px;
  width:auto;
  height: 0.8rem;
}
.user_side{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}
.user_side-logonotif{
  width: 1.5rem;
  height: auto;
}
.notif-count{
  text-align: center;
  position: absolute;
  top:4px;
  right:-4px;
  width:1rem;
  height: 1rem;
  color:white;
  background: #f92d02;
  border: 1px solid white;
  border-radius: 50%;
}
.notiflogoborder{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius:50%;
  margin-left: 1.5rem;
}
.user-side_profile{
  display: flex;
  align-items: center;
}
.user-profile_container{
  border-radius: 25px;
  background: white;
  border: 1px solid white;
  padding: 0;;
  display: flex;
  align-items: center;
}
.user-name{
  color: #042a5f;
  font-size: 1.2rem;
  margin: 0 0 0 10px;
}
.sign-out_icon{
  width: 3vw;
  margin-left:10px;
}
.logout-Btn{
  display: flex;
  align-items: center;
  background: none;
  border:none;
  cursor: pointer;
}
.user_profile-pict{
  background: white;
  width: 2.5rem;
  height:2.5rem;
  border-radius: 50%;
  border: 2px solid white;
  margin: 0;
}
.user_publication-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:50%;
  background: white;
  margin: 1rem;
  border-radius:6px;
}
.user_pict-link{
  display: flex;
  align-items: center;
}
.user_profile-picture{
  width:40px;
  height:40px;
  border:1px solid black;
  margin: 1rem;
  border-radius:50%;
  background: white;
}
.postlink-container{
  display:flex;
  align-items: center;
  width:85%;
  height: 40px;
  border-radius: 1rem;
  background: #d3d3d3;
}
</style>