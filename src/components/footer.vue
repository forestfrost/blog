<template>
  <div id="footer" ref="footer">
    <div class="top">
      <div class="left">
        <h3>Social</h3>
        <ul>
          <li>博客</li>
          <li>bilibili</li>
        </ul>
      </div>
      <div class="tight">
        <h3>友情链接</h3>
        <ul>
          <a
            href="https://me.csdn.net/weixin_45900618?spm=1018.2118.3001.5148"
            target="_blank"
            >@武理第一肠粉</a
          >
        </ul>
      </div>
    </div>
    <div class="bottom">
      <p>Copyright © 2020 梦游 Built with Docusaurus.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  },
  mounted() {
   
  },
};
</script>
<style lang="less" scoped>
#footer {
 
  position: absolute;
  width: 100%;
  height: 150px;
  background: #303846;
  color: white;
  .top {
    width: 60%;
    margin: 0px auto;
    h3 {
      margin: 10px auto 0px;
    }
    ul {
      list-style: none;
      li {
        cursor: pointer;
        height: 20px;
        margin: 5px auto;
      }
      a {
        text-decoration: none;
        color: white;
        height: 20px;
        margin: 5px auto;
      }
    }
    display: flex;
    justify-content: center;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }
  .bottom {
    height: 60px;
    text-align: center;
    p {
      line-height: 30px;
    }
  }
}
</style>
