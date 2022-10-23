<template>
  <div id="todolist">
    <input-add @addlist="add"></input-add>
    <datas-list :todoData="todoObj"></datas-list>
    <footer-box></footer-box>
  </div>
</template>

<script>
import inputAdd from './components/input-add.vue'
import datasList from './components/datas-list.vue'
import footerBox from './components/footer-box.vue'
import { nanoid } from 'nanoid'
export default {
  components: {
    inputAdd,
    datasList,
    footerBox
  },
  data () {
    return {
      todoObj: [
        { key: '1', label: '哈哈' },
        { key: '2', label: '张三' },
        { key: '3', label: '李四' }
      ]
    }
  },
  methods: {
    add (value) {
      this.todoObj.unshift({
        key: nanoid(),
        label: value
      })
    }
  }

}
</script>

<style lang="less" scoped>
#todolist {
  display: flex;
  width: 100%;
  height: 800px;
  border: 1px solid #ccc;
  flex-direction: column;

  >div {
    margin-top: 10px;
  }
}
</style>