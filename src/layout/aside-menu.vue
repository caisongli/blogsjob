<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="/home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">基础组件</span>
        </template>
        <el-menu-item index="/basic">查询列表</el-menu-item>
        <el-menu-item index="/basic-layout">Layout布局</el-menu-item>
        <el-menu-item index="/basic-icon">icon图标</el-menu-item>
        <!-- <el-menu-item-group>
                    <span slot="title">组件基本用法发</span>
                    <el-menu-item index="/basic">查询列表</el-menu-item>
                    <el-menu-item index="/basic-layout">Layout布局</el-menu-item>
                    <el-menu-item index="/basic-icon">icon图标</el-menu-item>
                </el-menu-item-group> -->
      </el-submenu>
      <el-menu-item index="/about" @click.native="reload">
        <i class="el-icon-menu"></i>
        <span slot="title">时间页</span>
      </el-menu-item>
      <!-- <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">我的页</span>
      </el-menu-item> -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">API接口</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/api/img">美图欣赏</el-menu-item>
          <el-menu-item index="/api/video">视频</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
  
<style lang="less" >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color: @theme-aside;

  .sq {
    background-color: aquamarine;
  }

  .el-menu-item-group {
    background-color: @theme-aside-group ;
  }
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner {
  background-color: rgb(145, 172, 239);
  position: absolute;
  left: 0px;
  top: -20px;
  z-index: -1;
}
</style>
  
<script>
export default {
  data () {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    reload () {
      // this.$router.go(0)
      // location.reload()
    }
  }
}
</script>