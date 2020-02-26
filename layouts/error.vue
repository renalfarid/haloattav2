<template>
  <Component :is="errorPage" :error="error" />
</template>

<script>
import error404 from "@/components/Error/404";
import error500 from "@/components/Error/500";
export default {
  name: "page-error",
  layout: "application",

  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      return error500;
    }
  }
};
</script>
