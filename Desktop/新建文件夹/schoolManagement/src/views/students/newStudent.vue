<!--
/**
 * @功能描述: 新增学生信息
 * @author: 王国超
 * @date: 2023-07-11 11:20:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="studentDetail.studentName"></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="studentDetail.studentNum"></el-input>
            </el-form-item>
            <el-form-item label="成绩">
                <el-input v-model="studentDetail.score"></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="studentDetail.classBelong"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="studentDetail.sex" placeholder="请选择">
                    <el-option
                            v-for="Option in options"
                            :key="Option.value"
                            :label="Option.label"
                            :value="Option.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="住址">
                <el-input v-model="studentDetail.address"></el-input>
            </el-form-item>
            <el-button type="success" style="width: 130px;height: 40px;font-size: 20px;margin-left: 20px"
                       @click="newStudentDetailSubmit" v-if="isLoading===false">提交
            </el-button>
            <el-button type="primary" :loading="true" v-else
                       style="width: 130px;height: 40px;font-size: 20px;margin-left: 20px">加载中
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
        name: "newStudent",
        data() {
            return {
                isLoading:false,
                labelPosition: "left",
                studentsDataForm: [],
                classDataForm: [],
                studentDetail: {
                    studentName: "",
                    studentNum: "",
                    sex: "",
                    score: 0,
                    classBelong: "",
                    id: 0,
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
                ]//选性别
            };
        },
        created() {
            this.studentsDataForm = this.studentsData;
            this.classDataForm = this.classData;
            /**
             * 先把id确定
             * @type {number} id 按照之前数据往后排
             */
            this.studentDetail.id = this.studentsDataForm.length + 1;
            // console.log(this.studentDetail.id);
        },
        methods: {
            /**
             * 返回上一页
             */
            goBack() {
                this.$router.go(-1);
            },
            newStudentDetailSubmit() {
                this.isLoading=true
                this.studentsDataForm.push(this.studentDetail);
                /*
                保存至本地
                 */
                localStorage.setItem("studentsDataKeyForm", JSON.stringify(this.studentsDataForm));
                /**
                 * 处理班级数据
                 */
                for (let i = 0; i < this.classDataForm.length; i++) {
                    if (this.studentDetail.classBelong === this.classDataForm[i].classNum) {
                           this.classDataForm[i].classStudents.push(this.studentDetail.studentName)
                        break;
                    }
                }
                localStorage.setItem("classDataKeyForm", JSON.stringify(this.classDataForm));
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