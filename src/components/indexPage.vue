<template>
  <div style="height: 100%;width: 100%" class="flex flexDirectionColumn">
    <div style="width: 100%;height: 12%;background: #409EFF;position: sticky;top: 0">
      <el-row justify="center" style="margin-top: 4%">
        <el-col :span="22" style="display: flex;font-size: larger;color: white;font-weight: bold">
          <el-icon style="margin: auto 0">
            <Location />
          </el-icon>
          <span style="margin: auto 0">
              石首市文化街三巷60号
            </span>
        </el-col>
      </el-row>
      <el-row justify="center" style="margin-top: 2%">
        <el-col :span="22">
          <el-input placeholder="搜索饿了吗商家，饿了吗商品">
            <template #prefix>
              <el-icon style="margin: auto 5px">
                <Search />
              </el-icon>
            </template>
          </el-input>
        </el-col>
      </el-row>
    </div>

    <div style="flex:1;padding: 2% 0;overflow-y: scroll">
      <el-row justify="space-around" style="margin-top: 2%">
        <el-col :span="5" style="text-align: center" @click="$router.push('/shopList')">
          <img src="../assets/rgsx/p1.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p2.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p3.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p4.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p5.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p6.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p7.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
        <el-col :span="5" style="text-align: center">
          <img src="../assets/rgsx/p8.png" style="width: 100%">
          <span>
            美食
          </span>
        </el-col>
      </el-row>

      <el-row justify="space-evenly" style="margin: 8% 2% 0 2%;background: #F2F3F5">
        <el-col :span="10">
          <el-col :span="14" style="margin-top: 4%">
            <span style="font-size: large;font-weight: bold">
              品质套餐
            </span>
          </el-col>
          <el-col :span="24" style="margin-top: 4%">
            <span>
              搭配齐全吃得好
            </span>
          </el-col>
          <el-col :span="24" style="margin-top: 8%">
            <span style="font-size: small;font-weight: bold;color: goldenrod">
              立即抢购 >
            </span>
          </el-col>
        </el-col>
        <el-col :span="10">
          <img src="../assets/rgsx/p9.png" style="width: 100%;"/>
        </el-col>
      </el-row>

      <el-row justify="center">
        <el-divider style="width: 60%">
          推荐商家
        </el-divider>
      </el-row>

      <el-row justify="space-around" style="margin: 2% 0;box-shadow: var(--el-box-shadow-light)" v-for="shop in shopList" :key="shop" @click="toShop(shop)">
        <el-col :span="6">
          <img src="../assets/rgsx/shopP.png" style="width: 100%">
        </el-col>

        <el-col :span="10" style="display:flex;overflow-x: hidden">
          <div style="margin: auto 0">
            <span style="font-size: 1vh;white-space: nowrap">
            {{shop.name}}({{shop.address}})
          </span><br/>
            <span style="font-size: 0.5vh">
            ￥{{shop.startPrice}}起送 | ￥{{shop.deliveryPrice}}配送
          </span><br/>
            <span style="font-size: 0.5vh;background: orange;border-radius: 5px;padding: 2px;white-space: nowrap">
            {{shop.topComment}}
          </span>
          </div>
        </el-col>

        <el-col :span="6" style="text-align: center;display: flex">
          <div style="margin: auto 0">
            <span style="background: #409EFF;border-radius: 5px;padding: 2px;font-size: xx-small">
            蜂鸟专送
          </span>
            <span style="font-size: xx-small">
            {{shop.distance}}km|{{shop.time}}min
          </span>
          </div>
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
import api from "@/axios/api";
import {onBeforeMount, reactive, toRefs} from "vue";
import router from "@/router";
import {ElMessage} from "element-plus";

export default {
  name: "indexPage",
  setup(){
    let indexObject = reactive({
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
            path: '/loginPage'
          })
        }else {
          indexObject.shopList=res.data
        }
      })
    })

    return {...toRefs(indexObject)}
  }

}
</script>

<style scoped>

</style>