<!--
/**
 * @功能描述: 查看及搜索页面,删除
 * @author: 王国超
 * @date: 2023-07-11 09:00:00
 * @version: 1.0.9
 */
-->
<template>
    <div>
        <table class="search-table">
            <tr class="search-table-header">
                <td>学号</td>
                <td>姓名</td>
                <td>班级</td>
                <td>
                    <input type="text" placeholder="请输入关键词" class="search-table-header-input" v-model="searchKey">
                    <el-button type="primary" icon="el-icon-search" style="height: 40px" @click="studentsDataForm = searchData(studentsDataForm, studentsData, searchKey,'s')">关键词搜索
                    </el-button>
                </td>
                <td>删除</td>
            </tr>
            <tr v-for="item in displayedStudents" :key="item.id" class="search-table-body">
                <td>{{item.studentNum}}</td>
                <td>{{item.studentName}}</td>
                <td>{{item.classBelong}}</td>
                <!--   跳转至学生详情页-->
                <td>
                    <router-link :to="'/detail/' + item.id"> 编辑</router-link>
                </td>
                <!--     删除           -->
                <td>
                    <el-button type="danger" icon="el-icon-delete" circle
                               @click="waringWords(item.id,item.classBelong,item.studentName)"></el-button>
                </td>
            </tr>
            <button @click="currentPage = thePreviousPage(currentPage)" :disabled="currentPage === 1">上一页</button>
            <button @click="currentPage =theNextPage(currentPage,totalPages)" :disabled="currentPage === totalPages">下一页</button>
        </table>
    </div>
</template>

<script>
    import InterfaceData from "@//mixins/interfaceData";
    import PopUpWindow from "@//mixins/popUpWindow";
    import SearchData from "@//mixins/searchData";
    import PageTurning from "@//mixins/pageTurning";
    export default {
        name: "searchStudent",
        mixins: [InterfaceData, PopUpWindow, SearchData,PageTurning],
        data() {
            return {
                searchKey: "",
                studentsDataForm: [],
                classDataForm: [],
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
            this.classDataForm = this.classData;
            this.studentsDataForm = this.studentsData;
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
                    this.successPopup();
                    this.deleteStudentDetail(itemId, itemClassBelong, itemStudentName);
                }).catch(() => {
                    this.failPopup();
                });
            },
            deleteStudentDetail(itemId, itemClassBelong, itemStudentName) {
                /**
                 * 从班级数据删除
                 */
                for (let i = 0; i < this.classDataForm.length; i++) {
                    console.log(itemClassBelong, this.classDataForm[i].classNum);
                    if (itemClassBelong === this.classDataForm[i].classNum) {
                        this.classDataForm[i].classStudents.splice(this.classDataForm[i].classStudents.indexOf(itemStudentName), 1);
                        this.classDataForm[i].countPerson--;
                        break;
                    }
                }
                localStorage.setItem("classDataKeyForm", JSON.stringify(this.classDataForm));
                /**
                 * 从同学数据删除
                 */
                for (let i = 0; i < this.studentsDataForm.length; i++) {
                    if (itemId === this.studentsDataForm[i].id) {
                        this.studentsDataForm.splice(itemId - 1, 1);
                        break;
                    }
                }
                localStorage.setItem("studentsDataKeyForm", JSON.stringify(this.studentsDataForm));
            }
        }
    };
</script>

<style scoped>

</style>