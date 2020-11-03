<template>
  <div id="blogs">
    <div class="selfdes">
      <h1>Hello!I'm dreamer</h1>
      <p>
        欢迎来到我的博客！这个博客是由Vue作为框架进行组件化开发完成的一个个人博客，功能很简单，但我会慢慢实现
        一些有趣的动画效果及好看的样式。
      </p>
    </div>
    <blogItem v-for="x in [1, 2, 3, 4]" :key="x.index"></blogItem>
    <div class="foot"><p>Older blogs>></p></div>
  </div>
</template>
<script>
import blogItem from "@/components/blogItem";
export default {
  components: {
    blogItem,
  },
};
</script>
<style lang="less" scoped>
#blogs {
  width: 55%;
  margin: 10px auto;
  .selfdes {
    height: 150px;
    border-bottom: 1px linen solid;
    p {
      font-size: 15px;
      margin: 10px auto;
    }
  }
  .foot {
      display: flex;
      justify-content: flex-end;
    p {
      font-size: 15px;
      display: block;
      width: 50%;
      height: 40px;
      border-radius: 5px;
      box-shadow: 0 0 0 0.3px black inset;
      line-height: 40px;
      text-align: right;
      color: blue;
      cursor: pointer;
      &:hover {
        transition: 0.5s;
        font-size: 18px;
        box-shadow: 0 0 0 0.7px blue inset;
      }
    }
  }
}
</style>