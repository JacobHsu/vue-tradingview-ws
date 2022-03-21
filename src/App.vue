<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <el-main v-if="symbol">
    {{symbolInfo}}
  </el-main>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import { getSymbols } from '@/api'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  setup() {
    const symbolList = reactive({})
    const symbol = ref('')
    const symbolInfo = ref({})
    onMounted(async () => {

      const [list, symbolData] = await getSymbols()
      symbolList.value = list
      symbol.value = symbolData
      symbolInfo.value = list[0]
    })
    return {
      symbol,
      symbolList,
      symbolInfo,
    }
  },  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss" scoped>
  ::v-deep(.el-main) {
    padding: 0;
  }
</style>
