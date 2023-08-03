<template>
  <div style="height: 100%;width: 100%">
    <div style="width: 100%;height: 78%;top: 12%;bottom: 10%;padding: 2% 0">
      <div style="height: 16%;width: 100%">

      </div>
      <el-collapse accordion>
        <el-collapse-item :name="order.id" v-model="activeName" v-for="order in orderList" :key="order">
          <template #title>
            {{order.business.name}} {{order.price}}￥
            <el-button style="margin-right: 5vw" type="warning">未支付</el-button>
          </template>
          <div v-for="item in order.orderItems" :key="item">
            {{item.name}} x{{item.number}} {{item.totalPrice}}￥
          </div>
        </el-collapse-item>
      </el-collapse>
      <div style="height: 14%;width: 100%">

      </div>
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
          <div style="margin: auto;text-align: center" @click="$router.push('/indexPage')">
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
    <div style="width: 100%;height: 12%;background: #409EFF;position: fixed;top: 0;display: flex">
      <el-col :span="24" style="display: flex;font-size: larger;color: white;font-weight: bold">
          <span style="margin: auto;font-size: x-large">
            订单列表
          </span>
      </el-col>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, reactive, toRefs} from "vue";
import cookie from "vue-cookie";
import api from "@/axios/api";

export default {
  name: "orderList",
  setup(){
    let ordlistObj=reactive({
      adminId: cookie.get("adminId"),
      orderList:null,
      activeName:1,
      shopList:null,

    })


    onBeforeMount(()=>{
      api.allOrder(ordlistObj.adminId).then(res=>{
        ordlistObj.orderList=res.data
        ordlistObj.orderList.forEach(item=>{
          api.orderItem(item.id).then(res=>{
            item.orderItems=res.data
          })
          api.business(JSON.parse(item.bid)).then(res=>{
            item.business=res.data[0]


          })
        })
      })
    })

    return {...toRefs(ordlistObj)}
  }
}
</script>

<style scoped>

</style>