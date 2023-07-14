/**
 * @功能描述: 管理系统的所有模拟接口数据存放
 * @author: 王国超
 * @date: 2023-07-10 11:15:00
 * @version: 1.0.0
 */
export default {
    data() {
        return {
            /**
             * 班级管理数据
             * @typedef {Object} ClassData
             * @property {number} id - 班级ID
             * @property {string} classNum - 班级编号
             * @property {string} classTeacher - 班主任姓名
             * @property {number} countPerson - 班级学生数量
             * @property {string[]} classStudents - 班级学生姓名列表
             */
            classData: [
                {
                    id: 1,
                    classNum: "一班",//班级
                    classTeacher: "张三",//班主任
                    countPerson: 10,//班级学生数
                    classStudents: [
                        "一一", "一二",
                        "一三", "一四",
                        "一五", "一六",
                        "一七", "一八",
                        "一九", "一十"
                    ]//班级学生
                },
                {
                    id: 2,
                    classNum: "二班",
                    classTeacher: "李四",
                    countPerson: 8,
                    classStudents: [
                        "二一", "二二",
                        "二三", "二四",
                        "二五", "二六",
                        "二七", "二八"
                    ]
                },
                {
                    id: 3,
                    classNum: "三班",
                    classTeacher: "王五",
                    countPerson: 5,
                    classStudents: ["三一", "三二", "三三", "三四", "三五"]
                },
                {
                    id: 4,
                    classNum: "四班",
                    classTeacher: "赵六",
                    countPerson: 7,
                    classStudents: [
                        "四一", "四二",
                        "四三", "四四",
                        "四五", "四六",
                        "四七"
                    ]
                },
                {
                    id: 5,
                    classNum: "五班",
                    classTeacher: "刘七",
                    countPerson: 6,
                    classStudents: ["五一", "五二", "五三", "五四", "五五", "五六"]
                },
                {
                    id: 6,
                    classNum: "六班",
                    classTeacher: "孙八",
                    countPerson: 6,
                    classStudents: ["六一", "六二", "六三", "六四", "六五", "六六"]
                },
                {
                    id: 7,
                    classNum: "七班",
                    classTeacher: "周九",
                    countPerson: 9,
                    classStudents: [
                        "七一", "七二",
                        "七三", "七四",
                        "七五", "七六",
                        "七七", "七八",
                        "七九"
                    ]
                },
                {
                    id: 8,
                    classNum: "八班",
                    classTeacher: "郑十",
                    countPerson: 7,
                    classStudents: [
                        "八一", "八二",
                        "八三", "八四",
                        "八五", "八六",
                        "八七"
                    ]
                },
                {
                    id: 9,
                    classNum: "九班",
                    classTeacher: "钱十一",
                    countPerson: 6,
                    classStudents: ["九一", "九二", "九三", "九四", "九五", "九六"]
                },
                {
                    id: 10,
                    classNum: "十班",
                    classTeacher: "吴十二",
                    countPerson: 5,
                    classStudents: ["十一", "十二", "十三", "十四", "十五"]
                }
            ],
            /**
             * 同学管理数据
             * @typedef {Object} StudentData
             * @property {string} studentName - 学生姓名
             * @property {string} studentNum - 学生编号
             * @property {string} sex - 学生性别
             * @property {number} score - 学生成绩
             * @property {string} classBelong - 所属班级
             * @property {number} id - 学生ID
             * @property {string} address - 学生地址
             */
            // studentsData: [
            //     {
            //         studentName: "一一",
            //         studentNum: "001",
            //         sex: "男",
            //         score: 100,
            //         classBelong: "一班",
            //         id: 1
            //     },
            //     {
            //         studentName: "一二",
            //         studentNum: "002",
            //         sex: "女",
            //         score: 78,
            //         classBelong: "一班",
            //         id: 2
            //     },
            //     {
            //         studentName: "一三",
            //         studentNum: "003",
            //         sex: "男",
            //         score: 91,
            //         classBelong: "一班",
            //         id: 3
            //     },
            //     {
            //         studentName: "一四",
            //         studentNum: "004",
            //         sex: "女",
            //         score: 85,
            //         classBelong: "一班",
            //         id: 4
            //     },
            //     {
            //         studentName: "一五",
            //         studentNum: "005",
            //         sex: "男",
            //         score: 92,
            //         classBelong: "一班",
            //         id: 5
            //     },
            //     {
            //         studentName: "一六",
            //         studentNum: "006",
            //         sex: "女",
            //         score: 76,
            //         classBelong: "一班",
            //         id: 6
            //     },
            //     {
            //         studentName: "一七",
            //         studentNum: "007",
            //         sex: "男",
            //         score: 88,
            //         classBelong: "一班",
            //         id: 7
            //     },
            //     {
            //         studentName: "一八",
            //         studentNum: "008",
            //         sex: "女",
            //         score: 95,
            //         classBelong: "一班",
            //         id: 8
            //     },
            //     {
            //         studentName: "一九",
            //         studentNum: "009",
            //         sex: "男",
            //         score: 83,
            //         classBelong: "一班",
            //         id: 9
            //     },
            //     {
            //         studentName: "一十",
            //         studentNum: "010",
            //         sex: "女",
            //         score: 87,
            //         classBelong: "一班",
            //         id: 10
            //     },
            //     {
            //         studentName: "二一",
            //         studentNum: "011",
            //         sex: "女",
            //         score: 93,
            //         classBelong: "二班",
            //         id: 11
            //     },
            //     {
            //         studentName: "二二",
            //         studentNum: "012",
            //         sex: "男",
            //         score: 82,
            //         classBelong: "二班",
            //         id: 12
            //     },
            //     {
            //         studentName: "二三",
            //         studentNum: "013",
            //         sex: "女",
            //         score: 77,
            //         classBelong: "二班",
            //         id: 13
            //     },
            //     {
            //         studentName: "二四",
            //         studentNum: "014",
            //         sex: "男",
            //         score: 89,
            //         classBelong: "二班",
            //         id: 14
            //     },
            //     {
            //         studentName: "二五",
            //         studentNum: "015",
            //         sex: "女",
            //         score: 94,
            //         classBelong: "二班",
            //         id: 15
            //     },
            //     {
            //         studentName: "二六",
            //         studentNum: "016",
            //         sex: "男",
            //         score: 81,
            //         classBelong: "二班",
            //         id: 16
            //     },
            //     {
            //         studentName: "二七",
            //         studentNum: "017",
            //         sex: "女",
            //         score: 86,
            //         classBelong: "二班",
            //         id: 17
            //     },
            //     {
            //         studentName: "二八",
            //         studentNum: "018",
            //         sex: "男",
            //         score: 79,
            //         classBelong: "二班",
            //         id: 18
            //     },
            //     {
            //         studentName: "三一",
            //         studentNum: "019",
            //         sex: "男",
            //         score: 90,
            //         classBelong: "三班",
            //         id: 19
            //     },
            //     {
            //         studentName: "三二",
            //         studentNum: "020",
            //         sex: "女",
            //         score: 84,
            //         classBelong: "三班",
            //         id: 20
            //     },
            //     {
            //         studentName: "三三",
            //         studentNum: "021",
            //         sex: "男",
            //         score: 97,
            //         classBelong: "三班",
            //         id: 21
            //     },
            //     {
            //         studentName: "三四",
            //         studentNum: "022",
            //         sex: "女",
            //         score: 73,
            //         classBelong: "三班",
            //         id: 22
            //     },
            //     {
            //         studentName: "三五",
            //         studentNum: "023",
            //         sex: "男",
            //         score: 88,
            //         classBelong: "三班",
            //         id: 23
            //     },
            //     {
            //         studentName: "四一",
            //         studentNum: "024",
            //         sex: "男",
            //         score: 76,
            //         classBelong: "四班",
            //         id: 24
            //     },
            //     {
            //         studentName: "四二",
            //         studentNum: "025",
            //         sex: "女",
            //         score: 92,
            //         classBelong: "四班",
            //         id: 25
            //     },
            //     {
            //         studentName: "四三",
            //         studentNum: "026",
            //         sex: "男",
            //         score: 85,
            //         classBelong: "四班",
            //         id: 26
            //     },
            //     {
            //         studentName: "四四",
            //         studentNum: "027",
            //         sex: "女",
            //         score: 79,
            //         classBelong: "四班",
            //         id: 27
            //     },
            //     {
            //         studentName: "四五",
            //         studentNum: "028",
            //         sex: "男",
            //         score: 91,
            //         classBelong: "四班",
            //         id: 28
            //     },
            //     {
            //         studentName: "四六",
            //         studentNum: "029",
            //         sex: "女",
            //         score: 83,
            //         classBelong: "四班",
            //         id: 29
            //     },
            //     {
            //         studentName: "四七",
            //         studentNum: "030",
            //         sex: "男",
            //         score: 77,
            //         classBelong: "四班",
            //         id: 30
            //     },
            //     {
            //         studentName: "五一",
            //         studentNum: "031",
            //         sex: "男",
            //         score: 94,
            //         classBelong: "五班",
            //         id: 31
            //     },
            //     {
            //         studentName: "五二",
            //         studentNum: "032",
            //         sex: "女",
            //         score: 80,
            //         classBelong: "五班",
            //         id: 32
            //     },
            //     {
            //         studentName: "五三",
            //         studentNum: "033",
            //         sex: "男",
            //         score: 87,
            //         classBelong: "五班",
            //         id: 33
            //     },
            //     {
            //         studentName: "五四",
            //         studentNum: "034",
            //         sex: "女",
            //         score: 76,
            //         classBelong: "五班",
            //         id: 34
            //     },
            //     {
            //         studentName: "五五",
            //         studentNum: "035",
            //         sex: "男",
            //         score: 89,
            //         classBelong: "五班",
            //         id: 35
            //     },
            //     {
            //         studentName: "五六",
            //         studentNum: "036",
            //         sex: "女",
            //         score: 83,
            //         classBelong: "五班",
            //         id: 36
            //     },
            //     {
            //         studentName: "六一",
            //         studentNum: "037",
            //         sex: "女",
            //         score: 91,
            //         classBelong: "六班",
            //         id: 37
            //     },
            //     {
            //         studentName: "六二",
            //         studentNum: "038",
            //         sex: "男",
            //         score: 85,
            //         classBelong: "六班",
            //         id: 38
            //     },
            //     {
            //         studentName: "六三",
            //         studentNum: "039",
            //         sex: "女",
            //         score: 79,
            //         classBelong: "六班",
            //         id: 39
            //     },
            //     {
            //         studentName: "六四",
            //         studentNum: "040",
            //         sex: "男",
            //         score: 93,
            //         classBelong: "六班",
            //         id: 40
            //     },
            //     {
            //         studentName: "六五",
            //         studentNum: "041",
            //         sex: "女",
            //         score: 77,
            //         classBelong: "六班",
            //         id: 41
            //     },
            //     {
            //         studentName: "六六",
            //         studentNum: "042",
            //         sex: "男",
            //         score: 88,
            //         classBelong: "六班",
            //         id: 42
            //     },
            //     {
            //         studentName: "七一",
            //         studentNum: "043",
            //         sex: "男",
            //         score: 83,
            //         classBelong: "七班",
            //         id: 43
            //     },
            //     {
            //         studentName: "七二",
            //         studentNum: "044",
            //         sex: "女",
            //         score: 76,
            //         classBelong: "七班",
            //         id: 44
            //     },
            //     {
            //         studentName: "七三",
            //         studentNum: "045",
            //         sex: "男",
            //         score: 90,
            //         classBelong: "七班",
            //         id: 45
            //     },
            //     {
            //         studentName: "七四",
            //         studentNum: "046",
            //         sex: "女",
            //         score: 84,
            //         classBelong: "七班",
            //         id: 46
            //     },
            //     {
            //         studentName: "七五",
            //         studentNum: "047",
            //         sex: "男",
            //         score: 92,
            //         classBelong: "七班",
            //         id: 47
            //     },
            //     {
            //         studentName: "七六",
            //         studentNum: "048",
            //         sex: "女",
            //         score: 78,
            //         classBelong: "七班",
            //         id: 48
            //     },
            //     {
            //         studentName: "七七",
            //         studentNum: "049",
            //         sex: "男",
            //         score: 86,
            //         classBelong: "七班",
            //         id: 49
            //     },
            //     {
            //         studentName: "七八",
            //         studentNum: "050",
            //         sex: "女",
            //         score: 80,
            //         classBelong: "七班",
            //         id: 50
            //     },
            //     {
            //         studentName: "七九",
            //         studentNum: "051",
            //         sex: "男",
            //         score: 89,
            //         classBelong: "七班",
            //         id: 51
            //     }, {
            //         studentName: "八一",
            //         studentNum: "052",
            //         sex: "男",
            //         score: 79,
            //         classBelong: "八班",
            //         id: 52
            //     },
            //     {
            //         studentName: "八二",
            //         studentNum: "053",
            //         sex: "女",
            //         score: 83,
            //         classBelong: "八班",
            //         id: 53
            //     },
            //     {
            //         studentName: "八三",
            //         studentNum: "054",
            //         sex: "男",
            //         score: 75,
            //         classBelong: "八班",
            //         id: 54
            //     },
            //     {
            //         studentName: "八四",
            //         studentNum: "055",
            //         sex: "女",
            //         score: 88,
            //         classBelong: "八班",
            //         id: 55
            //     },
            //     {
            //         studentName: "八五",
            //         studentNum: "056",
            //         sex: "男",
            //         score: 81,
            //         classBelong: "八班",
            //         id: 56
            //     },
            //     {
            //         studentName: "八六",
            //         studentNum: "057",
            //         sex: "女",
            //         score: 84,
            //         classBelong: "八班",
            //         id: 57
            //     },
            //     {
            //         studentName: "八七",
            //         studentNum: "058",
            //         sex: "男",
            //         score: 77,
            //         classBelong: "八班",
            //         id: 58
            //     }, {
            //         studentName: "九一",
            //         studentNum: "059",
            //         sex: "女",
            //         score: 82,
            //         classBelong: "九班",
            //         id: 59
            //     },
            //     {
            //         studentName: "九二",
            //         studentNum: "060",
            //         sex: "男",
            //         score: 87,
            //         classBelong: "九班",
            //         id: 60
            //     },
            //     {
            //         studentName: "九三",
            //         studentNum: "061",
            //         sex: "女",
            //         score: 79,
            //         classBelong: "九班",
            //         id: 61
            //     },
            //     {
            //         studentName: "九四",
            //         studentNum: "062",
            //         sex: "男",
            //         score: 91,
            //         classBelong: "九班",
            //         id: 62
            //     },
            //     {
            //         studentName: "九五",
            //         studentNum: "063",
            //         sex: "女",
            //         score: 76,
            //         classBelong: "九班",
            //         id: 63
            //     },
            //     {
            //         studentName: "九六",
            //         studentNum: "064",
            //         sex: "男",
            //         score: 89,
            //         classBelong: "九班",
            //         id: 64
            //     }, {
            //         studentName: "十一",
            //         studentNum: "065",
            //         sex: "男",
            //         score: 88,
            //         classBelong: "十班",
            //         id: 65
            //     },
            //     {
            //         studentName: "十二",
            //         studentNum: "066",
            //         sex: "女",
            //         score: 82,
            //         classBelong: "十班",
            //         id: 66
            //     },
            //     {
            //         studentName: "十三",
            //         studentNum: "067",
            //         sex: "男",
            //         score: 76,
            //         classBelong: "十班",
            //         id: 67
            //     },
            //     {
            //         studentName: "十四",
            //         studentNum: "068",
            //         sex: "女",
            //         score: 91,
            //         classBelong: "十班",
            //         id: 68
            //     },
            //     {
            //         studentName: "十五",
            //         studentNum: "069",
            //         sex: "男",
            //         score: 84,
            //         classBelong: "十班",
            //         id: 69
            //     }
            // ],
            studentsData: [
                {
                    studentName: "一一",
                    studentNum: "001",
                    sex: "男",
                    score: 100,
                    classBelong: "一班",
                    id: 1,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一二",
                    studentNum: "002",
                    sex: "女",
                    score: 78,
                    classBelong: "一班",
                    id: 2,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一三",
                    studentNum: "003",
                    sex: "男",
                    score: 91,
                    classBelong: "一班",
                    id: 3,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一四",
                    studentNum: "004",
                    sex: "女",
                    score: 85,
                    classBelong: "一班",
                    id: 4,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一五",
                    studentNum: "005",
                    sex: "男",
                    score: 92,
                    classBelong: "一班",
                    id: 5,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一六",
                    studentNum: "006",
                    sex: "女",
                    score: 76,
                    classBelong: "一班",
                    id: 6,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一七",
                    studentNum: "007",
                    sex: "男",
                    score: 88,
                    classBelong: "一班",
                    id: 7,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一八",
                    studentNum: "008",
                    sex: "女",
                    score: 95,
                    classBelong: "一班",
                    id: 8,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一九",
                    studentNum: "009",
                    sex: "男",
                    score: 83,
                    classBelong: "一班",
                    id: 9,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "一十",
                    studentNum: "010",
                    sex: "女",
                    score: 87,
                    classBelong: "一班",
                    id: 10,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二一",
                    studentNum: "011",
                    sex: "女",
                    score: 93,
                    classBelong: "二班",
                    id: 11,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二二",
                    studentNum: "012",
                    sex: "男",
                    score: 82,
                    classBelong: "二班",
                    id: 12,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二三",
                    studentNum: "013",
                    sex: "女",
                    score: 77,
                    classBelong: "二班",
                    id: 13,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二四",
                    studentNum: "014",
                    sex: "男",
                    score: 89,
                    classBelong: "二班",
                    id: 14,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二五",
                    studentNum: "015",
                    sex: "女",
                    score: 94,
                    classBelong: "二班",
                    id: 15,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二六",
                    studentNum: "016",
                    sex: "男",
                    score: 81,
                    classBelong: "二班",
                    id: 16,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二七",
                    studentNum: "017",
                    sex: "女",
                    score: 86,
                    classBelong: "二班",
                    id: 17,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "二八",
                    studentNum: "018",
                    sex: "男",
                    score: 79,
                    classBelong: "二班",
                    id: 18,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "三一",
                    studentNum: "019",
                    sex: "男",
                    score: 90,
                    classBelong: "三班",
                    id: 19,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "三二",
                    studentNum: "020",
                    sex: "女",
                    score: 84,
                    classBelong: "三班",
                    id: 20,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "三三",
                    studentNum: "021",
                    sex: "男",
                    score: 97,
                    classBelong: "三班",
                    id: 21,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "三四",
                    studentNum: "022",
                    sex: "女",
                    score: 73,
                    classBelong: "三班",
                    id: 22,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "三五",
                    studentNum: "023",
                    sex: "男",
                    score: 88,
                    classBelong: "三班",
                    id: 23,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四一",
                    studentNum: "024",
                    sex: "男",
                    score: 76,
                    classBelong: "四班",
                    id: 24,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四二",
                    studentNum: "025",
                    sex: "女",
                    score: 92,
                    classBelong: "四班",
                    id: 25,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四三",
                    studentNum: "026",
                    sex: "男",
                    score: 85,
                    classBelong: "四班",
                    id: 26,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四四",
                    studentNum: "027",
                    sex: "女",
                    score: 79,
                    classBelong: "四班",
                    id: 27,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四五",
                    studentNum: "028",
                    sex: "男",
                    score: 91,
                    classBelong: "四班",
                    id: 28,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四六",
                    studentNum: "029",
                    sex: "女",
                    score: 83,
                    classBelong: "四班",
                    id: 29,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "四七",
                    studentNum: "030",
                    sex: "男",
                    score: 77,
                    classBelong: "四班",
                    id: 30,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "五一",
                    studentNum: "031",
                    sex: "男",
                    score: 94,
                    classBelong: "五班",
                    id: 31,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "五二",
                    studentNum: "032",
                    sex: "女",
                    score: 80,
                    classBelong: "五班",
                    id: 32,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "五三",
                    studentNum: "033",
                    sex: "男",
                    score: 87,
                    classBelong: "五班",
                    id: 33,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "五四",
                    studentNum: "034",
                    sex: "女",
                    score: 76,
                    classBelong: "五班",
                    id: 34,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "五五",
                    studentNum: "035",
                    sex: "男",
                    score: 89,
                    classBelong: "五班",
                    id: 35,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "五六",
                    studentNum: "036",
                    sex: "女",
                    score: 83,
                    classBelong: "五班",
                    id: 36,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "六一",
                    studentNum: "037",
                    sex: "女",
                    score: 91,
                    classBelong: "六班",
                    id: 37,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "六二",
                    studentNum: "038",
                    sex: "男",
                    score: 85,
                    classBelong: "六班",
                    id: 38,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "六三",
                    studentNum: "039",
                    sex: "女",
                    score: 79,
                    classBelong: "六班",
                    id: 39,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "六四",
                    studentNum: "040",
                    sex: "男",
                    score: 93,
                    classBelong: "六班",
                    id: 40,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "六五",
                    studentNum: "041",
                    sex: "女",
                    score: 77,
                    classBelong: "六班",
                    id: 41,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "六六",
                    studentNum: "042",
                    sex: "男",
                    score: 88,
                    classBelong: "六班",
                    id: 42,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七一",
                    studentNum: "043",
                    sex: "男",
                    score: 83,
                    classBelong: "七班",
                    id: 43,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七二",
                    studentNum: "044",
                    sex: "女",
                    score: 76,
                    classBelong: "七班",
                    id: 44,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七三",
                    studentNum: "045",
                    sex: "男",
                    score: 90,
                    classBelong: "七班",
                    id: 45,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七四",
                    studentNum: "046",
                    sex: "女",
                    score: 84,
                    classBelong: "七班",
                    id: 46,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七五",
                    studentNum: "047",
                    sex: "男",
                    score: 92,
                    classBelong: "七班",
                    id: 47,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七六",
                    studentNum: "048",
                    sex: "女",
                    score: 78,
                    classBelong: "七班",
                    id: 48,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七七",
                    studentNum: "049",
                    sex: "男",
                    score: 86,
                    classBelong: "七班",
                    id: 49,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七八",
                    studentNum: "050",
                    sex: "女",
                    score: 80,
                    classBelong: "七班",
                    id: 50,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "七九",
                    studentNum: "051",
                    sex: "男",
                    score: 89,
                    classBelong: "七班",
                    id: 51,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八一",
                    studentNum: "052",
                    sex: "男",
                    score: 79,
                    classBelong: "八班",
                    id: 52,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八二",
                    studentNum: "053",
                    sex: "女",
                    score: 83,
                    classBelong: "八班",
                    id: 53,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八三",
                    studentNum: "054",
                    sex: "男",
                    score: 75,
                    classBelong: "八班",
                    id: 54,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八四",
                    studentNum: "055",
                    sex: "女",
                    score: 88,
                    classBelong: "八班",
                    id: 55,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八五",
                    studentNum: "056",
                    sex: "男",
                    score: 81,
                    classBelong: "八班",
                    id: 56,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八六",
                    studentNum: "057",
                    sex: "女",
                    score: 84,
                    classBelong: "八班",
                    id: 57,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "八七",
                    studentNum: "058",
                    sex: "男",
                    score: 77,
                    classBelong: "八班",
                    id: 58,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "九一",
                    studentNum: "059",
                    sex: "女",
                    score: 82,
                    classBelong: "九班",
                    id: 59,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "九二",
                    studentNum: "060",
                    sex: "男",
                    score: 87,
                    classBelong: "九班",
                    id: 60,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "九三",
                    studentNum: "061",
                    sex: "女",
                    score: 79,
                    classBelong: "九班",
                    id: 61,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "九四",
                    studentNum: "062",
                    sex: "男",
                    score: 91,
                    classBelong: "九班",
                    id: 62,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "九五",
                    studentNum: "063",
                    sex: "女",
                    score: 76,
                    classBelong: "九班",
                    id: 63,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "九六",
                    studentNum: "064",
                    sex: "男",
                    score: 89,
                    classBelong: "九班",
                    id: 64,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "十一",
                    studentNum: "065",
                    sex: "男",
                    score: 88,
                    classBelong: "十班",
                    id: 65,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "十二",
                    studentNum: "066",
                    sex: "女",
                    score: 82,
                    classBelong: "十班",
                    id: 66,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "十三",
                    studentNum: "067",
                    sex: "男",
                    score: 76,
                    classBelong: "十班",
                    id: 67,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "十四",
                    studentNum: "068",
                    sex: "女",
                    score: 91,
                    classBelong: "十班",
                    id: 68,
                    address: "河南省郑州市中原区"
                },
                {
                    studentName: "十五",
                    studentNum: "069",
                    sex: "男",
                    score: 84,
                    classBelong: "十班",
                    id: 69,
                    address: "河南省郑州市中原区"
                }
            ],
            /**
             * 职工管理,工作（班主任（classTeacher），年级主任（gradeDean），普通教师(generalTeacher)，
             * 院长(dean)，校长(principal)，清洁工(dustMan)，厨师(chef)，宿管(dormManger)）
             * @typedef {Object} EmployeeData
             * @property {number} id - 员工ID
             * @property {string} employeeName - 员工姓名
             * @property {string} sex - 员工性别
             * @property {string} job - 员工职位
             * @property {number} age - 员工年龄
             * @property {string} address - 员工地址
             */
            employeeManage: [
                {
                    id: 1,
                    employeeName: "张三",
                    sex: "男",
                    job: "classTeacher",
                    age: 85,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 2,
                    employeeName: "李四",
                    sex: "男",
                    job: "classTeacher",
                    age: 90,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 3,
                    employeeName: "王五",
                    sex: "男",
                    job: "classTeacher",
                    age: 44,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 4,
                    employeeName: "赵六",
                    sex: "男",
                    job: "classTeacher",
                    age: 59,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 5,
                    employeeName: "刘七",
                    sex: "男",
                    job: "classTeacher",
                    age: 62,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 6,
                    employeeName: "孙八",
                    sex: "男",
                    job: "classTeacher",
                    age: 39,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 7,
                    employeeName: "周九",
                    sex: "男",
                    job: "classTeacher",
                    age: 54,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 8,
                    employeeName: "郑十",
                    sex: "男",
                    job: "classTeacher",
                    age: 46,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 9,
                    employeeName: "钱十一",
                    sex: "男",
                    job: "classTeacher",
                    age: 50,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 10,
                    employeeName: "吴十二",
                    sex: "男",
                    job: "classTeacher",
                    age: 64,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 11,
                    employeeName: "张明",
                    sex: "男",
                    job: "gradeDean",
                    age: 77,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 12,
                    employeeName: "李晓",
                    sex: "女",
                    job: "generalTeacher",
                    age: 20,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 13,
                    employeeName: "赵芳",
                    sex: "女",
                    job: "generalTeacher",
                    age: 58,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 14,
                    employeeName: "刘洋",
                    sex: "男",
                    job: "generalTeacher",
                    age: 41,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 15,
                    employeeName: "陈静",
                    sex: "女",
                    job: "generalTeacher",
                    age: 35,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 16,
                    employeeName: "杨华",
                    sex: "男",
                    job: "generalTeacher",
                    age: 24,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 17,
                    employeeName: "周婷",
                    sex: "女",
                    job: "generalTeacher",
                    age: 28,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 18,
                    employeeName: "吴强",
                    sex: "男",
                    job: "generalTeacher",
                    age: 89,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 19,
                    employeeName: "钱彦",
                    sex: "男",
                    job: "dean",
                    age: 11,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 20,
                    employeeName: "孙勇",
                    sex: "男",
                    job: "principal",
                    age: 99,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 21,
                    employeeName: "张秀",
                    sex: "男",
                    job: "dustMan",
                    age: 51,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 22,
                    employeeName: "陈霞",
                    sex: "女",
                    job: "dustMan",
                    age: 26,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 23,
                    employeeName: "李军",
                    sex: "男",
                    job: "dustMan",
                    age: 43,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 24,
                    employeeName: "王萍",
                    sex: "女",
                    job: "chef",
                    age: 43,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 25,
                    employeeName: "张鑫",
                    sex: "男",
                    job: "chef",
                    age: 25,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 26,
                    employeeName: "刘娟",
                    sex: "女",
                    job: "chef",
                    age: 25,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 27,
                    employeeName: "张阳",
                    sex: "女",
                    job: "chef",
                    age: 35,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 28,
                    employeeName: "陈华",
                    sex: "男",
                    job: "dormManger",
                    age: 30,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 29,
                    employeeName: "杨峰",
                    sex: "男",
                    job: "dormManger",
                    age: 30,
                    address: "河南省郑州市高新区"
                },
                {
                    id: 30,
                    employeeName: "钱琳",
                    sex: "男",
                    job: "dormManger",
                    age: 85,
                    address: "河南省郑州市高新区"
                }
            ],
            /**
             * 职位管理
             * @typedef {Object} JobData
             * @property {number} id - 职位ID
             * @property {string} jobName - 职位名称，例如 "classTeacher" 表示班主任
             * @property {number} jobNum - 职位人数
             */
            jobManage: [
                {
                    id: 1,
                    jobName: "classTeacher",//班主任
                    jobNum: 10
                }, {
                    id: 2,
                    jobName: "gradeDean",//年级主任
                    jobNum: 1
                }, {
                    id: 3,
                    jobName: "dean",//院长
                    jobNum: 1
                }, {
                    id: 4,
                    jobName: "principal",//校长
                    jobNum: 1
                }, {
                    id: 5,
                    jobName: "dustMan",//清洁工
                    jobNum: 3
                }, {
                    id: 6,
                    jobName: "chef",//厨师
                    jobNum: 4
                }, {
                    id: 7,
                    jobName: "dormManger",//宿管
                    jobNum: 3
                }, {
                    id: 8,
                    jobName: "generalTeacher",//普通教师
                    jobNum: 7
                }
            ]
        };
    },
    created() {
        /**
         * 同学数据StudentsData
         * @type {string}
         */
        let getStudentsData = localStorage.getItem("studentsDataKeyForm");
        this.getStudentsData = JSON.parse(getStudentsData);
        if (this.getStudentsData) {
            this.studentsData = JSON.parse(getStudentsData);
        }
        /**
         * 班级数据
         * @type {string}
         */
        let getClassData = localStorage.getItem("classDataKeyForm");
        this.getClassData = JSON.parse(getClassData);
        if (this.getClassData) {
            this.classData = JSON.parse(getClassData);
        }
        /**
         * 职工数据
         * @type {string}
         */
        let getEmployee = localStorage.getItem("employeeManageKeyForm");
        this.getEmployee = JSON.parse(getEmployee);
        if (this.getEmployee) {
            this.employeeManage = JSON.parse(getEmployee);
        }
        /**
         * 职位数据
         * @type {string}
         */
        let getJobManage = localStorage.getItem("jobManageKeyForm");
        this.getJobManage = JSON.parse(getJobManage);
        if (this.getJobManage) {
            this.jobManage = JSON.parse(getJobManage);
        }

    }

};