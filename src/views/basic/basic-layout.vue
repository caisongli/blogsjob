<template>
    <div>
        <h1 style="fontSize:20px">Layout 布局</h1>{{formatTime}}
        <h3 style="margin:10px;">通过基础的 24 分栏，迅速简便地创建布局。</h3>
        <hr>
        <p style="margin:10px;">基础布局</p>
        <p style="margin:10px;">使用单一分栏创建基础的栅格布局。</p>
        <div class="basic-one">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
        </div>
        <hr>
        <h4 style="margin:10px;">分栏间隔</h4>
        <p style="margin-bottom:10px;">Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
        <div class="layout-2">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
        <hr>
        <h4 style="margin:10px;">响应式布局</h4>
        <p style="margin-bottom:10px;">参照了 Bootstrap 的 响应式设计,预设了五个响应尺寸:xs、sm、md、lg 和 xl.</p>
        <div class="layout-3">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 
        }
    },
    mounted() {
        //    
    }
}
</script>

<style lang="less" scoped>
//   ---基础样式一
.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

// -----基础样式一----
// ---分栏----
.layout-2 {
    .el-row {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
}

// ---分栏----
// ---响应式--
.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

// ---响应式--
</style>