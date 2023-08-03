<template>
  <div style="height: 100%;width: 100%" class="flex flexDirectionColumn">
    <div style="width: 100%;height: 12%;background: #409EFF;position: sticky;top: 0;display: flex">
      <el-col :span="24" style="display: flex;font-size: larger;color: white;font-weight: bold">
          <span style="margin: auto;font-size: x-large">
            商家列表
          </span>
      </el-col>
    </div>

    <div style="width: 100%;height: 78%;padding: 2% 0;overflow-y: scroll">
      <el-row justify="space-around" align="middle" style="margin: 2% 0;box-shadow: var(--el-box-shadow-light)" v-for="shop in shopList" :key="shop" @click="toShop(shop)">
        <el-col :span="6">
          <img src="../assets/rgsx/shopP.png" style="width: 100%">
        </el-col>
        <el-col :span="11" style="display:flex;align-items: center">
          <div style="margin: auto 0">
            <span style="font-size: xx-small">
            {{shop.name}}({{shop.address}})
          </span><br/>
            <span style="font-size: xx-small">
            ￥{{shop.startPrice}} | ￥{{shop.deliveryPrice}}
          </span><br/>
            <span style="font-size: xx-small;border-radius: 5px;padding: 2px">
            {{shop.forExplain}}
          </span>
          </div>
        </el-col>
        <el-col :span="3" style="text-align: center;display: flex">

        </el-col>
      </el-row>
    </div>
    <div style="width: 100%;height: 10%;background: #FAFAFA;position: sticky;bottom: 0">
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
          <div style="margin: auto;text-align: center" @click="$router.push('/orderPage')">
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
import {onBeforeMount, reactive, toRefs} from "vue";
import api from "@/axios/api";
import {ElMessage} from "element-plus";
import router from "@/router";

export default {
  name: "shopList",
setup(){
  let shopListObject = reactive({
    shopList: null,
    toShop:(shop)=>{
      router.push({
        name: 'shopPage',
        state: {
          shopId:shop.id,
          deliveryPrice:shop.deliveryPrice
        }
      })
    }
  })

  onBeforeMount(()=>{
    api.shopList().then(async res=>{
      if (res.data.state===false){
        await ElMessage({
          message: '请先登录!',
          type: 'warning'
        })
        router.push({
          path: 'loginPage'
        })
      }else {
        shopListObject.shopList=res.data
      }
    })
  })

  return {...toRefs(shopListObject)}
}
}
</script>

<style scoped>

</style>