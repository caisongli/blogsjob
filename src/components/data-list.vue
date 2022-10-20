<template>
    <div>
       <el-button @click = 'getData'>查看</el-button>
    </div>
</template>

<script>
import * as ajax from "@/utils/apiList"
    export default {
        methods:{
            getData(){
                ajax.sentences();
                ajax.getImages({type:'car',page:1,size:20})
            }
        }
    }
</script>

<style lang="less" scoped>

</style>