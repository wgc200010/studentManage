/**
 * @功能描述: 路由
 * @author: 王国超
 * @date: 2023-07-10 11:15:00
 * @version: 1.0.0
 */
import VueRouter from "vue-router";
import ClassManage from "@/views/classManagePage/classManage";
import SearchStudent from "@/views/students/searchStudent";
import StudentDetails from "@/views/students/studentDetails";
import NewStudent from "@/views/students/newStudent";
import CheckEmployee from "@/views/empolyeeManage/checkEmployee";
import EmployeeDetail from "@/views/empolyeeManage/employeeDetail";
import NewEmployee from "@/views/empolyeeManage/newEmployee";
import JobManage from "@/views/jobManage/jobManage";
import ScoreRanking from "@/views/scoreRanking/scoreRanking";
/**
 * 路由编写
 */
export default new VueRouter({
    routes: [
        {
            // path是路径
            path: "/classManage",
            //跳转的组件
            component: ClassManage
        },
        {
            path: "/allStudent",
            component: SearchStudent
        }, {
            path: "/detail/:id",
            component: StudentDetails
        }, {
            path: "/detailEmp/:id",
            component: EmployeeDetail
        }, {
            path: "/newStudent",
            component: NewStudent
        }, {
            path: "/checkEmployee",
            component: CheckEmployee
        }, {
            path: "/newEmployee",
            component: NewEmployee
        }, {
            path: "/jobManage",
            component: JobManage
        }, {
            path: "/scoreRanking",
            component: ScoreRanking
        }
    ]
});