import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    requireAuth: boolean;
    showHeader: boolean;
    showSider: boolean;
  }
}
