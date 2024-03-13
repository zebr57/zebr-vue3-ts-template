<template>
  <div>
    用户列表
    {{ user.name }}
    <div v-for="item in list" :key="item">
      {{ item }}
    </div>
    <div v-html="htmlStr"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, reactive, onMounted } from 'vue'

let user = ref({})
const userRef = toRef(user, 'value')
const htmlStr = ref('<div>hello</div>')
let list = reactive([])

onMounted(() => {
  function htmlEscape(htmlStr) {
    let reg = /(<|>)/g
    return htmlStr.replace(reg, (match) => {
      if (match === '<') {
        return '&lt;'
      } else if (match === '>') {
        return '&gt;'
      }
    })
  }
  htmlStr.value = htmlEscape('<div>hello</div>')

  setTimeout(() => {
    userRef.value = { name: 'Jane' }
    console.log(user)
    list.push('xxx')
  }, 2000)
})

const tabsList = [
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: 'https://chat.openai.com/favicon-32x32.png',
    groupId: -1,
    height: 827,
    highlighted: false,
    id: 585003308,
    incognito: false,
    index: 0,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: 'ChatGPT',
    url: 'https://chat.openai.com/?model=text-davinci-002-render-sha',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl:
      'https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
    groupId: 1403185340,
    height: 827,
    highlighted: false,
    id: 585004595,
    incognito: false,
    index: 1,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: 'www.npmjs.com',
    url: 'https://www.npmjs.com/package/chrome-types?activeTab=readme',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: 'https://cdn-static.sspai.com/favicon/sspai.ico',
    groupId: -1,
    height: 827,
    highlighted: false,
    id: 585004592,
    incognito: false,
    index: 2,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: 'sspai.com',
    url: 'https://sspai.com/post/65874',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: 'https://developer.chrome.com/images/meta/favicon-32x32.png',
    groupId: -1,
    height: 827,
    highlighted: false,
    id: 585004527,
    incognito: false,
    index: 3,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: 'chrome.tabCapture - Chrome for Developers',
    url: 'https://developer.chrome.com/docs/extensions/reference/tabCapture/',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl:
      'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
    groupId: 1236085378,
    height: 827,
    highlighted: false,
    id: 585004404,
    incognito: false,
    index: 4,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: '谷歌插件 - 搜索 - 掘金',
    url: 'https://juejin.cn/search?utm_source=infinitynewtab.com&query=%E8%B0%B7%E6%AD%8C%E6%8F%92%E4%BB%B6&fromSeo=0&fromHistory=0&enterFrom=home_page&type=0&sort=0',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: 'https://element-plus.org/images/element-plus-logo-small.svg',
    groupId: -1,
    height: 827,
    highlighted: false,
    id: 585004464,
    incognito: false,
    index: 5,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: 'Tabs 标签页 | Element Plus',
    url: 'https://element-plus.org/zh-CN/component/tabs.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: '',
    groupId: -1,
    height: 827,
    highlighted: false,
    id: 585004415,
    incognito: false,
    index: 6,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: '扩展程序',
    url: 'chrome://extensions/',
    width: 1390,
    windowId: 585003298
  },
  {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: '',
    groupId: -1,
    height: 827,
    highlighted: false,
    id: 585004608,
    incognito: false,
    index: 7,
    mutedInfo: {
      muted: false
    },
    pinned: false,
    selected: false,
    status: 'complete',
    title: '新标签页',
    url: 'chrome://newtab/',
    width: 1390,
    windowId: 585003298
  },
  {
    active: true,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl:
      'https://images.xiaozhuanlan.com/assets/favicon-bd135558698197f509ada06695c03a4f458f0077fa476f9a4e7ba9664f3dc55f.ico',
    groupId: -1,
    height: 827,
    highlighted: true,
    id: 585004633,
    incognito: false,
    index: 8,
    mutedInfo: {
      muted: false
    },
    openerTabId: 585004415,
    pinned: false,
    selected: true,
    status: 'loading',
    title: '第 8.1 章 为什么必须学？ - JavaScript 核心进阶 - 小专栏',
    url: 'https://xiaozhuanlan.com/advance/9724865013',
    width: 1390,
    windowId: 585003298
  }
]
const regexp = new RegExp('https://(.*?)/')
const urlArr = []
tabsList.forEach((tab) => {
  if (tab.url.match(regexp)) {
    const matchArr = tab.url.match(regexp)
    urlArr.push(matchArr[0])
  }
})
console.log(urlArr)
</script>

<style scoped></style>
