<template>
  <div style="height: 100%;width: 100%">
    <div style="width: 100%;height: 12%;background: #409EFF;position: fixed;top: 0;display: flex">
      <el-col :span="24" style="display: flex;font-size: larger;color: white;font-weight: bold">
          <span style="margin: auto;font-size: x-large">
            订单列表
          </span>
      </el-col>
    </div>
    <div style="width: 100%;height: 88%;top:12%;position: fixed">
      <el-row justify="center" style="margin-top: 30%">
        <el-col :span="22" style="text-align: center">
          <el-input placeholder="姓名" v-model="name" style="width: 80%"/>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-input placeholder="电话" v-model="phone" style="width: 80%"/>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-input placeholder="地址" v-model="des" style="width: 80%"/>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-radio-group v-model="sex">
            <el-radio label="1">
              男
            </el-radio>
            <el-radio label="0">
              女
            </el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="22" style="text-align: center;margin-top: 4%">
          <el-button type="primary" @click="toCreate()">
            确认
          </el-button>
          <el-button type="warning" @click="toCancel()">
            取消
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import cookie from "vue-cookie";
import api from "@/axios/api";
import router from "@/router";

export default {
  name: "destinationPage",
  setup(){
    let desObject = reactive({
      name:null,
      sex:null,
      phone:null,
      des:null,
      adminId:cookie.get("adminId"),
      toCreate:()=>{
        api.createDestination(desObject.adminId,desObject.des,desObject.name,desObject.sex,desObject.phone).then(()=>{
          router.go(-1)
        })
      },
      toCancel:()=>{
        router.go(-1)
      }
    })


    return {...toRefs(desObject)}
  }
}
</script>

<style scoped>

</style>