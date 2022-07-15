<template>

  <div class="menu">
    <a v-for="a in menu" :key="a">{{a}}</a>
  </div>

  <div>
    <img src="./assets/room0.jpg" alt="" class="room-img">
    <h4>{{원룸들[0].title}}</h4>
    <p>{{원룸들[0].price}}</p>
  </div>



</template>


<script>

import data from './assets/oneroom.js'

export default {
  name: 'App',
  data() {
    return {
      원룸들 : data,
      모달창 : false,
      신고수 : [0,0,0],
      menu : ['Home', 'Shop', 'About'],
      products : ['역삼동 원룸', '천호동 원룸', '마포구원룸'],
    }
  },

  methods : {
    increase () {
      this.신고수 += 1;
    }
  },

  // components: {
    
  // }
}
</script>

<style>

body {
  margin:0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width:100%; height:100%;
  background: rgba(0,0,0,0.5);
  position:fixed; padding:20px;
}

.white-bg {
  width:100%; background: white;
  border-radius: 8px;
  padding:20px;
}


.room-img {
  width:100%;
  margin-top:40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background:darkslateblue;
  padding:15px;
  border-radius: 5px;
}

.menu a {
  color : white;
  padding: 10px;
}



</style>
