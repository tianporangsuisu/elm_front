<template>
  <div style="height: 100%;width: 100%">
    <div style="width: 100%;height: 78%;top: 12%;bottom: 10%;padding: 2% 0">
      <div style="height: 16%;width: 100%">

      </div>
      <el-row justify="space-around" style="margin: 2% 0;box-shadow: var(--el-box-shadow-light)" v-for="food in foodList" :key="food">
        <el-col :span="6">
          <img src="../assets/rgsx/itemP.png" style="width: 100%">
        </el-col>
        <el-col :span="11" style="display:flex;">
          <div style="margin: auto 0">
            <span style="font-size: small">
            {{food.name}}
          </span><br/>
            <span style="font-size: xx-small">
            {{food.forExplain}}
          </span><br/>
            <span style="font-size: xx-small;border-radius: 5px;padding: 2px">
            好评率{{food.goodRate}}% | 月售{{food.monthSell}}份
          </span><br/>
            <span style="font-size: xx-small;border-radius: 5px;padding: 2px">
            ￥{{food.price}}
          </span>
          </div>
        </el-col>
        <el-col :span="5" style="text-align: center;display: flex">
          <el-input-number v-model="food.number" :min="0" @change="handleChange(food)" controls-position="right" size="small" style="width: 100%;height: 25%;margin: auto"/>
        </el-col>
      </el-row>
      <div style="height: 14%;width: 100%">

      </div>
    </div>

    <div style="width: 100%;height: 12%;background: #409EFF;position: fixed;top: 0;display: flex">
      <el-col :span="24" style="display: flex;font-size: larger;color: white;font-weight: bold">
          <span style="margin: auto;font-size: x-large">
            商品界面
          </span>
      </el-col>
    </div>
    <div style="width: 100%;height: 10%;background: dimgray;position: fixed;bottom: 0">
      <el-row style="height: 100%">
        <el-col :span="8">
          <div style="width: 25vw;height:25vw;background: deepskyblue;position: fixed;border-radius: 50px;bottom: 4vw;left: 5vw;display: flex">
            <el-icon size="10vw" style="margin: auto;color: white"><ShoppingCart /></el-icon><br/>
          </div>
          <div style="width: 10vw;height:10vw;background: red;position: fixed;border-radius: 50px;bottom: 20vw;left: 20vw;display: flex" v-show="totalNumber!==0">
            <div style="margin: auto;color: white">
              {{totalNumber}}
            </div>
          </div>
        </el-col>
        <el-col :span="10" style="padding-top: 1vh;font-size: large;color: white">
          ￥{{totalPrice}}<br>
          <span style="font-size: small">
            另需配送费{{deliveryPrice}}
          </span>
        </el-col>
        <el-col :span="6" style="display: flex;background: #42b983" @click="toPay()">
          <div style="margin: auto;color: white">
            下单
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import {onBeforeMount, reactive, toRefs} from "vue";
import router from "@/router";
import api from "@/axios/api";
import {} from "element-plus";
import cookie from "vue-cookie";

export default {
  name: "shopPage",
  setup() {
    let foodObject = reactive({
      foodList: null,
      adminId:cookie.get("adminId"),
      shopId:history.state.shopId,
      deliveryPrice: history.state.deliveryPrice,
      totalNumber: 0,
      totalPrice: 0,
      toPay: () => {
        router.push({
          name: 'orderPage',
          state: {
            shopId:JSON.stringify(foodObject.shopId),
            foodList:JSON.stringify(foodObject.foodList),
            deliveryPrice:JSON.stringify(foodObject.deliveryPrice),
            totalPrice:JSON.stringify(foodObject.totalPrice),
            totalNumber:JSON.stringify(foodObject.totalNumber)
          }
        })
      },
      handleChange:(food)=>{
        food.totalPrice = food.number*food.price
        foodObject.totalPrice=0
        foodObject.totalNumber=0
        foodObject.foodList.forEach(item=>{
          foodObject.totalNumber+=item.number;
          item.totalPrice=item.number*item.price
          foodObject.totalPrice+=item.totalPrice
        })
      },
    })

    onBeforeMount(() => {
      api.foodList(foodObject.shopId).then(async res => {
        if (res.data.length>0){
          foodObject.foodList=res.data
          foodObject.foodList.forEach(item => {
            item.number=0
            item.totalPrice=0
          })
        }
      })
    })

    return {...toRefs(foodObject)}
  }
}
</script>

<style scoped>

</style>