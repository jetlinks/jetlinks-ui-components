<docs>
---
order: 3
title: 自定义 Tooltip 内容
---

使用 tooltip slot 自定义 tooltip 内容。

</docs>

<template>
  <j-ellipsis style="max-width: 240px">
    忘了月光 忘了烟火 只记得 河中波光偷窥君的笑窝
    <template #tooltip>
      <div style="text-align: center">
        两岸灯火闪烁<br>亮不过君<br> 眼神灼灼<br>
        若到江南赶上春 千万和春住
      </div>
    </template>
  </j-ellipsis>
</template>
