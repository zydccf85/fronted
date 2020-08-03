import  accounting from "accounting"
let employeeColumn=[
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   key: 'name',
  //   scopedSlots: { customRender: 'name' },
  // },
  {
    title: '工号',
    dataIndex: 'eid',
    key: 'eid',
  },
  {
    title: '身份证号',
    dataIndex: 'cardId',
    key: 'cardId',
    ellipsis: true,
    width:180
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    ellipsis: true,
  },
  {
    title: '居住地址',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },

  {
    title: '职称',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
    // customRender:function(text,record,index){
    //   return accounting.formatMoney(text,"￥",2,',','.');
    // }
  },
  // {
  //   title: '搜索码',
  //   dataIndex: 'searchCode',
  //   key: 'searchCode',
  //   ellipsis: true,
  // },
  {
    title: '电话号码',
    dataIndex: 'phone',
    key: 'phone',
    ellipsis: true,
  },
  {
    title: '科室',
    dataIndex: 'department',
    key: 'department',
    ellipsis: true,
  },
   {
    title: '照片',
    dataIndex: 'pic',
    key: 'pic',
    ellipsis: true,
  },
];
employeeColumn.forEach(item=>item.align='center');
export default employeeColumn
