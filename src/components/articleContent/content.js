import axios from 'axios'
import drugFa from 'raw-loader!../../../static/drugFa'
import drugFa02 from 'raw-loader!../../../static/drugFa02'
import fjyp from 'raw-loader!../../../static/fjyp'
import me from 'raw-loader!../../../static/metest'

let mydata =[
  {
    name:'中华人民共和国药品法',
    content:drugFa,
    nav:['目录','总　　则','药品研制和注册','药品上市许可持有人',
      '药品生产','药品经营','医疗机构药事管理','药品上市后管理','价格和广告',
    '药品储备和供应','监督管理','法律责任','附则']
  },
   {
    name:'中华人民共和国药品管理法实施条例',
    content:drugFa02,
    nav:['总　　则','药品生产企业管理','药品经营企业管理','医疗机构的药剂管理','药品管理','药品包装管理','药品的价格和广告管理','药品监督',
      '法律责任','附 则']
  },
    {
    name:'麻醉药品和精神药品管理条例',
      content:fjyp,
      nav:['总　则','种植、实验研究和生产','经　营','使　用','储　存','运　输','审批程序和监督管理','法律责任', '附 则']
  }
]
// axios.get('static/drugFa').then(response=>mydata[0].content=response.data);
// axios.get('static/drugFa02').then(response=>mydata[1].content=response.data);
// axios.get('static/fjyp').then(response=>mydata[2].content=response.data);


export default mydata
