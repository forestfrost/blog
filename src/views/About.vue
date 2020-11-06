<template>
  <div id="about">
    <div class="selfdes">
      <h1>Hello!I'm dreamer</h1>
      <p>
        欢迎来到我的博客！这个博客是由Vue作为框架进行组件化开发完成的一个个人博客，功能很简单，但我会慢慢实现
        一些有趣的动画效果及好看的样式。
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#about {
  width: 70%;
  height: 859px;
  margin: 10px auto;
  .selfdes {
    height: 150px;
    border-bottom: 1px linen solid;
    p {
      font-size: 15px;
      margin: 10px auto;
    }
  }
}
</style>