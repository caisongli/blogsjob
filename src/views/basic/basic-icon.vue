<template>
    <div>
        <h4 style="margin:10px; fontSize:20px ;">Icon 图标</h4>
        <p style="margin-bottom:10px;">直接通过设置类名为 el-icon-iconName 来使用即可。例如：</p>
        <div class="icon">
            <i class="el-icon-edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <hr>
        <h4 style="margin:10px; fontSize:20px ;">图标集合</h4>
        <div class="jh">
            <span class="el-icon-platform-eleme">el-icon-platform-eleme</span>
            <span class="el-icon-eleme">el-icon-eleme</span>
            <span class="el-icon-delete-solid">el-icon-delete-solid</span>
            <span class="el-icon-question">el-icon-question</span>
            <span class="el-icon-star-on">el-icon-star-on</span>
        </div>
        <YtDemo />
    </div>
</template>

<script>
import YtDemo from '@/components/plugin';
export default {
    components: { YtDemo }
}
</script>

<style lang="less" scoped>
 .jh{
    display: flex;
    height: 400px;
    >span{
        margin-right: 20px;
        font-size: 18px;
    }
 }
</style>