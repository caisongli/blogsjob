<template>
  <div>
    <transition name="fade" appear>
      <el-transfer ref="transfer" v-model="value" :data="data" :titles="titles" :button-texts="['移入待办', '移入待办完成']">
      </el-transfer>
    </transition>
    <p>
      <el-input type="text" v-model="info" />
      <el-button @click="fn">发送</el-button>
    </p>
  </div>
</template>

<script>
export default {
  props: ['todoData'],
  data () {
    return {
      data: this.todoData,
      value: [],
      titles: ['待办事项', '已完成事项'],
      info: '',
      show: true
    };
  },
  methods: {
    fn () {
      this.$bus.$emit('msg', this.info)
      let tranNode = document.createElement('transition-group')
      tranNode.setAttribute('name', 'fade')
    }
  }
}
</script>

<style lang="less" scoped>
div {
  width: 100%;

  /deep/ .el-transfer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .el-transfer-panel {
      width: 400px;

      .el-transfer-panel__item.el-checkbox .el-checkbox__label {
        display: flex;
        justify-content: space-between;

        /deep/.el-transfer__buttons {
          width: 400px;
          display: flex;
          flex-direction: row;

        }
      }
    }
  }
}

.fade-enter-active {
  animation: atgui 0.5s;
}

.fade-leave-active {
  animation: atgui 0.5s;
}

@keyframes atgui {
  from {
    transform: translateX(100%) rotate(720deg) scale(3);
  }

  to {
    transform: translateX(0px) rotate(0deg) scale(2);
  }
}
</style>