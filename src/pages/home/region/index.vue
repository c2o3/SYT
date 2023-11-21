<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li :class="{active:RegionFlag==''}" @click="changeRegion('')">全部</li>
        <li v-for="item in RegionArr" :key="item.value" :class="{active:RegionFlag== item.value}" @click="changeRegion(item.value)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";
//存储地区数据
let RegionArr = ref<HospitalLevelAndRegionArr>([])
//地区高亮响应式数据
let RegionFlag = ref<string>('')
//地区组件挂载完毕获取地区数据
onMounted(() => {
  getRegion();
});
const getRegion = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("Beijin");
    console.log(result)
  //存储全部地区的数据
  if(result.code == 200){
    RegionArr.value = result.data
  }
};

//点击不同区域按钮的高亮
const changeRegion = (region:string) => {
  RegionFlag.value = region
  //给父组件传递区域的参数
  $emit('getRegion', region)
}

let $emit = defineEmits(['getRegion'])
</script>

<script lang="ts">
export default{
  name: 'Region'
}
</script>
<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 60px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-left: -10px;
      li {
        margin-right: 5px;
        margin-bottom: 10px;
        &.active {
          color: aqua;
        }
      }
      li:hover {
        color: aqua;
        cursor: pointer;
      }
    }
  }
}
</style>
