/**
 * @功能描述: 换页,上一页或下一页
 * @author: 王国超
 * @date: 2023-07-11 16:45:00
 * @version: 1.0.0
 */
export default {
    methods:{
        /**
         * 获取下一页的页码
         * @param {number} currentPage - 当前页码
         * @param {number} totalPages - 总页数
         * @returns {number} 下一页的页码
         */
        theNextPage(currentPage,totalPages){
            if (currentPage < totalPages) {
               currentPage++;
            }
            return currentPage
        },
        /**
         * 返回上一页的页码
         * @param {number} currentPage - 当前页码
         * @returns {number} 上一页的页码
         */
        thePreviousPage(currentPage){
            if (currentPage > 1) {
                currentPage--;
            }
            return currentPage
        }
    }
}