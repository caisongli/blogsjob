<template>
    <div class="toast" v-show="isShow">
      <div>{{ message }}</div>
      <el-button :plain="false" @click="open">打开消息提示</el-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "",
        isShow: false,
      };
    },
    methods: {
      show(message, duration) {
        this.isShow = true;
        this.message = message;
  
        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, duration);
      },
      open() {
        this.$message('这是一条消息提示');
      },
    },
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(226, 98, 98, 0.75);
    z-index: 999;
    border: 1px solid #000;
    border-radius: 8px;
  }
  </style>
  
  