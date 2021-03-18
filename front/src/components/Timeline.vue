<template>
  <div class="timeline-container">
  <div class="publication-container">
    <div class="user_publication-container">
      <div class="user_pict-link">
      <img class="user_profile-picture" src="../assets/photo.png" alt="">
      <div class="postlink-container" role="button">Que voulez vous dire, username</div>
      </div>
      <div class="interaction-container">
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
  <teleport to="#modals">
      <div v-if="signupModal" class="Signup-modal">
        <div class="overlay"></div>
          <div class="userSignup">
            <div class="signup-title">
            <h1>S'inscrire</h1>
            <p>C'est facile et rapide !</p>
            </div>
            <button @click="signupModal=false" class="closemodalbtn">X</button>
          </div>
      </div>
   </teleport>
</div>
</template>

<script>
export default {

}
</script>

<style>
.publication-container{
  display: flex;
  justify-content: center;
  width:100%;
  height:100%;
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