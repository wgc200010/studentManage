<!--
/**
 * @功能描述: 职位管理
 * @author: 王国超
 * @date: 2023-07-11 15:32:00
 * @version: 1.0.0
 */
-->
<template>
    <div>
        <el-table
                :data="jobManageForm"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" block class="demo-table-expand">
                        <el-form-item label="id:">
                            <span>{{ props.row.id}}</span>
                        </el-form-item>
                        <el-form-item label="职位:">
                            <span>{{ props.row.jobName}}</span>
                        </el-form-item>
                        <el-form-item label="该职位共:">
                            <span>{{ props.row.jobNum }}人</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="id"
                    prop="id">
            </el-table-column>
            <el-table-column
                    label="职位"
                    prop="jobName">
            </el-table-column>
            <el-table-column
                    label="该职位人数"
                    prop="jobNum">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import InterfaceData from "@//mixins/interfaceData";
    export default {
        mixins:[InterfaceData],
        name: "jobManage",
        data(){
            return{
                jobManageForm:[]
            }
        },
        created() {
            this.jobManageForm= this.jobManage
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