import accounting from "accounting";

let CfheadColumn=[
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   key: 'name',
  //   scopedSlots: { customRender: 'name' },
  // },
  {
    title: '发药时间',
    dataIndex: 'opertime',
    key: 'opertime',
    width:150
  },
  {
    title: '处方类型',
    dataIndex: 'cftype',
    key: 'cftype',
    ellipsis: true,
  },
  {
    title: '就诊号',
    dataIndex: 'pid',
    key: 'pid',
    ellipsis: true,
  },
  {
    title: '患者',
    dataIndex: 'patient',
    key: 'patient',
    ellipsis: true,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    ellipsis: true,
  },
  {
    title: '费别',
    dataIndex: 'feibie',
    key: 'feibie',
    ellipsis: true,
  },
  {
    title: '诊断',
    dataIndex: 'disease',
    key: 'disease',
    ellipsis: true,
    customRender:function(text,record){
      if(record.disease2){
        return text+","+record.disease2
      }
      return text;

    }
  },
  // {
  //   title: '辅助诊断',
  //   dataIndex: 'disease2',
  //   key: 'disease2',
  //   ellipsis: true,
  // },
  {
    title: '医生',
    dataIndex: 'doctor',
    key: 'doctor',
    ellipsis: true,
  },
  {
    title: '金额',
    dataIndex: 'totalprice',
    key: 'totalprice',
    ellipsis: true,
    customRender:function(text,record,index){
      return accounting.formatMoney(text,"￥",2,',','.');
    }
  },
];

export default CfheadColumn
