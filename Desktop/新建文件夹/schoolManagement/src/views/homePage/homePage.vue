<!--
/**
 * @功能描述: 首页
 * @author: 王国超
 * @date: 2023-07-10 11:20:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-container>
            <el-header class="schoolManagement"><i class="el-icon-s-fold" @click="closeAside" v-if="isAside" style="margin-right: 550px"></i><i class="el-icon-s-unfold" @click="openAside" v-if="isAside===false" style="margin-right: 550px"></i>学校管理系统</el-header>
            <el-container>
                <el-aside width="200px" class="asideContainer" v-if="isAside">
                    <NavLeft></NavLeft>
                </el-aside>
                <el-main class="mainContainer">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import NavLeft from "@//views/leftNav/navLeft";

    export default {
        components: {
            NavLeft
        },
        name: "homePage",
        data() {
            return {
                radio: 1,
                isAside:true
            };
        },
        methods:{
            closeAside(){
                this.isAside=false
            },
            openAside(){
                this.isAside=true
            }
        }
    };
</script>

<style scoped>

</style>