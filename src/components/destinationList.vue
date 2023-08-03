<template>
  <div style="height: 100%;width: 100%">
    <div style="width: 100%;height: 12%;background: #409EFF;position: fixed;top: 0">
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
export default {
  name: "destinationList"
}
</script>

<style scoped>

</style>