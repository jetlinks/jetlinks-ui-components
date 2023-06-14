<template>
  <j-form-item >
    <j-input v-if="range === false" />
    <div v-else class="data-table-boolean-item">
      <div class="data-table-boolean-item--value">
        <j-form-item name="trueText">
          <j-input />
        </j-form-item>
      </div>
      <div>-</div>
      <div class="data-table-boolean-item--value">
        <j-form-item name="trueValue">
          <j-input />
        </j-form-item>
      </div>
    </div>
  </j-form-item>
</template>

<script setup lang="ts" name="ValueItem">

const props = defineProps({
  range: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>