<template>
  <div>

    <b-row>
      <b-col cols="8">


        <b-media tag="li"class="my-4">
          <b-img slot="aside"   class="avatar" :src="label.labelUrl"  />
          <h5 class="title">{{label.labelName}}</h5>
          <span class="info">收藏了{{label.articleCount}}篇文章,{{label.fans}}关注</span>
        </b-media>


        <v-text></v-text>


      </b-col>

      <b-col cols="4">


        <div class="discription">
          <p class="grey"> 专题公告</p>
          <p>
            {{label.description}}
          </p>

        </div>

        <p class="grey">管理员</p>
        <div class="list" v-for="fans in label.fansList" :key="label.fansList.authorId">
          <div>
            <a href="#" class="admin">

              <b-img slot="aside"  rounded = "circle" :src="fans.avatar"  width="60" height="60"/>
              <a class="grey1">{{fans.nickName}}</a>

            </a>
          </div>
        </div>



      </b-col>
    </b-row>
  </div>

</template>

<script>

  import vText from '../common/Text';

  export default {



    components:{
      vText
    },

    data() {
      return {
        id: this.$route.params.id,
        label: {},
        articleList: [],
        fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "labelName": "读书",
          "labelUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 1601,
          "description":"邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。 \n" +
          "1.投稿请查看https://www.jianshu.com/p/946325a846b1了解相关内容，鼓励作者优先投到自己所写内容所属的地区/大洲子专题； \n" +
          "2.收录字数不低于1200字，图片不少于5张，字数大于5000字请以连载形式发布，内容方向只收录优质攻略及旅行相关富有故事或极具特色的内容，拒收单纯游记或毫无主次的流水账，拒收含有水印推广信息的投稿； \n" +
          "3.以诗歌散文随笔摄影美食为主体的内容拒收，转投其他对应专题； \n" +
          "4.活动...",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"测试文章",
              "summary":"测试文章测试文章测试文章测试文章测试文章...",
              "thumbnail":"1.png",
              "authorId":2,
              "nickname":"作者",
              "comments":1234,
              "likes":12
            }
          ],
          "fansList":[
            {
              "authorId":1,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/3356997/7a585e25-0478-4a50-bdaa-30da0697506b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "nickName":"小灰灰"
            },
            {
              "authorId":2,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/6775890/8bc5a664-f3c5-4918-966a-2e1541f30272.jpg",
              "nickName":"白衣艰辛"
            },
            {
              "authorId":3,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/2634547/d37a2c8b-ee3c-4a87-bc41-be0f7a49381f.jpg",
              "nickName":"白鲸"
            },
            {
              "authorId":4,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/2304977/b038e73f-969b-4531-b156-c7a2c4db783b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "nickName":"健字号"
            },
            {
              "authorId":5,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/5303076/1d51b52b-8bb7-4ae5-a5bc-8bf85723576b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "nickName":"天雪"
            },
            {
              "authorId":6,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/7016530/62c81637-e6b0-4f55-b9d5-e7f206f2b19e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "nickName":"卢本伟"
            },
          ]
        };
        this.label = t;
      } else {
        this.label = {};
      }
    },
    computed: function () {
      return this.label;
    }
  }
</script>

<style scoped>
.avatar{
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 10%;
}
.title{

  margin-top: 20px;
  font-size: 21px;
  font-weight: 700;

}

  .info{


    font-size: 14px;
    color: #969696;

  }

  .grey{

    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }

  .grey1{
    color: #969696;
  }


</style>
