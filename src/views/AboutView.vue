<template>
  <div class="zzsc">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { myCanvas } from '@/utils/canvas.js'
export default {
  mounted() {
    this.$nextTick(() => {
      this.fns(920,400)
    })
  },
  methods: {
    //
  },
  data() {
    return {
      istrue: false,
    }
  },
  mixins: [myCanvas]

}
</script>

<style lang="scss" scoped>

</style>