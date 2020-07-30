<template>
  <b-container>
     <b-tabs content-class="mt-2">
    <b-tab title="概览" active>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!--<b-carousel-slide v-for="(item,index) in carouselPic"-->
        <!--caption="First slide"-->
        <!--text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
        <!--:img-src="'static/hospitalImage/'+item.name"-->
      <!--&gt;</b-carousel-slide>-->
          <b-carousel-slide v-for="(item,index) in carouselPic">
        <template v-slot:img>
          <img
            class="d-block w-100 "
            width="1024"
            height="580"
            :src=" 'static/hospitalImage/'+item.name"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>

    </b-tab>
    <b-tab title="职工一览表">
      <div class="text-center   d-flex justify-content-between p-2">
    <b-form-file ref="myfile"
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      enctype='multipart/form-data'
    ></b-form-file>
    <b-button @click="upload">上传</b-button>
    <b-avatar icon="people-fill" variant="primary" size="lg" :badge="filterResult.length" badge-variant="danger"></b-avatar>
    <h3 class="text-primary"> 职工一览表</h3>
    <b-nav pills class="text-center">
      <!--<b-nav-item href="#1" active>Link 1</b-nav-item>-->
      <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
        <b-form-input  class="mr-1" v-model="keyword" lazy trim placeholder="搜索姓名"></b-form-input>
        <!--<b-button type="button" @click="handleFilter" variant="info">搜索</b-button>-->
      </b-nav-form>
    </b-nav>
  </div>
  <div class="row m-2">
  <b-card v-for="(item,index) in filterResult" :key="index"
    :title="item.title"
          sub-title="社区副主任医师"
    :img-src="getSrc(item.src)"
    img-alt="Image"
    img-top
    tag="article"
    style=""
    class="col-2 text-center"
  >
    <!--<b-card-text style="font-size: .5rem">-->
      <!--公共卫生副主任医师-->
    <!--</b-card-text>-->
    <!--<b-avatar variant="info" :src="getSrc(item.src)"></b-avatar>-->
    <b-button href="#" variant="outline-primary" class="mt-1" block @click="showDialog(item)">详情</b-button>
  </b-card>
</div>
    <b-modal ref="my-modal" hide-footer title="职工详情" >
      <b-row  >
        <b-col><b-img :src="getSrc(activePicture.src)" rounded="circle" fluid alt="Fluid image"></b-img></b-col>
        <b-col><h3>{{activePicture.title}}</h3></b-col>
      </b-row>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>
    </b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>

    </b-container>
</template>

<script>
  import request from '../network/index'
    export default {
        name: "Home",
        data(){
          return{
            current: null,
            file:null,
            mm:'',
            keyword:'',
            open:false,
            isActive:false,
            menus:[
              {isActive:true,title:'药房'},
              {isActive:false,title:'处方'},
              {isActive:false,title:'人员'},
              {isActive:false,title:'配置'},
              {isActive:false,title:'其它'},
            ],
            carouselPic:[
              {name:'20200706182714.jpg',text:'',caption:'输液大厅'},
              {name:'20200706182737.jpg',text:'',caption:'门诊药房'},
              {name:'20200706182757.jpg',text:'',caption:'配液间'},
              {name:'20200706182806.jpg',text:'',caption:'操作台'},
              {name:'20200706182817.jpg',text:'',caption:''},
              {name:'20200706182825.jpg',text:'',caption:''},
              {name:'20200706182835.jpg',text:'',caption:''},
              {name:'20200706182846.jpg',text:'',caption:''},
              {name:'20200706182855.jpg',text:'',caption:''},
              {name:'20200706182906.jpg',text:'',caption:''},
              {name:'20200706182917.jpg',text:'',caption:''},
            ],
            pictures:[
              {src:'0A9A6950',title:'徐邱楼'},{src:'0A9A6951',title:'姜三文'},{src:'0A9A6954',title:'潘小琴'},
              {src:'0A9A6955',title:'胡燕'},{src:'0A9A6958',title:'胡云丹'},{src:'0A9A6959',title:'胡培红'},
              {src:'0A9A6962',title:'陆惠彬'},{src:'0A9A6963',title:'王玉蓉'},{src:'0A9A6966',title:'陆惠琳'},
              {src:'0A9A6967',title:'徐春华'},{src:'0A9A6972',title:'蔡晓星'},{src:'0A9A6974',title:'虞晓菲'},
              {src:'0A9A6976',title:'丁玲丽'},{src:'0A9A6978',title:'杨小金'},{src:'0A9A6982',title:'倪晓备'},
              {src:'0A9A6984',title:'钱柳'},{src:'0A9A6986',title:'汤婷婷'},{src:'0A9A6990',title:'祁雪燕'},
              {src:'0A9A6992',title:'陈春峰'},{src:'0A9A6994',title:'邱淑萍'},{src:'0A9A6995',title:'张兰'},
              {src:'0A9A6998',title:'袁卫虹'},{src:'0A9A7000',title:'盛曙兰'},{src:'0A9A7001',title:'曹鹏'},
              {src:'0A9A7004',title:'玺国喜'},{src:'0A9A7006',title:'周小娥'},{src:'0A9A7101',title:'陈刚'},
              {src:'0A9A7102',title:'成小平'},{src:'0A9A7108',title:'徐敏'}

            ],
            activePicture:{
              src:'',
              title:''
            },
          }
        },
        methods:{
          handleClick(index){
            this.menus.forEach((value,ind)=>{
              if(ind==index ){
                value.isActive=true
              }else{
                value.isActive=false;
              }
            })

          },
          showDialog(item){
            console.log(item)
            this.activePicture = item;
            this.$refs["my-modal"].show();
          },
          getSrc(src){
            console.log("static/pictures/"+src)
            // return "../assets/pictures/"+src+".JPG"

            return  "static/pictures/"+src+".JPG"
          },
          mysort(){
            this.pictures = this._.sortBy(this.pictures,function(o){
              return o.title;
            });
          },
          upload(){
            console.log("upload")
            console.log(this.file)
            console.log(this.$refs.myfile)
            var da = new FormData();
            da.append("dUploadFile",this.file)

            request({
              url: '/springDemo/api/dFileLoad.do', method: 'post', data:da,headers: {
          'Content-Type': 'multipart/form-data',
        }}
            )}
        },
      computed:{
          filterResult(){
            if(this.keyword =='') return  this.pictures;
            return this.pictures.filter(val=>val.title.indexOf(this.keyword)>=0)
          }
      }
    }
</script>

<style scoped>

</style>
