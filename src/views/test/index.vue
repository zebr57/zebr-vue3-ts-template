<template>
  <div>
    <input type="file" @change="handleChangeFile" />
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'

let fileList = []
let file = null

const handleChangeFile = (e) => {
  console.log('选择了文件', e)
  file = e.target.files[0]
}

const handleSubmit = (e) => {
  console.log('提交')
  const formData = new FormData()
  formData.append('file', file)
  axios.post('http://localhost:8000/mode1/api3', formData).then((res) => {
    console.log(res)
  })
}

onMounted(() => {
  console.log('mounted')
  // 调试 express
  // axios.get('http://localhost:8000/mode1/api1?a=1&&b=2').then((res) => {
  //   console.log(res)
  // })
  // axios.post('http://localhost:8000/mode1/api2', { name: '王花花' }).then((res) => {
  //   console.log(res)
  // })

  // 调试 koa
  axios.get('http://localhost:3000/api1', { name: '王花花' }).then((res) => {
    console.log(res)
  })
  axios.post('http://localhost:3000/api2', { name: '王花花' }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped></style>
