<template>
  <div id="navbar">
    <div class="left">
      <router-link tag="div" to="/index">
        <div class="image"><span>Blog</span></div>
        <span>博客</span>
      </router-link>
    </div>
    <div class="right">
      <router-link to="/home" tag="a" active-class="active">博客</router-link>
      <router-link to="/about" tag="a" active-class="active">关于</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@keyframes jump {
  20% {
    transform: translateY(-20px);
  }
  30% {
    transform: translateY(0px);
  }
  40% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-5px);
  }
  70% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
}
#navbar {
  font-size: 18px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 3px;
  box-shadow: 0px -1px 20px 1px gray inset;
  position: sticky;
  top: 0;
  background: linen;
  .left {
    width: 70%;
    float: left;
    .image {
      float: left;
      width: 5%;
      text-align: center;
      span {
        background: linear-gradient(to right, purple, transparent);
        cursor: pointer;
        color: white;
        font-size: 16px;
        margin: 10px auto;
        line-height: 40px;
        display: block;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid white;
        transition: 1s;
        border-radius: 50%;
        &:hover {
          transform: rotateZ(360deg);
        }
      }
    }
    span {
      cursor: pointer;
      color: purple;
    }
  }
  .right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    a {
      text-decoration: none;
      color: black;
      width: 80px;
      text-align: center;

      &:hover {
        
        animation: jump 1.2s 0.1s;
      }
    }
    .active {
      color: orange;
      opacity: 0.8;
    }
  }
}
</style>

