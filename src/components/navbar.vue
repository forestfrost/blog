<template>
  <div id="navbar" v-show="this.$store.state.isNavbarShow">
    <div class="left">
      <div class="image" @click="handleItemShow()"><span>Blog</span></div>
    </div>
    <transition name="fade" model="out-in">
      <div class="right" v-show="isShow">
        <router-link tag="a" to="/index" active-class="active"
          >主页</router-link
        >
        <router-link to="/home" tag="a" active-class="active">博客</router-link>
        <router-link to="/about" tag="a" active-class="active"
          >关于</router-link
        >
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleItemShow() {
      if (document.documentElement.clientWidth >= 600) {
        return;
      } else {
        this.isShow = !this.isShow;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@media screen and (max-width: 599px) {
  //移动端没有hover事件，试图在弹出选项框时添加一些动画效果
  #navbar {
    float: left;
    font-size: 17px;
    width: 15%;

    .left {
      margin: 5px;
      .image {
        span {
          display: block;
          line-height: 40px;
          height: 40px;
          width: 40px;
          border: 1px white solid;
          border-radius: 50%;
          box-sizing: border-box;
          background: linear-gradient(to right, purple, transparent);
          color: white;
        }
      }
    }
    .right {
     transition: 0.5s;
      // transform: translateX(-50px);
      a {
        display: block;
        text-decoration: none;
        margin: 10px 5px 0px 10px;
        color: black;
      }
      .active {
        color: orange;
        opacity: 0.8;
      }
    }
  }
  
  .fade-enter,
.fade-leave-to {
	opacity: 0;
	transform: translateX(-50px);
}

.fade-enter-active,
.fade-leave-active {
	transition: all .8s ease;
}
}
@media screen and(min-width:600px) {
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
}
</style>

