<template>
  <div class="not_found" ref="notFound">
  </div>
</template>

<script>
export default {
    name:'NotFound',
    created(){
      let w = window.screen.width
      let h = window.screen.height - 409
      // console.log(w,h)
      this.$refs.notFound.style.height = h + 'px';
      this.$refs.notFound.style.width = w + 'px';

    },
    mounted(){
      let w = window.screen.width
      let h = window.screen.height - 409
      // console.log(w,h)
      this.$refs.notFound.style.height = h + 'px';
      this.$refs.notFound.style.width = w + 'px';
    }
}

</script>
<style scoped lang="less">
.not_found{
    background-image: url(../../assets/icon-404.png);
    background-size: cover;
}
</style>