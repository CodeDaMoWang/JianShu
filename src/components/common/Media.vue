<template>



  <ul class="list-unstyled">
    <b-media tag="li" class="my-4" right-align>
      <b-img slot="aside" src="//upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" width="155px" height="100px"/>
      <h5 class="mt-0 mb-1">20几岁程序员晒出工资条，称养不活自己？网友：比我赚的多！</h5>
      职业不分高低，但有时候一个人的收入却代表了这个人的能力。我们上大学为了什么，为了一份体面的工作，我们工作为了什么，为了更高的收入，过上快乐幸福的...
    </b-media>
    <b-media tag="li" class="my-4" right-align>
      <b-img slot="aside" src="https://upload-images.jianshu.io/upload_images/11438883-bfb6115d6d1f44e6?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" width="155px" height="100px" />
      <h5 class="mt-0 mb-1">8个无敌好用国产APP推荐：（办公类、学习类、生活类）</h5>
      说起国产APP，大家肯定对QQ、微信、支付宝赞不绝口，但是除了这些大众的国产APP以外，还有很多无敌好用的也值得我们使用，今天就给大家分享8个，...
    </b-media>
    <b-media tag="li" class="my-4" right-align>
      <b-img slot="aside" src="https://upload-images.jianshu.io/upload_images/1780541-bd1a9f2eea1afd53.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" width="155px" height="100px"/>
      <h5 class="mt-0 mb-1">正版图书、期刊杂志免费读，感觉这波赚了100000块！</h5>
      平时很多小伙伴有着强烈的学习欲望，喜欢看一些图书、期刊杂志什么的（注意不是网络小说）。但却又没有时间去图书馆或者书店借书or买书，除此之外经常买...
    </b-media>
    <b-media tag="li" class="my-4" right-align>
      <b-img slot="aside" src="https://upload-images.jianshu.io/upload_images/13751623-a247fba1e40fc420.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" width="155px" height="100px"/>
      <h5 class="mt-0 mb-1">小程序反编译，获取源码</h5>
      学习小程序，最快捷的方法就是多看看别人的代码，借鉴别人，但是很多时候，我们看到一个很好的小程序，想看看别人怎么写的，无奈获取不到源码。 但是，其...
    </b-media>
    <b-media tag="li" class="my-4" right-align>
      <b-img slot="aside"  src="//upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" width="155px" height="100px"/>
      <h5 class="mt-0 mb-1">一名IT经理是如何把项目带崩的。。。</h5>
      一名IT经理是如何把项目带崩的。。。 我是一名项目经理，在过去的四个月里，我把一个项目带崩了（上线后频出问题，用户无法使用）。在最近的几天，我每...
    </b-media>
    <b-media tag="li" class="my-4" right-align>
      <b-img slot="aside" src="//upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" width="155px" height="100px" />
      <h5 class="mt-0 mb-1">Spring Boot（5）一个极简且完整的后台框架</h5>
      一个完整的极简后台框架，方便做小项目的时候可以快速开发。 这里面多贴图片和代码，做个参考吧，代码可以下载下来自己看看，里面这套后台模板不错，喜欢...
    </b-media>


    <!--<b-media v-for="media in mediaList" :key="media.id"  class="medd" >-->
      <!--<b-img  :src="media.mediaUrl" class="meddimg" />-->
      <!--<h5 class="titlee">{{media.mediaTitle}}</h5>-->
      <!--<a class="zheng">{{media.mediaText}}</a>-->
    <!--</b-media>-->
  </ul>


</template>

<script>
    export default {
        // data(){
        //   return{
        //     mediaList:[
        //       {
        //         "id":1,
        //         "mediaUrl":"https://upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        //         "mediaTitle":"Spring Boot（5）一个极简且完整的后台框架",
        //         "mediaText":"一个完整的极简后台框架，方便做小项目的时候可以快速开发。 这里面多贴图片和代码，做个参考吧，代码可以下载下来自己看看，里面这套后台模板不错，喜欢..."
        //       },
        //       {
        //         "id":2,
        //         "mediaUrl":"//upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        //         "mediaTitle":"一名IT经理是如何把项目带崩的。。。",
        //         "mediaText":" 一名IT经理是如何把项目带崩的。。。 我是一名项目经理，在过去的四个月里，我把一个项目带崩了（上线后频出问题，用户无法使用）。在最近的几天，我每..."
        //       },
        //       {
        //         "id":3,
        //         "mediaUrl":"https://upload-images.jianshu.io/upload_images/13751623-a247fba1e40fc420.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        //         "mediaTitle":"小程序反编译，获取源码",
        //         "mediaText":"学习小程序，最快捷的方法就是多看看别人的代码，借鉴别人，但是很多时候，我们看到一个很好的小程序，想看看别人怎么写的，无奈获取不到源码。 但是，其..."
        //       },
        //       {
        //         "id":4,
        //         "mediaUrl":"https://upload-images.jianshu.io/upload_images/1780541-bd1a9f2eea1afd53.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        //         "mediaTitle":"正版图书、期刊杂志免费读，感觉这波赚了100000块！",
        //         "mediaText":" 平时很多小伙伴有着强烈的学习欲望，喜欢看一些图书、期刊杂志什么的（注意不是网络小说）。但却又没有时间去图书馆或者书店借书or买书，除此之外经常买..."
        //       },
        //       {
        //         "id":5,
        //         "mediaUrl":"https://upload-images.jianshu.io/upload_images/11438883-bfb6115d6d1f44e6?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        //         "mediaTitle":"8个无敌好用国产APP推荐：（办公类、学习类、生活类）",
        //         "mediaText":"  说起国产APP，大家肯定对QQ、微信、支付宝赞不绝口，但是除了这些大众的国产APP以外，还有很多无敌好用的也值得我们使用，今天就给大家分享8个，..."
        //       },
        //       {
        //         "id":6,
        //         "mediaUrl":"//upload-images.jianshu.io/upload_images/13133049-c6cd7532c0adeb9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
        //         "mediaTitle":"20几岁程序员晒出工资条，称养不活自己？网友：比我赚的多！",
        //         "mediaText":" 职业不分高低，但有时候一个人的收入却代表了这个人的能力。我们上大学为了什么，为了一份体面的工作，我们工作为了什么，为了更高的收入，过上快乐幸福的..."
        //       },
        //     ]
        //   }
        // }
    }
</script>

<style scoped>

  /*.lili{*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*list-style: none;*/
  /*}*/

  /*.medd{*/
    /*margin-right: auto;*/

  /*}*/


  /*.meddimg{*/

    /*width: 100%;*/
    /*height: 100%;*/
    /*border-radius: 4px;*/
    /*border: 1px solid #f0f0f0;*/
  /*}*/



  /*.titlee{*/
    /*margin: -7px 0 4px;*/
    /*display: inherit;*/
    /*font-size: 18px;*/
    /*font-weight: 700;*/
    /*line-height: 1.5;*/
  /*}*/

  /*.zheng{*/
    /*margin: 0 0 8px;*/
    /*font-size: 13px;*/
    /*line-height: 24px;*/
    /*color: #999;*/
  /*}*/

</style>
