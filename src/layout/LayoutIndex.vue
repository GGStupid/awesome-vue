<template>
  <div class="layout">
    <HeaderIndexVue />
    <div class="layout-bottom">
      <SiderIndexVue />
      <div class="layout-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderIndexVue from "./header/HeaderIndex.vue";
import SiderIndexVue from "./sider/SiderIndex.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.layout-bottom {
  display: flex;
  width: 100%;
  height: calc(100% - $headerHeight);
}

.layout-content {
  width: calc(100% - $siderWidth);
  height: 100%;
  overflow: auto;
}
</style>
