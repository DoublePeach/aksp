<template>
  <div>
    <p>错误页面：</p>
    <p>错误信息 -</p>
    {{ error }}

    <div style="width:130px;">
      &nbsp;&nbsp;&nbsp;&nbsp;<img src="~/assets/images/404.jpg" alt="" />
    </div>
  </div>


</template>

<script>
export default {
  props: ['error'],
}
</script>
