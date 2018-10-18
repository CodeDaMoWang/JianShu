<template>
  <!--<el-transfer v-model="value1" :data="data"></el-transfer>-->

  <!--<div class="aside">-->
    <!--<a data-toggle="dropdown" class="change-type">全部关注<i class="iconfont ic-filter"></i></a>-->
    <!--<ul class="dropdown-menu arrow-top">-->
    <!--<li><a>全部关注</a></li> <li><a>只看作者</a></li> <li><a>只看专题</a></li> <li><a>只看文集</a></li> <li><a>只看推送更新</a></li></ul>-->
    <!--<a href="#/recommendation" class="add-people"><i class="iconfont ic-addpeople"></i> <span>添加关注</span></a>-->
    <!--<ul class="js-subscription-list"><li class="router-link-exact-active active"><a href="#/timeline" class="wrap"><div class="avatar">-->
    <!--<img src="//cdn2.jianshu.io/assets/web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png" style="border: none;"></div>-->
    <!--<div class="name">简友圈</div></a></li> <li class=""><a href="#/subscriptions/3/collection" class="wrap"><div class="avatar-collection">-->
    <!--<img src="//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">-->
    <!--</div> <div class="name">程序员</div> <span class="count">2542</span></a></li><li class=""><a href="#/subscriptions/13250/collection" class="wrap">-->
    <!--<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/32/flying-machine-leonardo-da-vinci.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div> <div class="name">工具癖</div> <span class="count">24</span></a></li><li class=""><a href="#/subscriptions/14/collection" class="wrap"><div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">-->
    <!--</div> <div class="name">@IT·互联网</div> <span class="count">1131</span></a></li><li class="">-->
    <!--<a href="#/subscriptions/3397305/collection" class="wrap"><div class="avatar-collection">-->
    <!--<img src="//upload.jianshu.io/collections/images/288348/6608733_091515549000_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">-->
    <!--</div> <div class="name">大学生活</div> <span class="count">2775</span></a></li><li class="">-->
    <!--<a href="#/subscriptions/20902/collection" class="wrap"><div class="avatar-collection">-->
    <!--<img src="//upload.jianshu.io/collections/images/65/%E4%BA%8C%E6%AC%A1%E5%85%83.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">-->
    <!--</div> <div class="name">二次元</div> <span class="count">32</span></a></li><li class=""><a href="#/subscriptions/24399/collection" class="wrap">-->
    <!--<div class="avatar-collection">-->
    <!--<img src="//upload.jianshu.io/collections/images/79/e7cd7b899e510fb34d25e3cada33c895d1430caa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div>-->
    <!--<div class="name">电竞·游戏</div> <span class="count">273</span></a></li><li class=""><a href="#/subscriptions/14534/collection" class="wrap">-->
    <!--<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/53/feng-shui-19-04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div>-->
    <!--<div class="name">心理</div> <span class="count">68</span></a></li><li class=""><a href="#/subscriptions/3222123/collection" class="wrap"><div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/282878/80631273609072812.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div>-->
    <!--<div class="name">影视后期</div> &lt;!&ndash;&ndash;&gt;</a></li><li class=""><a href="#/subscriptions/10772244/collection" class="wrap"><div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/584692/crop1513771460098.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div> <div class="name">后期教程</div> &lt;!&ndash;&ndash;&gt;</a></li>-->
    <!--<li class=""><a href="#/subscriptions/1048351/collection" class="wrap"><div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/225783/android.graphics.Bitmap_22d61ec5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div> <div class="name">实用性技能</div> &lt;!&ndash;&ndash;&gt;</a></li><li class=""><a href="#/subscriptions/7109049/collection" class="wrap"><div class="avatar-collection">-->
    <!--<img src="//upload.jianshu.io/collections/images/493683/%E7%A0%94%E7%A9%B6%E6%89%80.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div> <div class="name">互联网研究所</div> &lt;!&ndash;&ndash;&gt;</a></li><li class=""><a href="#/subscriptions/4322527/user" class="wrap"><div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/4122857/83ac8e378503.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div>-->
    <!--<div class="name">Windows之家</div> &lt;!&ndash;&ndash;&gt;</a></li><li class=""><a href="#/subscriptions/61035/collection" class="wrap"><div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/944/QQ20140717-1.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div> <div class="name">设计学习</div> &lt;!&ndash;&ndash;&gt;</a></li><li class=""><a href="#/subscriptions/595951/user" class="wrap"><div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/671333/a7de713a5e33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"></div> <div class="name">Volcanoo</div>-->
    <!--&lt;!&ndash;&ndash;&gt;</a></li></ul> &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;-->
    <!--</div>-->



  <ul class="list-unstyled">

    <b-media tag="li"class="my-4">
      <b-img slot="aside"   src="https://cdn2.jianshu.io/assets/web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png"  width="50px" height="50px"/>

      <h5>简友圈</h5>
    </b-media>

    <b-media tag="li"class="my-4">
      <b-img slot="aside"  src="https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"  width="50px" height="50px"/>

      <h5>程序员</h5>
    </b-media>

    <b-media tag="li"class="my-4">
      <b-img slot="aside"   src="https://upload.jianshu.io/collections/images/32/flying-machine-leonardo-da-vinci.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"  width="50px" height="50px"/>

      <h5>工具癖</h5>
    </b-media>

    <b-media tag="li"class="my-4">
      <b-img slot="aside"  src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"  width="50px" height="50px"/>

      <h5>@IT·互联网</h5>
    </b-media>


    <b-media tag="li"class="my-4">
      <b-img slot="aside"  src="https://upload.jianshu.io/collections/images/288348/6608733_091515549000_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"  width="50px" height="50px"/>

      <h5>大学生活</h5>
    </b-media>

    <b-media tag="li"class="my-4">
      <b-img slot="aside"  src="https://upload.jianshu.io/collections/images/65/%E4%BA%8C%E6%AC%A1%E5%85%83.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"  width="50px" height="50px"/>

      <h5>二次元</h5>
    </b-media>


    <b-media tag="li"class="my-4">
      <b-img slot="aside"  src="https://upload.jianshu.io/collections/images/79/e7cd7b899e510fb34d25e3cada33c895d1430caa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"  width="50px" height="50px"/>

      <h5>电竞游戏</h5>
    </b-media>


  </ul>



</template>

<script>
  export default {
  name:"List"
  };
</script>

<style scoped>

</style>
