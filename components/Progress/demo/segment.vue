<docs>
---
order: 8
title: 分段进度条
---

## zh-CN

标准的进度条。

</docs>

<template>
    <div>
        <j-tooltip title="3 done / 3 in progress / 4 to do">
            <j-progress :percent="60" :success="{ percent: 30 }" />
        </j-tooltip>
        <j-tooltip title="3 done / 3 in progress / 4 to do">
            <j-progress
                :percent="60"
                :success="{ percent: 30 }"
                type="circle"
            />
        </j-tooltip>
        <j-tooltip title="3 done / 3 in progress / 4 to do">
            <j-progress
                :percent="60"
                :success="{ percent: 30 }"
                type="dashboard"
            />
        </j-tooltip>
    </div>
</template>
