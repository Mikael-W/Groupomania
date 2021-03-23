<template>
<div class="layout">
  <header>
      <div class="search-wrapper">
      <input class="search-input" type="text" v-model="search" placeholder="Rechercher des collègues"/>
      <img class="searchlogo" src="../assets/search.png" alt="">
    </div>
    <router-link to="/Home"><img class="logo" alt="Groupomania logo" src="../assets/logoheader.png"></router-link>
    <div class="user_side">
      <div class="notiflogoborder">
        <span class="notif-count">0</span>
        <img class="user_side-logonotif" src="../assets/notification.png" alt="">
      </div>
      <div class="user_side-profile">
        <img class="user_profile-pict" src="../assets/ProfessorCDP.jpeg" alt="">
        <router-link class="user-name" to="/Profile">username</router-link>
      </div>
    </div>
  </header>
</div>
</template>


<style scoped>
header{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100vw;
  background: #042a5f;
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
.user_side-profile{
  display: flex;
  align-items: center;
}
.user-name{
  color: white;
  font-size: 1.2rem;
  margin: 0 0 0 10px;
}
.user_profile-pict{
  background: white;
  width: 2.5rem;
  height:2.5rem;
  border-radius: 50%;
  border: 2px solid white;
}
</style>