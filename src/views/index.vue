<template>
  <div id="index">
    <div class="selfdes">
      <h1>Hello!I'm dreamer</h1>
      <p>
        欢迎来到我的博客！这个博客是由Vue作为框架进行组件化开发完成的一个个人博客，功能很简单，但我会慢慢实现
        一些有趣的动画效果及好看的样式。
      </p>
    </div>
    <article>
      <img src="../../public/[NIK]69983027.jpg" alt="" />
    </article>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#index {
  width: 70%;
  margin: 10px auto;
  .selfdes {
    height: 150px;
    border-bottom: 1px linen solid;
    p {
      font-size: 15px;
      margin: 10px auto;
    }
  }
  article {
    width: 90%;
    margin: 20px auto;
    img {
      width: 100%;
      height: 90%;
    }
  }
}
</style>