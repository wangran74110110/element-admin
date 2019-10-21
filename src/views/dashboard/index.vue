<template>
  <div class="dashboard-container">
    <h1>欢迎: {{userBaseInfo}}</h1>
    <el-row :gutter="30">
      <el-col :span="6">
        <router-link :to="{name:'xyStudent'}">
          <el-card shadow="hover">
            <div slot="header">
              <span>
                <svg-icon icon-class="people" class-name="custom-class" />学员统计
              </span>
            </div>
            <p>总数量: {{userCount.count}}</p>
            <p>
              今日新增:
              <span style="color:red">{{userCountToday.count}}</span>
            </p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{name:'imgs'}">
          <el-card shadow="hover">
            <div slot="header">
              <span>
                <svg-icon icon-class="images" class-name="custom-class" />图片统计
              </span>
            </div>
            <p>总数量: {{imgCount.count}}</p>
            <p>
              今日新增:
              <span style="color:red">{{imgCountToday.count}}</span>
            </p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{name:'article'}">
          <el-card shadow="hover">
            <div slot="header">
              <span>
                <svg-icon icon-class="people" class-name="custom-class" />文章统计
              </span>
            </div>
            <p>总数量: {{newsCount.count}}</p>
            <p>
              今日新增:
              <span style="color:red">{{newsCountToday.count}}</span>
            </p>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <div class="echarts-1" id="echarts1"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { mapGetters } from "vuex";
import dashboardApi from "@/api/dashboard";
import { getToken } from "@/utils/myAuth";
export default {
  name: "Dashboard",
  data() {
    return {
      userCount: {},
      userCountToday: {},
      userCountByDay: [],
      imgCount: {},
      imgCountToday: {},
      imgCountByDay: [],
      newsCount: {},
      newsCountToday: {},
      newsCountByDay: []
    };
  },
  created() {
    // this.getBaseInfo();
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart1 = echarts.init(document.getElementById("echarts1"));
  },
  computed: {
    ...mapGetters(["name"]),
    userBaseInfo() {
      return getToken().user.username;
    },
    // 报表1 所需要的数据
    // chart1Data() {
    //   var xdata = [];
    //   var yseries = [];
    //   this.userCountByDay.forEach(item => {
    //     xdata.push(item.date);
    //     yseries.push(item.count);
    //   });
    //   return {
    //     xdata,
    //     yseries
    //   };
    // }
  },
  methods: {
    // getBaseInfo() {
    //   dashboardApi.getBaseInfo().then(res => {
    //     Object.assign(this.$data, res);

    //     this.initCharts();
    //   });
    // },
    // 初始化页面所有报表
  //   initCharts() {
  //     var xdata = [];
  //     var yseries = [];
  //     this.userCountByDay.forEach(item => {
  //       xdata.push(item.date);
  //       yseries.push(item.count);
  //     });
  //     this.myChart1.setOption({
  //       color: ['#3398DB'],
  //       title: {
  //         text: "学员录入统计"
  //       },
  //       tooltip: {},
  //       xAxis: {
  //         data: xdata,
  //         axisLabel:{
  //           rotate: 30
  //         }
  //       },
  //       yAxis: {},
  //       series: [
  //         {
  //           name: "销量",
  //           type: "bar",
  //           data: yseries
  //         }
  //       ]
  //     });
  //   }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.dashboard-container {
  .echarts-1 {
    width: 300px;
    height: 300px;
  }
}
</style>
