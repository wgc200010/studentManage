<!--
/**
 * @功能描述: 职工信息
 * @author: 王国超
 * @date: 2023-07-11 14:46:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="employeeDetail.employeeName" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="id">
                <el-input v-model="employeeDetail.id" :disabled="true"></el-input>
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
                       @click="empDetailSubmit" v-if="!isLoading">提交
            </el-button>
            <el-button type="primary" :loading="true" v-else style="width: 130px;height: 40px;font-size: 20px;margin-left: 20px">加载中</el-button>
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
        name: "employeeDetail",
        data(){
            return{
                /**
                 * 存储学生数据，用于保存至本地
                 */
                employeeManageForm: [],
                employeeId: this.$route.params.id - 0,
                employeeDetail:{
                    id: 1,
                    employeeName: "张三",
                    sex: "男",
                    job: "classTeacher",
                    age: 85,
                    address: "河南省郑州市高新区"
                },
                labelPosition: "right",
                isLoading:false,
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
            /**
             * 获取对应数据
             */
            this.employeeManageForm = this.employeeManage;
            for (let i = 0; i < this.employeeManageForm.length; i++) {
                if (this.employeeId === this.employeeManageForm[i].id) {
                    for (let item in this.employeeManageForm[i]) {
                        this.employeeDetail[item] = this.employeeManageForm[i][item];
                    }
                    break;
                }
            }
            // console.log(this.employeeDetail)
        },
        methods:{
            /**
             * 返回上一页
             */
            goBack() {
                this.$router.go(-1);
            },
            empDetailSubmit() {
                this.isLoading=true
                for (let i = 0; i < this.employeeManageForm.length; i++) {
                    if (this.employeeId === this.employeeManageForm[i].id) {
                        for (let item in this.employeeDetail) {
                            this.employeeManageForm[i][item] = this.employeeDetail[item];
                        }
                        break;
                    }
                }
                /*
                保存至本地
                 */
                localStorage.setItem('employeeManageKeyForm', JSON.stringify( this.employeeManageForm));
                setTimeout(() => {
                    this.successPopup();
                    this.isLoading = false;
                }, 1000);
            }
        }

    };
</script>

<style scoped>

</style>