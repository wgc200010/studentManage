<!--
/**
 * @功能描述: 新增职工信息
 * @author: 王国超
 * @date: 2023-07-11 15:14:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="employeeDetail.employeeName"></el-input>
            </el-form-item>
            <el-form-item label="id">
                <el-input v-model="employeeDetail.id"></el-input>
            </el-form-item>
            <el-form-item label="年纪">
                <el-input v-model="employeeDetail.age"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                <el-input v-model="employeeDetail.job"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="employeeDetail.sex" placeholder="请选择">
                    <el-option
                            v-for="Option in options"
                            :key="Option.value"
                            :label="Option.label"
                            :value="Option.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="住址">
                <el-input v-model="employeeDetail.address"></el-input>
            </el-form-item>
            <el-button type="success" style="width: 130px;height: 40px;font-size: 20px;margin-left: 20px"
                       @click="newEmpDetailSubmit">提交
            </el-button>
            <el-button type="info" style="width: 130px;height: 40px;font-size: 20px;margin-left: 20px;" @click="goBack">
                返回
            </el-button>
        </el-form>
    </div>
</template>

<script>
    import InterfaceData from "@//mixins/interfaceData";
    import PopUpWindow from "@//mixins/popUpWindow";
    export default {
        mixins: [InterfaceData,PopUpWindow],
        name: "newEmployee",
        data(){
            return{
                labelPosition: "left",
                employeeManageForm: [],
                jobManageForm:[],
                employeeDetail:{
                    id: 0,
                    employeeName: "",
                    sex: "",
                    job: "",
                    age: 0,
                    address: ""
                },
                options: [
                    {
                        value: "选项1",
                        label: "男"
                    },{
                        value: "选项2",
                        label: "女"
                    }
                ]
            }
        },
        created() {
            this.employeeManageForm= this.employeeManage;
            this.employeeDetail.id = this.employeeManageForm.length + 1;
            this.jobManageForm=this.jobManage
        },
        methods:{
            goBack() {
                this.$router.go(-1);
            },
            newEmpDetailSubmit() {
                this.employeeManageForm.push(this.employeeDetail);
                /*
                保存至本地
                 */
                localStorage.setItem("employeeManageKeyForm", JSON.stringify(this.employeeManage));
                /**
                 * 处理职位数据
                 */
                for (let i = 0; i < this.jobManageForm.length; i++) {
                    if (this.employeeManageForm.job === this.jobManage[i].jobName) {
                        this.jobManage.jobNum++
                        break;
                    }
                }
                localStorage.setItem("jobManageKeyForm", JSON.stringify(this.jobManageForm));
                this.successPopup()
            }
        }
    };
</script>

<style scoped>

</style>