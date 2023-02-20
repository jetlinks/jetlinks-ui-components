<docs>
---
order: 1
title: Error
---
  
复杂的错误反馈  

  </docs>
<template>
    <j-result
        status="error"
        title="Submission Failed"
        sub-title="Please check and modify the following information before resubmitting."
    >
        <template #extra>
            <a-button key="console" type="primary">Go Console</a-button>
            <a-button key="buy">Buy Again</a-button>
        </template>

        <div class="desc">
            <p style="font-size: 16px">
                <strong
                    >The content you submitted has the following error:</strong
                >
            </p>
            <p>
                <close-circle-outlined :style="{ color: 'red' }" />
                Your account has been frozen
                <a>Thaw immediately &gt;</a>
            </p>
            <p>
                <close-circle-outlined :style="{ color: 'red' }" />
                Your account is not yet eligible to apply
                <a>Apply Unlock &gt;</a>
            </p>
        </div>
    </j-result>
</template>
<style scoped>
.desc p {
    margin-bottom: 1em;
}
</style>
