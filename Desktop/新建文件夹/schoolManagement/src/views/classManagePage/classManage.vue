<!--
/**
 * @功能描述: 班级管理
 * @author: 王国超
 * @date: 2023-07-10 16:30:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-table
                :data="classDataForm"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" block class="demo-table-expand">
                        <el-form-item label="班级:">
                            <span>{{ props.row.classNum }}</span>
                        </el-form-item>
                        <el-form-item label="班主任:">
                            <span>{{ props.row.classTeacher }}</span>
                        </el-form-item>
                        <el-form-item label="班级人数:">
                            <span>{{ props.row.countPerson }}人</span>
                        </el-form-item>
                        <el-form-item label="班级成员:">
                            <span v-for="(item,index) in props.row.classStudents" :key="index">
                                {{item}}、
                            </span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="班级"
                    prop="classNum">
            </el-table-column>
            <el-table-column
                    label="班主任"
                    prop="classTeacher">
            </el-table-column>
            <el-table-column
                    label="班级人数"
                    prop="countPerson">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import InterfaceData from "@//mixins/interfaceData";
    export default {
        name: "classManage",
        mixins:[InterfaceData],
        data(){
            return{
                classDataForm:[]
            }
        },
        created() {
            this.classDataForm = this.classData
            console.log(this.classDataForm)
            console.log(this.classDataForm[1].classStudents)
        }
    };
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>