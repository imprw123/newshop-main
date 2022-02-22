<template>
 <router-view />
</template>

<script>


export default {
  name: 'app',
  components: {
  
  }
}
</script>

<style>
@import "https://img.5211game.com/Base/css/base.css";
#app {
  height: 100%;
  min-height: 960px;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
  background: url(./assets/images/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  padding-bottom: 50px;
  font-family: "微软雅黑";
}

::-webkit-scrollbar  
{  
    width: 10px;    
    background-color: rgb(29, 34, 46);;  
}  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  
    background-color:rgb(29, 34, 46);;  
}  


::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: rgb(15, 17, 24);;  
}  

</style>
