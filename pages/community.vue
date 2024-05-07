<template>
  <el-card shadow="none" style="margin:10px 10px 60px 10px;">
    <!--手机容器，很不错的功能-->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="padding:40px;">
      <div class="phone">
        <iframe src="https://doublepeach.gitee.io/" id="iframe" frameborder="0" scrolling="auto" height="100%" width="100%" class="phone-container"></iframe>
      </div>

    </el-col>
    <br><br><br><br><br><br>
    <div class="card__header">
      <img src="../assets/images/404.jpg" alt="card__image" class="card__image" width="800">
    </div>
  </el-card>



</template>


<script>
/*export default {
  name: "community"
}*/

export default {
  name: 'community',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
};
</script>

<style scoped>
.phone-container {
  height: 620px;
  width: 345px;
  border-radius: 20px;
  position: relative;
  top: 45px;
  left: 12px;
  border: 1px solid #888;
  background: linear-gradient(303deg, #b2e9fc 50%, #b5c4f8 50%);

}

.phone-container {
  height: 618px;
  width: 343px;
  position: relative;
  top: 46px;
  left: 12px;
  background-color: #fff;
}

.phone {
  height: 700px;
  width: 370px;
  background-image: url("../assets/images/phone.jpg");
  background-size: cover;
  top: 0;
}

.phone {
  height: 729px;
  width: 370px;
  background-image: url("../assets/images/phone.png");
  background-size: cover;
  margin: 0 auto;
}
</style>
