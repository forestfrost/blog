<template>
  <div id="blogitem">
    <div class="left">
      <img
        src="../../public/u=2976060258,1158565594&fm=26&gp=0.jpg"
        alt="这是图片的位置"
      />
      <p>2020.11.03</p>
    </div>
    <div class="right">
      <p class="title" @click="clickHandle(testId)"><b>1024：程序员，你的身体还好吗？</b></p>
      <p class="des">然而反观现实中程序员的工作与生活，这一天的意义真的达到了吗？从几何时，程
          序员成了加班、996 的代名词，从以前业务做不完偶尔加班变成了现在的常态，不得不说一句俗
          话：这是时代的进步还是倒退？1024 这个本该关注程序员权益的问题，非但没带来任何进步，反
          而又像双十一成了电商推销电子产品的噱头。试问，有多少人真正关心过程序员的身心健康？鉴
          于此，本文将从生理和心理两方面来分析程序员职业风险，让更多人了解程序员所面临的健康问题
          。</p>
      <p class="tag"><span>#前端</span><span>#js</span><span>#vue</span></p>
      <p class="read" @click="clickHandle(testId)">阅读原文▽</p>
    </div>
  </div>
</template>
<script>
export default {
data(){
  return{
    testId:1,
  }
},
  methods:{
    clickHandle(id){
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script> 
<style lang="less" scoped>
@media screen and (max-width: 599px){
  #blogitem{
    width: 100%;
    margin: 50px auto;
    .left{
      img{
        width: 80%;
        height: 80%;
      }
      p{
        text-align: center;
      }
    }
    .right{
      .title{
        cursor: pointer;
        margin: 5px auto;
      }
      .tag{
        margin: 10px auto;
        display: flex;
        span{
          display: block;
          width: 50px;
          text-align: center;
          color: blue; 
        }
      }
      .read{
        cursor: pointer;
        color: orange;
      }
    }
  }
}
@media screen and (min-width: 600px){
  #blogitem {
  margin: 20px auto;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px linen solid;
  .left {
    width: 40%;
    img {
      width: 120px;
      height: 150px;
      margin: 10px 150px;
    }
    p {
      text-align: center;
    }
  }
  .right {
    width: 60%;
    .title {
      font-size: 25px;
      height: 80px;
      line-height: 40px;
      &:hover{
          cursor: pointer;
          color: blue;
          transform: translateX(20px);
          transition: 0.8s;
      }
    }
    .des {
      overflow: hidden;
      height: 200px;
    }
    .tag {
        display: flex;
      span {
        display: block;
        width: 70px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        color: #6B7FE7;
        cursor: pointer;
      }
    }
    .read{
        display: block;
        width: 100px;
        margin: 5px 0 0 0;
        font-size: 18px;
        color: blue;
        cursor: pointer;
        &:hover{
            transition: 0.5s;
            transform: translateY(10px);
        }
    }
  }
}
  
}

</style>
