/**
 * @功能描述: 搜索
 * @author: 王国超
 * @date: 2023-07-11 16:20:00
 * @version: 1.0.0
 */
export default {
    /**
     * 根据关键词测进行搜索
     */
    methods: {
        /**
         * 根据搜索关键字在给定数据中筛选匹配的项
         * @param {Object[]} dataForm - 数据表单
         * @param {Object[]} data - 数据源
         * @param {string} searchKey - 搜索关键字
         * @param {string} str - 搜索类型（"s"表示学生，其他表示员工）
         * @returns {Object[]} 匹配的数据表单
         */
        searchData(dataForm, data, searchKey, str) {
            dataForm = [];
            for (let i = 0; i < data.length; i++) {
                if (str === "s") {
                    if (data[i].studentName.includes(searchKey)) {
                        dataForm.push(data[i]);
                    }
                } else {
                    if (data[i].employeeName.includes(searchKey)) {
                        dataForm.push(data[i]);
                    }
                }
            }
            if (dataForm === []) {
                dataForm = data;
            }
            return dataForm;
        }
    }
};