<!--
/**
 * @功能描述: 修改学生信息
 * @author: 王国超
 * @date: 2023-07-11 010:30:00
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
                <el-input v-model="studentDetail.studentName" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="studentDetail.studentNum" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="成绩">
                <el-input v-model="studentDetail.score"></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="studentDetail.classBelong"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <!--                <el-input v-model="studentDetail.sex"></el-input>-->
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
                       @click="studentDetailSubmit" v-if="!isLoading">提交
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
        mixins: [InterfaceData, PopUpWindow],
        name: "studentDetails",
        /**
         * @returns {Object} 返回包含初始化数据的对象
         */
        data() {
            return {
                /**
                 * 存储学生数据，用于保存至本地
                 */
                studentsDataForm: [],
                studentId: this.$route.params.id - 0,
                studentDetail: {
                    studentName: "一一",
                    studentNum: "001",
                    sex: "男",
                    score: 100,
                    classBelong: "一班",
                    id: 1,
                    address: "河南省郑州市中原区"
                },
                labelPosition: "right",
                isLoading: false,
                options: [
                    {
                        value: "选项1",
                        label: "男"
                    },{
                        value: "选项2",
                        label: "女"
                    }
                ]
            };
        },
        created() {
            /**
             * 获取对应学生数据
             */
            this.studentsDataForm = this.studentsData;
            for (let i = 0; i < this.studentsDataForm.length; i++) {
                if (this.studentId === this.studentsDataForm[i].id) {
                    for (let item in this.studentsDataForm[i]) {
                        this.studentDetail[item] = this.studentsDataForm[i][item];
                    }
                    break;
                }
            }
            // console.log(this.studentDetail)
        },
        methods: {
            /**
             * 返回上一页
             */
            goBack() {
                this.$router.go(-1);
            },
            studentDetailSubmit() {
                this.isLoading = true;
                for (let i = 0; i < this.studentsDataForm.length; i++) {
                    if (this.studentId === this.studentsDataForm[i].id) {
                        for (let item in this.studentDetail) {
                            this.studentsDataForm[i][item] = this.studentDetail[item];
                        }
                        break;
                    }
                }
                /*
                保存至本地
                 */
                localStorage.setItem("studentsDataKeyForm", JSON.stringify(this.studentsDataForm));
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