<template>
  <a-card hoverable style="width: 600px;margin:20px auto" title="南通市通州区川姜镇卫生院"
          :headStyle="{color:'purple',fontSize:'18px'}">
    <img
      slot="cover"
      alt="example"
      src="../assets/hospital.jpg"
    />
    <a-card-meta >
      <template slot="description">
        <a-descriptions title="开发所需框架及运行环境" :column="2" bordered layout="vertical" size="small">
    <a-descriptions-item label="前台框架" >
      <a-badge color="green" text="Ant design " />
    </a-descriptions-item>
    <a-descriptions-item label="后端框架">
      <a-badge color="cyan" text="Spring + SpringMvc + MyBatis" />
    </a-descriptions-item>
    <a-descriptions-item label="数据库">
      <a-badge color="blue" text="Mysql" />
    </a-descriptions-item>
          <a-descriptions-item label="运行环境">
      <a-badge color="pink" text="java8+Apache" />
    </a-descriptions-item>

  </a-descriptions>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
