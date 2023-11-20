<template>
  <div class="search">
    <el-autocomplete
     clearable
     placeholder="请你输入医院名称"
     class="form"
    />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>
<script setup lang="ts">
//引入element-plus的图标
import { Search } from '@element-plus/icons-vue'
</script>
//深度选择器：>>> /deep/ ::v-deep
<style scoped lang="scss">
.search{
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  // ::v-deep .el-input__wrapper{
  //   width: 600px;
  //   margin-right: 10px;
  // }被弃用了
  :deep(.el-input__wrapper){
    width: 600px;
    margin-right: 10px;
  }
}
</style>
