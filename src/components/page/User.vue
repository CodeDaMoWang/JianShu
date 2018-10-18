<template>
  <div>
    <br>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="8">
          <b-media>
            <b-img rounded="circle" slot="aside"  width="65" height="65" src="../../static/img/101.jpg" alt="placeholder" />
            <h5 class="mt-0">Media Title</h5>
            <p>关注<i>111</i>，粉丝<i>235</i>，文章<i>23</i>，字数<i>23453</i>， 收获喜欢<i>235</i></p>
          </b-media>
          <br>
          <div>
            <b-nav tabs>
              <b-nav-item active>文章</b-nav-item>
              <b-nav-item>动态</b-nav-item>
              <b-nav-item>最新评论</b-nav-item>
              <b-nav-item>热门</b-nav-item>
            </b-nav>
          </div>
          <br>
          <div>
            <b-media>
              <b-img rounded="circle" slot="aside" width="26" height="26" src="../../static/img/one.jpg" alt="placeholder" />
              <p class="mt-sm-0"><span>不知所措的STRANGER</span><i>关注了作者</i> <i>&dot;</i> <i>10.8 11:15</i></p>
            </b-media>
            <b-card>
              <b-media>
                <b-img rounded="circle" slot="aside" width="46" height="46" src="../../static/img/two.jpg" alt="placeholder" />
                <!--<span style="float: right;margin-top: 12px">111</span>-->
                <div style="float: right;margin-top: 12px">
                  <b-button>已关注</b-button>
                </div>
                <h6 class="mt-sm-0">Media Title</h6>
                <p>关注<i>111</i>，粉丝<i>235</i>，文章<i>23</i>，字数<i>23453</i>， 收获喜欢<i>235</i></p>
              </b-media>
              <hr>
              <i style="font-size: 10px">欢迎关注微信公众号“恒宇少年”，专注技术分享交流，现任山东三米技术负责人。 曾任山东讯美网络科技有限公</i>
            </b-card>
            <br>
          </div>

          <div>
            <b-media>
              <b-img rounded="circle" slot="aside" width="26" height="26" src="../../static/img/three.jpg" alt="placeholder" />
              <p class="mt-sm-0"><span>不知所措的STRANGER</span><i>关注了作者</i> <i>&dot;</i> <i>10.8 11:15</i></p>
            </b-media>
            <b-card>
              <b-media>
                <b-img rounded="circle" slot="aside" width="46" height="46" src="../../static/img/four.jpg" alt="placeholder" />
                <div style="float: right;margin-top: 12px">
                  <b-button>已关注</b-button>
                </div>
                <h6 class="mt-sm-0">Media Title</h6>
                <p>关注<i>111</i>，粉丝<i>235</i>，文章<i>23</i>，字数<i>23453</i>， 收获喜欢<i>235</i></p>
              </b-media>
              <hr>
              <i style="font-size: 10px">欢迎关注微信公众号“恒宇少年”，专注技术分享交流，现任山东三米技术负责人。 曾任山东讯美网络科技有限公</i>
            </b-card>
            <br>
          </div>

          <div>
            <b-media>
              <b-img rounded="circle" slot="aside" width="26" height="26" src="../../static/img/two.jpg" alt="placeholder" />
              <p class="mt-sm-0"><span>不知所措的STRANGER</span><i>关注了作者</i> <i>&dot;</i> <i>10.8 11:15</i></p>
            </b-media>
            <b-card>
              <b-media>
                <b-img rounded="circle" slot="aside" width="46" height="46" src="../../static/img/two.jpg" alt="placeholder" />
                <div style="float: right;margin-top: 12px">
                  <b-button>已关注</b-button>
                </div>
                <h6 class="mt-sm-0">Media Title</h6>
                <p>关注<i>111</i>，粉丝<i>235</i>，文章<i>23</i>，字数<i>23453</i>， 收获喜欢<i>235</i></p>
              </b-media>
              <hr>
              <i style="font-size: 10px">欢迎关注微信公众号“恒宇少年”，专注技术分享交流，现任山东三米技术负责人。 曾任山东讯美网络科技有限公</i>
            </b-card>
            <br>
          </div>

          <div>
            <b-media>
              <b-img rounded="circle" slot="aside" width="26" height="26" src="../../static/img/two.jpg" alt="placeholder" />
              <p class="mt-sm-0"><span>不知所措的STRANGER</span><i>关注了作者</i> <i>&dot;</i> <i>10.8 11:15</i></p>
            </b-media>
            <b-card>
              <b-media>
                <b-img rounded="circle" slot="aside" width="46" height="46" src="../../static/img/two.jpg" alt="placeholder" />
                <div style="float: right;margin-top: 12px">
                  <b-button>已关注</b-button>
                </div>
                <h6 class="mt-sm-0">Media Title</h6>
                <p>关注<i>111</i>，粉丝<i>235</i>，文章<i>23</i>，字数<i>23453</i>， 收获喜欢<i>235</i></p>
              </b-media>
              <hr>
              <i style="font-size: 10px">欢迎关注微信公众号“恒宇少年”，专注技术分享交流，现任山东三米技术负责人。 曾任山东讯美网络科技有限公</i>
            </b-card>
            <br>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="clearfix">
            <span>个人介绍</span>
            <router-link to="">
              <span style="float: right;padding-left:20px;background: left center url('../../../static/img/mm.png') no-repeat;color: black">  编辑</span>
            </router-link>
            <p>在校程序员，，正在努力中</p>
          </div>
          <hr>
          <div>
            <p style="padding-left: 50px;background: left center url('../../../static/img/xx.png') no-repeat">他关注的专题/文集/连载</p>
            <p style="padding-left: 50px;background: left center url('../../../static/img/xhh.png') no-repeat">他喜欢的文章</p>
          </div>
          <hr>
          <div>
            <span>他创建的专题</span>
            <ul class="list-unstyled">
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
            </ul>
          </div>
          <hr>
          <div>
            <span>他的文集</span>
            <ul class="list-unstyled">
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/mm.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/mm.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/mm.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/mm.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/mm.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
              <b-media tag="li" class="my-2">
                <b-img slot="aside"rounded src="../../../static/img/mm.png" height="30" width="30" alt="placeholder" />
                <p class="mt-sm-1">写了<i>111</i>字，<i>235</i>人喜欢</p>
              </b-media>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>
