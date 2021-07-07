<template>
  <button @click="testMock">测试</button>
</template>

<script lang="ts" setup>
import {testGet} from '../api/test'
const testMock = () => {
    testGet().then((res:any) => {
        console.log(res)
    }).catch((err:any) => {
        console.log(err)
    })
}
</script>

<style>

</style>