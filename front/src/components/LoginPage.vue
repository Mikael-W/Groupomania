<template>
  <div class="connexion-layout">
    <div class="rightlogintitle">
      <img src="../assets/logoheader.png" alt="groupomamia logo" />
      <p>L'application qui rapproche les collaborateurs</p>
    </div>
    <div class="userlog">
      <input type="email" placeholder="email" />
      <input type="password" placeholder="Mot de passe" />
      <button class="logbtn">Connexion</button>
      <span>Pas encore inscrit ?</span>
      <button @click="signupModal = true" class="signupBtn">S'incrire</button>
    </div>
    <teleport to="#modals">
      <div v-if="signupModal" class="Signup-modal">
        <div class="overlay"></div>
          <div class="userSignup">
            <h1>S'INSCRIRE</h1>
            <p>C'est facile et rapide !</p>
            <div class="names">
            <input class="fname" type="text" placeholder="Prénom" />
            <input class="lname" type="text" placeholder="Nom de famille" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Nouveau mot de passe"/>
            <button @click=" signupModal=false" class="signupBtn">S'incrire</button>
          </div>
      </div>
    </teleport>
    <footer>
      <span>© Groupomania 2021</span>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return{
      signupModal:false
    }
  },
}
</script>

<style scoped>
.connexion-layout {
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
}
.rightlogintitle {
  grid-column-start: 1;
  width: 40vw;
  height: 50vh;
  margin: 5vh 0;
}
img {
  width: 80%;
}
p {
  font-size: 1.5rem;
}
.userlog {
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin: 5vh 0;
  background: #d3d3d3;
}
input {
  width: 90%;
  height: 6vh;
  border-radius: 6px;
  margin-bottom: 2vh;
  border: 1px solid #d3d3d3;
  background: white;
  text-indent: 10px;
}
.logbtn {
  width: 90%;
  height: 6vh;
  font-size: 100%;
  margin: 3vh 0;
  background: #042a5f;
  border-color: #042a5f;
  border-radius: 6px;
  color: white;
}
.signupBtn {
  width: 70%;
  height: 4vh;
  font-size: 100%;
  margin: 3vh 0;
  background: #004f29;
  border-color: #004f29;
  border-radius: 6px;
  color: white;
  padding-top: 6px;
  text-align: center;
}
a {
  text-decoration: none;
}
.Signup-modal{
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
  width: 50vw;
  height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.1);;
}
.names{
  display: flex;
  justify-content: space-between;
  width:90%;
}
.fname{
  width: 45%;
}
.lname{
  width: 50%;
}

</style>
