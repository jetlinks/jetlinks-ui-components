<docs>
  ---
  order: 8
  title: 右键菜单
  ---
  
  ## zh-CN
  
  默认是移入触发菜单，可以点击鼠标右键触发。
  
  </docs>
  
  <template>
    <j-dropdown :trigger="['contextmenu']">
      <div
        :style="{
          textAlign: 'center',
          background: '#f7f7f7',
          height: '200px',
          lineHeight: '200px',
          color: '#777',
        }"
      >
        Right Click on here
      </div>
      <template #overlay>
        <j-menu>
          <j-menu-item key="1">1st menu item</j-menu-item>
          <j-menu-item key="2">2nd menu item</j-menu-item>
          <j-menu-item key="3">3rd menu item</j-menu-item>
        </j-menu>
      </template>
    </j-dropdown>
  </template>
  