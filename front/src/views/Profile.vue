<template>
  <div>
    <Homepage />
    <div class="profile-pictures">
      <div class="user_profile">
        <div class="user_profile-pictures">
          <img class="user-bg" src="../assets/photo.png" alt="" />
          <div class="user-picture">
          <img class="user-img" src="../assets/photoW.png" alt="" />
          </div>
        </div>
    </div>
    <div class="profile-data">
        <span class="user-name">{{user.firstname}}</span>
        <div class="user_profile-bio">
          <p class="bio-text">{{user.bio}}</p>
        </div>
    </div>
        <div class="profile-timeline"></div>
      </div>
    </div>  
</template>

<script>
import Homepage from '@/components/Home.vue'

import { mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    Homepage,
  },
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.profile-pictures {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    text-align:center;
}
.user_profile{
    background: white;
    width: 60%;
    height: auto;
    background: #D3D3D3 ;
}
.user_profile-pictures{
    position: relative;
    display: flex;
}
.user-bg{
    width:100%;
    height: 300px;
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
.user-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid black;
    background: darkblue;
    z-index: 1;
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