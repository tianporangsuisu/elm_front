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
      <div style="height: 14%;width: 100%">

      </div>
    </div>
    <div style="width: 100%;height: 16%;background: #409EFF;position: fixed;top: 0">
      <el-row justify="center" style="display: flex;font-size: larger;color: white;font-weight: bold">
        <el-col :span="24" style="display: flex">
          <div style="margin: auto;font-size: x-large">
            确认订单
          </div>
        </el-col>
        <el-col :span="24" style="display: flex">
          <div style="margin: auto auto auto 2vw;font-size: small">
            订单配送至
          </div>
        </el-col>
        <el-col :span="23" style="display: flex;margin-top: 1vh">
          <div style="margin: auto auto auto 2vw;font-size: small" v-if="destinationList===null">
            请选择收货地址
          </div>
          <div style="margin: auto auto auto 2vw;font-size: large" v-else>
            {{currentDestination.destination}}
          </div>
        </el-col>
        <el-col :span="1" style="display: flex" @click="dialogTableVisible=true">
          <div style="margin: auto;font-size:large;color: white">
            >
          </div>
        </el-col>
        <el-col :span="24" style="display:flex;margin-top: 1vh">
          <div style="margin: auto auto auto 2vw;">
            <span style="font-size: small" v-if="destinationList!==null">
              {{currentDestination.name}}
              {{currentDestination.sex}}
              {{currentDestination.phone}}
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width: 100%;height: 10%;background: dimgray;position: fixed;bottom: 0">
      <el-row style="height: 100%">
        <el-col :span="18" style="font-size: x-large;color: white;display: flex">
          <div style="margin: auto">
            ￥{{totalPrice+deliveryPrice}}<br>
          </div>
        </el-col>
        <el-col :span="6" style="display: flex;background: #42b983" @click="toPay()">
          <div style="margin: auto;color: white">
            确认
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <el-dialog v-model="dialogTableVisible" style="width: 80%;height: 70%;content: revert" :show-close="false">
    <template #header="{titleId, titleClass }">
      <div style="text-align: center">
        <h4 :id="titleId" :class="titleClass">地址选择</h4>
      </div>
    </template>
    <template #footer>
      <div style="text-align: center">
        <el-button type="primary" @click="toCreate()">
          <el-icon><Edit /></el-icon>
          新建地址
        </el-button>
        <el-button type="danger" @click="dialogTableVisible=false">
          <el-icon><CircleCloseFilled /></el-icon>
          取消
        </el-button>
      </div>
    </template>

    <el-row justify="center"  v-for="destination in destinationList" :key="destination" style="margin-top: 1vh;padding: 1vw 1vw;box-shadow: var(--el-box-shadow-light)" @click="currentDestination=destination">
      <el-col :span="23">
        {{destination.destination}}
      </el-col>
      <el-col :span="19">
        {{destination.name}}{{destination.sex}} {{destination.phone}}
      </el-col>
      <el-col :span="4" style="display: flex">
        <div style="margin: auto" @click="toDelete(destination)">
          <el-icon><CircleCloseFilled /></el-icon>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import {onBeforeMount, reactive, toRefs, watch} from "vue";
import cookie from "vue-cookie";
import api from "@/axios/api";
import router from "@/router";

export default {
  name: "orderPage",
  setup(){
    let orderObject = reactive({
      foodList: JSON.parse(history.state.foodList),
      adminId:cookie.get("adminId"),
      shopId:JSON.parse(history.state.shopId),
      deliveryPrice:JSON.parse(history.state.deliveryPrice),
      totalNumber:JSON.parse(history.state.totalNumber),
      totalPrice:JSON.parse(history.state.totalPrice),
      destinationList: null,
      currentDestination: null,
      destinationIndex: 0,
      dialogTableVisible:false,
      createdOrder:null,
      toDelete:(destination)=>{
        api.deleteDestination(destination.id).then(()=>{
          api.destination(orderObject.adminId).then(res=>{
            orderObject.destinationList=res.data
          })
        })
      },
      toCreate:()=>{
        router.push({
          name:'destinationPage',
        })
      },
      toPay:async ()=>{

        router.push({
          name: 'payOrder',
          state: {
            foodList: JSON.stringify(orderObject.foodList),
            deliveryPrice: JSON.stringify(orderObject.deliveryPrice),
            totalPrice:JSON.stringify(orderObject.totalPrice)
          }
        })
      }
    })

    onBeforeMount(()=>{
      api.destination(orderObject.adminId).then(res=>{
        console.log(res)
        if (res.data.length>0){
          orderObject.destinationList=res.data
          orderObject.currentDestination=orderObject.destinationList[0]
          orderObject.destinationList.forEach(item=>{
            if (item.sex===true)
              item.sex="先生"
            else item.sex="女士"
          })
        }
      })
    })

    watch(orderObject.currentDestination,()=>{
      api.destination(orderObject.adminId).then(res=>{
        console.log(res)
        if (res.data.length>0){
          orderObject.destinationList=res.data
          orderObject.destinationList.forEach(item=>{
            if (item.sex===true)
              item.sex="先生"
            else item.sex="女士"
          })
        }
      })
    })

    return {...toRefs(orderObject)}
  }
}
</script>

<style scoped>

</style>