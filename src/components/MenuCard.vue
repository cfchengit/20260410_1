<template>
  <div class="card">
    <span class="emoji">{{ item.emoji }}</span>
    <p class="name">{{ item.name }}</p>
    <p class="price">${{ item.price }}</p>
    <button @click="$emit('add', item)">加入訂單</button>
  </div>
</template>

<script setup>
// defineProps：宣告這個元件接收哪些資料
const props = defineProps({
  item: {
    type: Object,
    required: true   // 必填
  }
})

// defineEmits：宣告這個元件會發出哪些事件
const emit = defineEmits(['add'])
</script>

<style scoped>
/* scoped：這裡的 CSS 只影響這個元件，不會污染其他地方 */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}
.emoji { font-size: 32px; }
.name  { font-weight: bold; margin: 4px 0; }
.price { color: #c84b2f; }
button {
  padding: 5px 14px;
  background: #c84b2f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
