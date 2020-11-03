<template>
  <div id="footer">
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
            <li>@武理第一肠粉</li>
        </ul>
      </div>
    </div>
    <div class="bottom"><p>Copyright © 2020 梦游 Built with Docusaurus.</p></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#footer {
  width: 100%;
  background: #303846;
  color: white;
  .top {
   
    width: 60%;
    margin: 50px auto 0px;
    h3{
        margin: 10px auto 0px;
    }
    ul{
        list-style: none;
        li{
            cursor: pointer;
            height: 20px;
            margin: 5px auto;
        }
    }
    display: flex;
    justify-content: center;
    .left{
        width: 50%;
    }
    .right{
        width: 50%;
    }
  }
  .bottom {
      height: 50px;
    text-align: center;
   p{
       line-height: 30px;
   }
  }
}
</style>
