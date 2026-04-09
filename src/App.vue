<template>
  <div class="app">
    <h1>🍜 阿龍小吃店</h1>

    <!-- 使用 MenuCard 元件，用 v-for 重複渲染 -->
    <div class="menu-grid">
      <MenuCard
        v-for="item in menu"
        :key="item.id"
        :item="item"
        @add="handleAdd"
      />
    </div>

    <p>合計：${{ total }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MenuCard from './components/MenuCard.vue'   // 引入元件

const menu = [
  { id: 1, emoji: '🍜', name: '滷肉飯', price: 50  },
  { id: 2, emoji: '🍲', name: '牛肉麵', price: 130 },
  { id: 3, emoji: '🥚', name: '滷蛋',   price: 20  },
]

const cart  = ref([])
const total = computed(() => cart.value.reduce((s, i) => s + i.price, 0))

function handleAdd(item) {
  cart.value.push(item)
  console.log('加入：', item.name)
}
defineProps({
  // 基本型別
  title: String,
  price: Number,
  isAvailable: Boolean,

  // 有預設值
  tag: {
    type: String,
    default: ''
  },

  // 必填
  item: {
    type: Object,
    required: true
  },

  // 自訂驗證
  rating: {
    type: Number,
    validator: (val) => val >= 0 && val <= 5
  }
})
</script>
