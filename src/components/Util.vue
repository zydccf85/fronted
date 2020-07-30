<template>
  <div class="p-2">

    <Collapse >
        <Panel name="1">
            儿童用药剂量
          <div slot="content" class="m-1 p-1">
            <Tabs value="name1">
              <TabPane label="简易快速计算法" name="name1">
                <Alert type="info" show-icon>此法适用于药品说明书未规定小儿剂量,忘记按公斤体重计算的剂量</Alert>
                <card title="公式:1岁以内剂量:成人剂量*0.01*(月龄+3);1岁以上剂量:成人剂量*0.05*(年龄+2)">

                  <div slot="extra">
                    <Tag checkable color="primary" type="border">成人剂量:{{quick.dosage}}</Tag>
                      <Tag checkable color="success" type="border">{{ageName}}:{{quick.age}}</Tag>
                     <Tag checkable color="error" type="border">儿童剂量:{{quick.result}}</Tag>
                  </div>
                <i-form :label-width="80" inline>
                  <form-item label="类型">
                    <RadioGroup v-model="quick.types">
                      <Radio label="monthAge" border>
                          <span>月龄</span>
                      </Radio>
                      <Radio label="yearAge" border>
                          <span>年龄</span>
                      </Radio>
                  </RadioGroup>
                  </form-item>
                  <form-item label="成人剂量">
                    <i-input v-model.number="quick.dosage"/>
                  </form-item>
                  <form-item :label="ageName">
                    <InputNumber :min="1" :max="100" v-model.number="quick.age"/>
                  </form-item>
                  <FormItem>
                     <Button type="primary" @click="handleCount">计算</Button>
                   </FormItem>

                </i-form>
                  <div class="text-center">

                    </div>
                </card>
              </TabPane>
              <TabPane label="根据小儿体重计算" name="name2">

              </TabPane>
              <TabPane label="按公斤折算剂量" name="name3">{{types}}</TabPane>
              <TabPane label="根据体表面积计算" name="name4">标签三的内容</TabPane>
              <TabPane label="根据成人剂量折算" name="name5">标签三的内容</TabPane>
           </Tabs>
          </div>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
    </Collapse>
  </div>
 </template>

<script>
    import Form from "bootstrap-vue/esm/mixins/form";
    export default {
        name: "Util",
      components: {Form},
      data(){
          return {
            quick:{
              types:'monthAge',
              dosage:'',
               age:1,
              result:undefined
            }
          }
        },
      methods:{
          handleCount(){
              if(this.quick.types=='monthAge'){
                this.quick.result=this._.ceil(this.quick.dosage * 0.01*(this.quick.age+3),2)
              }else if(this.quick.types=='yearAge'){
                this.quick.result=this.quick.dosage * 0.05*(this.quick.age+2)
             }
          }

      },
      computed:{
          ageName(){
            return this.quick.types=='monthAge'?'月龄':'年龄'
          }
      }
    }
</script>

<style scoped>

</style>
