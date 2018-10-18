<template>
  <!--<div>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light">-->
        <!--<b-img src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"width="40px"></b-img>-->
        <!--读书-->
      <!--</b-button>-->
    <!--</router-link>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light" >-->
        <!--<b-img src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"width="40px"></b-img>-->
        <!--故事-->
      <!--</b-button>-->
    <!--</router-link>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light" >-->
        <!--<b-img src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"width="40px"></b-img>-->
        <!--手绘-->
      <!--</b-button>-->
    <!--</router-link>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light">-->
        <!--<b-img src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"width="40px"></b-img>-->
        <!--摄影-->
      <!--</b-button>-->
    <!--</router-link>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light">-->
        <!--<b-img src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"width="40px"></b-img>-->
        <!--@IT-->
      <!--</b-button>-->
    <!--</router-link>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light">-->
        <!--<b-img src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" width="40px"></b-img>-->
        <!--自然科普-->
      <!--</b-button>-->
    <!--</router-link>-->
    <!--<router-link to="">-->
      <!--<b-button class="badge-light">-->
        <!--<b-img src="//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"width="40px"></b-img>-->
        <!--旅行在路上-->
      <!--</b-button>-->
    <!--</router-link>-->


<div class="recommend-collection">
    <a class="collection"v-for="label in labelList" :key="label.id">
      <router-link :to="'/c/'+label.id">
        <img :src="label.labelUrl" class="small-img">
        <div class="name-more">{{label.labelName}}</div>
      </router-link>

    </a>


    <router-link to="/collections">

      <span class="more">
        更多热门专题
      </span>

    </router-link>
</div>
  <!--</div>-->




</template>

<script>
    export default {
        data() {
          return {
            labelList: [
              {
                "id": 1,
                "labelName": "读书",
                "labelUrl":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },
              {
                "id": 2,
                "labelName": "故事",
                "labelUrl":"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },
              {
                "id": 3,
                "labelName": "手绘",
                "labelUrl":"https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },
              {
                "id": 4,
                "labelName": "摄影",
                "labelUrl":"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },
              {
                "id": 5,
                "labelName": "@IT",
                "labelUrl":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },
              {
                "id": 6,
                "labelName": "自然科普",
                "labelUrl":"https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },
              {
                "id": 7,
                "labelName": "旅行在路上",
                "labelUrl":"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"

              },


            ]
          }
        }
    }
</script>

<style scoped>

  .recommend-collection{
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .collection{
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }

  .small-img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }

  .name-more{
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
    color: #333;
  }

  .more{
    display: inline-block;
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
  }

</style>
