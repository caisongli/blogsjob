<template>
  <div class="zzsc">
    <canvas id="canvas" width="920" height="400"></canvas>
  </div>
</template>

<script>
import canvas from '../utils/canvas.js'
export default {
  inject: ['reload'], // 引入方法
  mounted () {
    // this.$router.go(0)
    // this.fnc()
    // this.$nextTick(() => {
    this.fnc()
    // })
  },
  methods: {
    fnc () {
      canvas
    }
  },
  data () {
    return {
      istrue: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>