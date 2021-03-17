<template>
<div class="layout">
  <header>
      <img class="logo" alt="Groupomania logo" src="../assets/logoheader.png">
      <div class="search-wrapper">
      <input class="search-input" type="text" v-model="search" placeholder="Rechercher..."/>
      <button class="searchdiv">
      <img class="searchlogo" src="../assets/search.png" alt="">
      </button>
      </div>
   <div class="notification">
    <img class="notiflogo" src="../assets/notification.png" alt="">
    </div>
  </header>
<div class="feed-container">
    <img src="" alt="">
    <div class="interation-container">
        <div class="like">J'aime</div>
        <div class="comment">Commenter</div>
        <div class="forward">Partager</div>
    </div>
    <input type="textarea">
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background: #042a5f;
}
h1{
    color: #f92d02;
}
.logo{
  width: 20vw;
  padding: 1rem;
  background: #042a5f;
}
.search-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4vh;
  background: #d3d3d3;
}
.search-input{
  width:30vw;
  height: 3vh;
  border-radius: 1rem;
  border: 1px solid #d3d3d3;
  background: white;
}
.searchdiv{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -4vh;
  border-radius: 50%;
  border: none;
  background: #f92d02;
  width: 2.5vw;
  height: 4vh;
}
.searchlogo{
  width:2vh;
  height: 2vh;
}
.notification{
  margin: 0 2vw 0 0;
  background: #d3d3d3;
}
.notiflogo{
  width: 2vw;
  height: 2vh;
}
.feed-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  background: #d3d3d3;
}
.interation-container{
    width: 100%;
}
</style>