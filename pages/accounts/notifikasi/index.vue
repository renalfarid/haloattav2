<template>
  <div class="ant-card--notification">
    <div class="fs-18 fw-500 cr-black">Notifikasi</div>

    <a-collapse :bordered="false">
      <a-collapse-panel
        v-for="item in dataNotif"
        :key="item.id"
        :showArrow="false"
        class="b-shadow b-solid b-radius"
      >
        <template slot="header">
          <div class="d-flex align-items-center">
            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" icon="alert" class="mr-8" />
            <span class="fs-16 fw-500 cr-black">{{item.titel}}</span>
          </div>
        </template>
        <p class="fs-15 fw-400 cr-gray">{{item.detail}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "authenticated",
  layout: "accounts",
  name: "notification",
  head() {
    return {
      title: "Notifikasi - Haloatta"
    };
  },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      dataNotif: ""
    };
  },
  mounted() {
    this.loadNotification();
  },
  methods: {
    loadNotification(page) {
      const token = Cookie.get("auth");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };

      let data = {
        page: page
      };

      axios
        .get(process.env.baseUrl + "user/notifikasi", config)
        .then(response => {
          if (response.data.status == 200) {
            this.dataNotif = response.data.data.data;
            console.log(this.dataNotif, "ini");
          } else {
            this.$message.error(response.data.msg);
          }
        })
        .catch(() => {
          this.$message.success("Salah");
        });
    }
  }
};
</script>