<!--
/**
 * @功能描述: 左侧导航栏
 * @author: 王国超
 * @date: 2023-07-10 15:20:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-help"></i>
                            <span>数据管理</span>
                        </template>
                        <el-submenu index="1-1">
                            <template slot="title">班级管理</template>
                            <el-menu-item index="1-1-1">
                                <router-link :to="'/classManage'">班级情况概览</router-link>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <template slot="title">同学情况管理</template>
                            <el-menu-item index="1-2-1"><router-link :to="'/allStudent'">查看及搜索学生信息</router-link> </el-menu-item>
                            <el-menu-item index="1-2-2"><router-link :to="'/newStudent'">新增学生信息</router-link> </el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                            <template slot="title">职工管理</template>
                            <el-menu-item index="1-3-1"><router-link :to="'/checkEmployee'">职工信息及查询</router-link> </el-menu-item>
                            <el-menu-item index="1-3-2"><router-link :to="'/newEmployee'">添加新的职工</router-link> </el-menu-item>
                        </el-submenu>
                        <el-menu-item index="1-4">
                            <template slot="title"><router-link :to="'/jobManage'">职位概览</router-link> </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-s-data"></i>
                        <span slot="title"><router-link :to="'/scoreRanking'">学生成绩排名</router-link> </span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统设置</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "navLeft",
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    };
</script>

<style scoped>

</style>