export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo("/dashboard");
});
