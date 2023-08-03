<template>
  <div style="height: 100%;width: 100%">
    <div style="width: 100%;height: 78%;top: 12%;bottom: 10%;padding: 2% 0">
      <div style="height: 20%;width: 100%">

      </div>
      <el-row justify="space-around" style="margin: 2% 0;box-shadow: var(--el-box-shadow-light)" v-for="food in foodList" :key="food" v-show="food.number!==0">
        <el-col :span="4">
          <img src="../assets/rgsx/itemP.png" style="width: 100%">
        </el-col>
        <el-col :span="11" style="display:flex;">
          <div style="margin: auto 0">
            <span style="font-size: small">
            {{food.name}} x{{food.number}}
            </span>
          </div>
        </el-col>
        <el-col :span="5" style="text-align: center;display: flex">
          <div style="margin: auto 0 auto auto">
            {{food.totalPrice}}￥
          </div>
        </el-col>
      </el-row>

      <el-row justify="space-around" style="margin: 2% 0;box-shadow: var(--el-box-shadow-light)">
        <el-col :span="4">
        </el-col>
        <el-col :span="11" style="display:flex;">
          <div style="margin: auto 0">
            <span style="font-size: small">
              配送费
            </span>
          </div>
        </el-col>
        <el-col :span="5" style="text-align: center;display: flex">
          <div style="margin: auto 0 auto auto">
            {{deliveryPrice}}￥
          </div>
        </el-col>
      </el-row>

      <el-row justify="space-around" style="margin: 2% 0;box-shadow: var(--el-box-shadow-light)">
        <el-col :span="4">
        </el-col>
        <el-col :span="11" style="display:flex;">
          <div style="margin: auto 0">
            <span style="font-size: small">
              总计
            </span>
          </div>
        </el-col>
        <el-col :span="5" style="text-align: center;display: flex">
          <div style="margin: auto 0 auto auto">
            {{totalPrice+deliveryPrice}}￥<br>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="16" style="text-align: center">
          微信
        </el-col>
        <el-col :span="6" style="text-align: center">
          <el-checkbox v-model="option1" @click="option2=false"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" style="text-align: center">
          支付宝
        </el-col>
        <el-col :span="6" style="text-align: center">
          <el-checkbox v-model="option2" @click="option1=false"/>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" style="display: flex;background: #42b983" @click="toPay()">
          <div style="margin: auto;color: white">
            确认
          </div>
        </el-col>
      </el-row>

      <div style="height: 14%;width: 100%">

      </div>
    </div>

    <div style="width: 100%;height: 12%;background: #409EFF;position: fixed;top: 0">
      <el-row justify="center" style="display: flex;font-size: larger;color: white;font-weight: bold;height: 100%">
        <el-col :span="24" style="display: flex">
          <div style="margin: auto;font-size: x-large">
            支付订单
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="width: 100%;height: 10%;background: #FAFAFA;position: fixed;bottom: 0">

      <el-row style="height: 100%">
        <el-col :span="6" style="display: flex">
          <div style="margin: auto;text-align: center" @click="$router.push('/indexPage')">
            <el-icon size="25"><House /></el-icon><br/>
            <span>
              首页
            </span>
          </div>
        </el-col>
        <el-col :span="6" style="display: flex;flex-direction: column">
          <div style="margin: auto;text-align: center">
            <el-icon size="25"><Compass /></el-icon><br/>
            <span>
              发现
            </span>
          </div>
        </el-col>
        <el-col :span="6" style="display: flex">
          <div style="margin: auto;text-align: center" @click="$router.push('/orderList')">
            <el-icon size="25"><ShoppingCart /></el-icon><br/>
            <span>
              订单
            </span>
          </div>
        </el-col>
        <el-col :span="6" style="display: flex">
          <div style="margin: auto;text-align: center" @click="$router.push('/loginPage')">
            <el-icon size="25"><User /></el-icon><br/>
            <span>
              我的
            </span>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import router from "@/router";

export default {
  name: "payOrder",
  setup(){
    let payObj = reactive({
      foodList: JSON.parse(history.state.foodList),
      deliveryPrice:JSON.parse(history.state.deliveryPrice),
      totalPrice:JSON.parse(history.state.totalPrice),
      option1:false,
      option2:false,
      toPay:()=>{
        router.push("/indexPage")
      }
    })

    console.log(payObj.foodList)

    return {...toRefs(payObj)}
  }

}
</script>

<style scoped>

</style>