<template>
  <div style="height: 100%;width: 100%">
    <div style="width: 100%;height: 12%;background: #409EFF;position: fixed;top: 0;display: flex">
      <el-col :span="24" style="display: flex;font-size: larger;color: white;font-weight: bold">
          <span style="margin: auto;font-size: x-large">
            用户{{pageState}}
          </span>
      </el-col>
    </div>
    <div style="width: 100%;height: 78%;top:12%;position: fixed">
      <el-row justify="center" style="margin-top: 30%">
        <el-col :span="22" style="text-align: center">
          <el-input placeholder="电话" v-model="phone" style="width: 80%"/>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-input placeholder="密码" v-model="password" style="width: 80%"/>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-radio-group v-model="sex" v-show="pageState==='注册'">
            <el-radio label="1">
              男
            </el-radio>
            <el-radio label="0">
              女
            </el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-input placeholder="名称" v-model="name" style="width: 80%"  v-show="pageState==='注册'"/>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-button type="primary" @click="log()" v-show="pageState==='登录'">
            登录
          </el-button>
          <el-button type="primary" @click="reg()" v-show="pageState==='注册'">
            注册
          </el-button>
          <el-button type="info" @click="toLog()" v-show="pageState==='注册'">
            去登录
          </el-button>
          <el-button type="info" @click="toReg()" v-show="pageState==='登录'">
            去注册
          </el-button>
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
import api from "@/axios/api";
import cookie from 'vue-cookie'
import {ElMessage} from "element-plus";
import router from "@/router";

export default {
  name: "loginPage",
  setup(){
    let loginObject = reactive({
      id: null,
      name: null,
      password: null,
      phone: null,
      sex: null,
      pageState: "登录",
      toLog:()=>{
        loginObject.pageState="登录"
      },
      toReg:()=>{
        loginObject.pageState="注册"
      },
      log:()=>{
        api.login(loginObject.phone,loginObject.password).then(async res=>{
          console.log(res)
          if (res.data.token){
            cookie.set("token",res.data.token)
            cookie.set("adminId",res.data.id)
            await ElMessage({
              message: '登陆成功！',
              type: 'success'
            })
            router.go(-1)
          }else {
            await ElMessage({
              message: '登陆失败！',
              type: 'warning'
            })
          }
        })
      },
      reg:()=>{
        api.register(loginObject.phone,loginObject.password,loginObject.sex,loginObject.name).then(async res=>{
          if (res.data.length>0){
            cookie.set("token",res.data.token)
            await ElMessage({
              message: '注册成功！',
              type: 'success'
            })
            router.push("/indexPage")
          }else {
            await ElMessage({
              message: '注册失败！',
              type: 'warning'
            })
          }
        })
      }
    })

    return {...toRefs(loginObject)}
  }
}
</script>

<style scoped>

</style>