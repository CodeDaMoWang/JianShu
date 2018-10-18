<template>
  <div class="col-xs-24 col-sm-16 main">

    <b-media v-for="text in textList" :key="text.id"  class="medd" right-align >
      <b-img slot="aside" :src="text.textUrl" class="meddimg"  />
      <h5 class="titlee">{{text.textTitle}}</h5>
      <a class="zheng">{{text.textContent}}</a>
    </b-media>
  </div>

</template>

<script>
    export default {
        data(){
          return{
            textList:[
              {

                 "id":1,
                 "textUrl":"https://upload-images.jianshu.io/upload_images/8620892-07b54e6243ee8495.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                 "textTitle":"大二，成为旅行体验师，靠写作赚取人生第一桶金",
                 "textContent":"其实，对于我们来说，真正喜欢上旅行也就不到一年的时间。要是放在一年以前，问我有什么爱好，我脑海中连旅行这个词语都没有出现过，而现在，你问我有什么...",

              },
              {

                "id":2,
                "textUrl":"https://upload-images.jianshu.io/upload_images/6208517-ac18de1a539a9fa4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "textTitle":"酒泉将行：想起贺敬之的诗",
                "textContent":"———西去列车的窗口 前两天，当我收到中国媒体旅游记者联盟主席了了女士发来的邀请———行走中国/媒体旅游记者联盟/酒泉行，我就兴奋不已！ 因为走...",

              },
              {

                "id":3,
                "textUrl":"https://upload-images.jianshu.io/upload_images/1994468-5a6a9c1f8692cd8e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "textTitle":"相机组 | 小洲，愿你清纯如初见……",
                "textContent":"一直以来，小洲，都保持着一种单纯清澈的气质，那种让人一眼就爱上的感觉，多少带着一点文艺和理想化。而近两年，小洲却变了许多。再一次来到新滘，感觉小...",

              },
              {

                "id":4,
                "textUrl":"https://upload-images.jianshu.io/upload_images/4952818-bb5a24ea7cad5c7a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "textTitle":"漂亮小姐姐一个人游泸沽湖，网友：漂亮的女人都抽烟？",
                "textContent":"说说这次旅行 这趟旅行的开端，其实很简单也很狗血，就是遭遇一个渣男之后的三观矫正之旅。从小就爱旅行就爱离家出走，走过大大小小许多城市，却唯独把云...",

              },


            ]
          }
        }
    }
</script>

<style scoped>

  .medd{
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;


  }

  .main{
    padding-right: 0;
  }

  .meddimg{
    width: 100px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }

  .zheng{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }

  /*.col-sm-16 {*/
    /*width: 66.66667%;*/
  /*}*/


</style>
