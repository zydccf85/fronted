import  accounting from "accounting"
let drugColumn=[
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   key: 'name',
  //   scopedSlots: { customRender: 'name' },
  // },
  {
    title: '编码',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '药品名称',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    width:180
  },
  {
    title: '规格',
    dataIndex: 'spci',
    key: 'spci',
    ellipsis: true,
  },
  {
    title: '剂型',
    dataIndex: 'form',
    key: 'form',
    ellipsis: true,
  },
  {
    title: '厂商',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    ellipsis: true,
  },
  {
    title: '单价',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    ellipsis: true,
    customRender:function(text,record,index){
      return accounting.formatMoney(text,"￥",2,',','.');
    }
  },
  // {
  //   title: '搜索码',
  //   dataIndex: 'searchCode',
  //   key: 'searchCode',
  //   ellipsis: true,
  // },
  {
    title: '分类',
    dataIndex: 'cate',
    key: 'cate',
    ellipsis: true,
  },
  {
    title: '性质分类',
    dataIndex: 'cata',
    key: 'cata',
    ellipsis: true,
  },
];
drugColumn.forEach(item=>item.align='center');
export default drugColumn
