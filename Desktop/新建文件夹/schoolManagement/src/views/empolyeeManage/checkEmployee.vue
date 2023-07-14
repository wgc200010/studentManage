<!--
/**
 * @功能描述: 查看及搜索页面,删除
 * @author: 王国超
 * @date: 2023-07-11 14:10:00
 * @version: 1.0.9
 */
-->
<template>
    <div>
        <table class="search-table">
            <tr class="search-table-header">
                <td>id</td>
                <td>姓名</td>
                <td><input type="text" placeholder="请输入关键词" class="search-table-header-input"  v-model="searchKey">
                    <el-button type="primary" icon="el-icon-search" style="height: 40px" @click="employeeManageForm = searchData(employeeManageForm, employeeManage,searchKey,'e')">关键词搜索</el-button>
                </td>
            </tr>
            <tr v-for="item in displayedStudents" :key="item.id" class="search-table-body">
                <td>{{item.id}}</td>
                <td>{{item.employeeName}}</td>
                <!--   跳转至学生详情页-->
                <td>
                    <router-link :to="'/detailEmp/' + item.id"> 编辑</router-link>
                </td>
            </tr>
            <button @click="currentPage = thePreviousPage(currentPage)" :disabled="currentPage === 1">上一页</button>
            <button @click="currentPage =theNextPage(currentPage,totalPages)" :disabled="currentPage === totalPages">下一页</button>
        </table>
    </div>
</template>

<script>
    import InterfaceData from "@//mixins/interfaceData";
    import SearchData from "@//mixins/searchData";
    import PageTurning from "@//mixins/pageTurning";
    export default {
        name: "checkEmployee",
        mixins:[InterfaceData,SearchData,PageTurning],
        data(){
            return{
                searchKey: '',
                employeeManageForm:[],
                itemsPerPage: 6, // 每页显示的项数
                currentPage: 1, // 当前页码
                totalPages: 0
            }
        },
        created() {
            /**
             * 获取接口数据
             */
            this.employeeManageForm = this.employeeManage;
            this.totalPages = Math.ceil(this.employeeManageForm.length / this.itemsPerPage);
        },
        computed: {
            /**
             * 用于循环特定位置数据
             * @returns {*[]}
             */
            displayedStudents() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.employeeManageForm.slice(start, end);
            }
        }
    };
</script>

<style scoped>
</style>