<template>


  <b-row>
    <b-col cols="4" v-for="label in labelList" :key="label.id">
      <div class="collection-wrap">
        <router-link :to="'/c/'+label.id">
          <img :src="label.labelUrl" class="avatr-collection"/>
          <h5 class="name">{{label.labelName}}</h5>

        </router-link>
        <span>{{label.summary}}</span>
        <p>
          <b-button variant="success">关注</b-button>
        </p>
        <p>
          <span>{{label.articleCount}}篇文章</span>
          <span>{{label.fans}}个关注</span>
        </p>
      </div>

    </b-col>
  </b-row>


</template>

<script>
    export default {
      data(){
        return{
          labelList:[
            {
              "id":1,
              "labelName":"读书",
              "labelUrl":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "summary":"投稿须知: \n" +
              "读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。",
              "articleCount":4532,
              "fans":732
            },
            {
              "id":2,
              "labelName":"故事",
              "labelUrl":"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "summary":"故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故事，这里记录你的每个故事。",
              "articleCount":247,
              "fans":645
            },
            {
              "id":3,
              "labelName":"摄影",
              "labelUrl":"https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "summary":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总",
              "articleCount":582,
              "fans":709
            },
            {
              "id":4,
              "labelName":"旅行",
              "labelUrl":"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "summary":"邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。 ",
              "articleCount":223,
              "fans":647
            },
            {
              "id":5,
              "labelName":"科普",
              "labelUrl":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "summary":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章",
              "articleCount":4023,
              "fans":7247
            },
            {
              "id":6,
              "labelName":"简书交友",
              "labelUrl":"https://upload.jianshu.io/collections/images/509834/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170810142951.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
              "summary":"据说在简书认真写作的人都可以在这里找到TA的灵魂伴侣。",
              "articleCount":943,
              "fans":757
            },

          ]
        }
      }
    }
</script>

<style scoped>

  .collection-wrap{
    /*position: relative;*/
    /*min-height: 1px;*/
    /*padding-left: 15px;*/
    /*padding-right: 15px;*/
    /*box-sizing: border-box;*/
    text-align: center;
    color: #333;
    /*width: 33.33333%;*/
    height: 320px;
    margin-top: 80px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    transition: .2s ease;
    -webkit-transition: .2s ease;
    -moz-transition: .2s ease;
    -o-transition: .2s ease;
    -ms-transition: .2s ease;
  }

  .avatr-collection{
    width: 80px;
    height: 80px;
    margin: -40px 0 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #fff;
  }

  .name{
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
