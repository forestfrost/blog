<template>
  <div class="index">
    <div class="selfdes">
      <h1>Hello!I'm dreamer</h1>
      <p>
        欢迎来到我的博客！这个博客是由Vue作为框架进行组件化开发完成的一个个人博客，功能很简单，但我会慢慢实现
        一些有趣的动画效果及好看的样式。
      </p>
    </div>
    <main>
      <div class="left" ref="left" @mouseover="handleOver($event)">
        <router-link tag="li" to="/home" id="blog">
          <p class="title">My Blog</p>
          <p class="des">Welcome to my blog</p>
        </router-link>
        <router-link tag="li" to="/about" id="about">
          <p class="title">About</p>
          <p class="des">About me</p>
        </router-link>
        <router-link tag="li" to="#" id="more">
          <p class="title">More</p>
          <p class="des">It will be more funny</p>
        </router-link>
      </div>
      <div class="right">
        <div class="ring">
          <span class="firstring"></span>
          <span class="secondring">
            <img src="http://www.ganecheng.tech/img/2.png" />
          </span>
          <span class="thirdring"> </span>
          <span class="forthring"
            ><img src="http://www.ganecheng.tech/img/1.png" alt=""
          /></span>
        </div>
        <div class="showpage">
          <div class="page page-blog" ref="blog" id="blog">Blog</div>
          <div class="page page-about" ref="about" id="about">About</div>
          <div class="page page-more" ref="more" id="more">More</div>
          <div class="showpage-content">
            <p v-if="showblog">欢迎来到我的博客</p>
            <p v-if="showabout">关于我的一些事</p>
            <p v-if="showmore">以后会有更多</p>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showblog:true,
      showabout:false,
      showmore:false,
    };
  },
  methods: {
    handleOver(e) {
      
      switch (e.target.getAttribute("id")) {
        case "blog":
         this.setBorder('blog')
          this.setBackground("blog");
           this.setContent('blog');
          break;
        case "about":
          this.setBorder('about')
          this.setBackground("about");
          this.setContent('about')
          break;
        case "more":
         this.setBorder('more')
          this.setBackground("more");
          this.setContent('more')
          break;
        default:
          break;
      }
    },
    setBorder(id){
      
      for(let i=0;i<this.$refs.left.children.length;i++)
      {
        if(id==this.$refs.left.children[i].id)
        {
          this.$refs.left.children[i].setAttribute("style", "border-left:10px #01A6E5 solid; color: blueviolet;");
        }
        else{
          this.$refs.left.children[i].setAttribute("style", "");
        }
      }
    },
    
    setBackground(id) {
      for (let key in this.$refs) {
        if (this.$refs[key].id == id) {
          this.$refs[key].setAttribute(
            "style",
            "background:#01A6E5;font-size:25px;width:200px;height:200px;margin-left:-25px"
          );
        } else {
          this.$refs[key].setAttribute("style", "");
        }
      }
    },
    setContent(id){
      switch(id){
        case "blog":
         this.showblog=true;
         this.showabout=false;
         this.showmore=false;
          break;
        case "about":
          this.showblog=false;
         this.showabout=true;
         this.showmore=false;
          break;
        case "more":
         this.showblog=false;
         this.showabout=false;
         this.showmore=true;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.$refs.blog.setAttribute("style", "background:#01A6E5;font-size:25px;width:200px;height:200px;margin-left:-25px");
    this.$refs.left.children[0].setAttribute("style", "border-left:10px #01A6E5 solid; color: blueviolet;");
  },
};
</script>
<style lang="less" scoped>
@keyframes rotate1 {
  100% {
    transform: rotateZ(300deg) scale(0.85);
  }
}
@keyframes rotate2 {
  100% {
    transform: rotateZ(300deg);
  }
}
@keyframes rotate3 {
  100% {
    transform: rotate(-300deg) scale(0.6);
  }
}
@keyframes rotate4 {
  100% {
    transform: rotate(300deg) scale(0.95);
  }
}

.index {
  width: 70%;
  height: 859px;
  margin: 10px auto;
  .selfdes {
    height: 120px;
    border-bottom: 1px linen solid;
    p {
      font-size: 15px;
      margin: 10px auto;
    }
  }
  main {
    height: 700px;
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    .left {
      width: 40%;
      li {
         box-shadow: 0 0 0 0.3px black inset;
        cursor: pointer;
        border: 0.1px solid black;
        width: 90%;
        height: 150px;
        list-style: none;
        margin: 10% auto;
        .title {
          font-size: 25px;
          margin: 40px 20px 0;
        }
        .des {
          margin: auto 20px;
          font-size: 15px;
        }
       
      }
    }
    .right {
      width: 60%;
      position: relative;
      .ring {
        position: relative;
        width: 80%;
        height: 600px;
        margin: 50px auto;
        .firstring {
          display: block;
          box-sizing: border-box;
          width: 540px;
          height: 90%;
          border: 5px dotted #12485c;
          transform: scale(0.85);
          border-radius: 50%;
          animation: rotate1 30s 0s infinite;
          animation-timing-function: linear;
        }
        .secondring {
          position: absolute;
          left: 35px;
          top: 35px;
          animation: rotate2 40s 0s infinite;
          animation-timing-function: linear;
        }
        .thirdring {
          position: absolute;
          left: 30px;
          top: 30px;
          display: block;
          box-sizing: border-box;
          width: 480px;
          height: 80%;
          border: 5px dotted #12485c;
          transform: scale(0.6);
          border-radius: 50%;
          animation: rotate3 4s 0s infinite;
          animation-timing-function: linear;
        }
        .forthring {
          transform: scale(0.95);
          position: absolute;
          left: 35px;
          top: 35px;
          animation: rotate4 20s 0s infinite;
          animation-timing-function: linear;
        }
      }
      .showpage {
        position: relative;
        margin: -650px auto 0;
        width: 80%;
        height: 600px;
        .page {
          box-sizing: border-box;
          
          width: 150px;
          height: 150px;
          background: #2a3340;
          text-align: center;
          line-height: 140px;
          border: 10px solid white;
          border-radius: 50%;
          color: white;
        }
        .page-blog {
          position: absolute;
          left: 190px;
          top: 10px;
        }
        .page-about {
          position: absolute;
          left: 10px;
          top: 260px;
        }
        .page-more {
          position: absolute;
          left: 360px;
          top: 260px;
        }
        .showpage-content{
          color: cornflowerblue;
          font-size: 14px;
          position: absolute;
          left: 220px;
          top: 270px;
        }
      }
    }
  }
}
</style>