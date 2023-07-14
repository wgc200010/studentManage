/**
 * @功能描述: 弹窗
 * @author: 王国超
 * @date: 2023-07-10 15:07:00
 * @version: 1.0.0
 */
export default {
    methods:{
        /**
         * 显示提交成功的弹窗
         */
        successPopup(){
                this.$message({
                type: 'success',
                message: '提交成功!'
            });
        },
        /**
         * 取消的弹窗
         */
        failPopup(){
            this.$message({
                type: 'info',
                message: '操作取消!'
            });
        }

    }
}