<!--
/**
 * @功能描述: 成绩排名
 * @author: 王国超
 * @date: 2023-07-11 15:50:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <table class="search-table">
            <tr class="search-table-header">
                <td>学号</td>
                <td>姓名</td>
                <td>班级</td>
                <td>成绩</td>
                <td>删除</td>
            </tr>
            <tr v-for="item in displayedStudents" :key="item.id" class="search-table-body">
                <td>{{item.studentNum}}</td>
                <td>{{item.studentName}}</td>
                <td>{{item.classBelong}}</td>
                <td>{{item.score}}</td>
                <!--   跳转至学生详情页-->
                <td>
                    <router-link :to="'/detail/' + item.id"> 查看及修改</router-link>
                </td>
            </tr>
            <button @click="currentPage = thePreviousPage(currentPage)" :disabled="currentPage === 1">上一页</button>
            <button @click="currentPage =theNextPage(currentPage,totalPages)" :disabled="currentPage === totalPages">下一页</button>
        </table>
    </div>
</template>

<script>
    import InterfaceData from "@//mixins/interfaceData";
    import PageTurning from "@//mixins/pageTurning";
    export default {
        name: "searchStudent",
        mixins: [InterfaceData,PageTurning],
        data() {
            return {
                searchKey: "",//关键词
                studentsDataForm: [],//学生信息
                classDataForm: [],//教师信息
                itemsPerPage: 6, // 每页显示的项数
                currentPage: 1, // 当前页码
                totalPages: 0
            };
        },
        computed: {
            /**
             * 用于循环特定位置数据
             * @returns {*[]}
             */
            displayedStudents() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.studentsDataForm.slice(start, end);
            }
        },
        created() {
            /**
             * 获取接口数据
             */
            this.studentsDataForm = this.studentsData;
            this.studentsDataForm.sort(this.sorted('score'))
            this.totalPages = Math.ceil(this.studentsDataForm.length / this.itemsPerPage);
        },
        methods: {
            /**
             * 删除提醒
             */
            waringWords(itemId, itemClassBelong, itemStudentName) {
                this.$confirm("此操作将永久删除是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.successPopup()
                    this.deleteStudentDetail(itemId, itemClassBelong, itemStudentName);
                }).catch(() => {
                    this.failPopup()
                })
            },
            /**
             * 排序
             * @param property
             * @returns {function(*, *): number}
             */
            sorted(property) {
                return function (a, b) {
                    return  b[property] - a[property]; //正序
                }
            }
        }
    }
</script>

<style scoped>

</style>