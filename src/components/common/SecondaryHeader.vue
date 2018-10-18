


<template>
<div>
  <b-img src="../../static/img/rmzt.png" class="my-5"></b-img>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="推荐" name="first">
      <v-group></v-group>
    </el-tab-pane>
    <el-tab-pane label="热门" name="second">
      <v-group></v-group>
    </el-tab-pane>
    <el-tab-pane label="城市" name="third">
      <v-group></v-group>
    </el-tab-pane>
    <el-tab-pane label="校园" name="fourth">
      <v-group></v-group>
    </el-tab-pane>
  </el-tabs>

</div>
</template>
<script>
  import vGroup from '../common/GroupImages';

  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },

    components: {
      vGroup,

    }
  };
</script>

<style scoped>

</style>
