<script setup lang="ts" xmlns:show="http://www.w3.org/1999/xhtml">
import {ref} from "vue";

const isVisible = ref(false)

const open = () => {
    isVisible.value = true
}
const close = () => {
    isVisible.value = false
}

defineExpose({
    open,
    close
})
</script>

<template>
    <div class="notification-container" :class="{ show: isVisible }">
        <p>Вы уже вводили этот символ</p>
    </div>
</template>

<style scoped>

</style>