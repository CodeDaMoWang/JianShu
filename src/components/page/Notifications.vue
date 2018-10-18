<template>
<b-container>
    <b-row>
     <b-col cols="4">
       <ul class="list-unstyled">

         <router-link to="comments">
         <b-media tag="li"class="my-4">
           <b-img slot="aside"   src="../../static/img/pl.png" />

             <h5>评论</h5>


         </b-media>
         </router-link>

         <router-link to="message">
         <b-media tag="li"class="my-4">
           <b-img slot="aside"  src="../../static/img/xf.png"/>
             <h5>简信</h5>

         </b-media>
         </router-link>

         <router-link to="submission">
         <b-media tag="li"class="my-4">
           <b-img slot="aside"   src="../../static/img/sc.png"/>
             <h5>投稿请求</h5>


         </b-media>
         </router-link>

         <router-link to="awesome">
         <b-media tag="li"class="my-4">
           <b-img slot="aside"  src="../../static/img/xh.png"/>
             <h5>喜欢和赞</h5>


         </b-media>
         </router-link>

         <router-link to="comments">
         <b-media tag="li"class="my-4">
           <b-img slot="aside"  src="../../static/img/gz.png"/>

             <h5>关注</h5>


         </b-media>
         </router-link>

         <router-link to="comments">
         <b-media tag="li"class="my-4">
           <b-img slot="aside"  src="../../static/img/qq.png"/>
             <h5>赞赏和付费</h5>
         </b-media>
         </router-link>

         <b-media tag="li"class="my-4">
           <b-img slot="aside"  src="../../static/img/sl.png"/>

           <router-link to="comments">
             <h5>其他提醒</h5>
           </router-link>

         </b-media>


       </ul>

     </b-col>


    <b-col cols="8">

        <keep-alive>
          <router-view></router-view>
        </keep-alive>

    </b-col>
    </b-row>

</b-container>

</template>

<script>
    export default {
        name: "Notifications"
    }
</script>

<style scoped>

</style>
