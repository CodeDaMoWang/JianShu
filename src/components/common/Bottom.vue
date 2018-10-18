<template>
<div>
  <div >
    <b-img src="../../static/img/2wm.png" />
    推荐作者
  </div>


  <ul class="list-unstyled">
    <b-media tag="li"class="my-4">
      <b-img slot="aside"   rounded = "circle" src="https://upload.jianshu.io/users/upload_avatars/8559562/989e1f2b-39f9-4821-a4e0-a7e47c89e1ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"  width="60" height="60" />
      <h5 class="mt-0 mb-1">孙一杯</h5>
      写了88.7k字 · 228喜欢
    </b-media>
    <b-media tag="li" class="my-4">
      <b-img slot="aside"  rounded = "circle" src="https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"  width="60" height="60"/>
      <h5 class="mt-0 mb-1">慕青霖</h5>
      写了181.1k字 · 1.9k喜欢
    </b-media>
    <b-media tag="li"class="my-4">
      <b-img slot="aside"  rounded = "circle" src="https://upload.jianshu.io/users/upload_avatars/7778745/7c512474-3865-4c39-b4f2-d0a830174e62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"  width="60" height="60"/>
      <h5 class="mt-0 mb-1">三叶秋 </h5>
      写了222.4k字 · 5.2k喜欢
    </b-media>
    <b-media tag="li"class="my-4">
      <b-img slot="aside"  rounded = "circle" src="https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"  width="60" height="60"/>
      <h5 class="mt-0 mb-1">北洛西门 </h5>
      写了222.4k字 · 5.2k喜欢
    </b-media>
    <b-media tag="li"class="my-4">
      <b-img slot="aside"  rounded = "circle" src="https://upload.jianshu.io/users/upload_avatars/3877156/e3762195-27f1-4b11-9da2-c4be3886bed6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" width="60" height="60"/>
      <h5 class="mt-0 mb-1">同相 </h5>
      写了1419.2k字 · 406喜欢
    </b-media>

  </ul>

  <a class="cha">查看全部</a>
</div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>

  .cha{
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 18px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
  }
</style>
