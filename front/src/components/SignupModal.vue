<template>
  <div class="signup">
    <teleport>
   <div class="bloc-modal">
      <div class="overlay"></div>
      <div class="modal-card">
  <div class="userSignup">
    <h1>S'INSCRIRE</h1>
    <img class="photo" src="../assets/photo.png" alt="">
    <div class="form">
    <label>Prénom</label>
    <input type="text">
    </div>
    <div class="form">
    <label>Nom</label>
    <input type="text">
    </div>
    <div class="form">
    <label>email</label>
    <input type="email">
    </div>
    <div class="form">
    <label class="mdp">Mot de passe</label>
    <input type="password">
    </div>
    <button class="logbtn">connection</button>
  </div>
      </div>
  </div>
  </teleport>
  </div>
</template>

<script>
export default {
  setup() {
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.userSignup{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  background: #d3d3d3;
}
.form{
  display: flex;
  align-items: center;
  width: 100%;
  background: #d3d3d3;
}
label{
  display: block;
  margin: 0 2% 0 8%;
  width: 20%;
  margin-bottom: 2vh;
  background: #d3d3d3;
}
.photo{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 5vh;
  border: 1px solid black;
  background: #ededed;
}
input{
  width: 60%;
  margin-bottom: 2vh;
  border: none;
  background: white;
  border: 1px solid #d3d3d3;
}
.logbtn{
  width: 30%;
  height:6vh;
  font-size: 100%;
  margin: 3vh 0;
  background: #f92d02;
  border-color:#f92d02;
  border-radius: 2rem;
  color: white;
}
.form{
  display: flex;
  align-items: center;
  width: 100%;
  background: #d3d3d3;
}
.photo{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 5vh 0 ;
  border: 1px solid black;
  background: #ededed;
}
</style>
