<template>
  <a-card class="b-shadow b-solid bordered-left mt-24 mb-16" id="informasi">
    <a-list itemLayout="horizontal" class="ant-list--package-information">
      <a-list-item class="ant-list-item--package-information pt-0">
        <div class="w-100">
          <a-row :gutter="16" type="flex" justify="start">
            <a-col :span="16">
              <div class="fs-28 fw-600 f-default cr-black">
                <span>{{data.nama}}</span>
              </div>
            </a-col>
            <a-col :span="8" class="text-right">
              <a-avatar
                :size="64"
                :style="{ marginRight: '0', backgroundImage: 'url(https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png)' }"
                class="brand-vendor ml-auto"
              />
            </a-col>
          </a-row>
        </div>
      </a-list-item>
      <a-list-item class="ant-list-item--package-information">
        <div class="w-100">
          <div
            class="fs-14 cr-black mb-8"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos sed illo sapiente totam ipsum, labore reprehenderit blanditiis, tempore consequuntur maxime, exercitationem nisi. Officiis nisi dolorum, distinctio eveniet ex soluta.</div>
          <div
            class="fs-14 cr-black mb-8"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos sed illo sapiente totam ipsum, labore reprehenderit blanditiis, tempore consequuntur maxime, exercitationem nisi. Officiis nisi dolorum, distinctio eveniet ex soluta.</div>
        </div>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script>
import moment from "moment";
export default {
  props: ["data"],

  data() {
    return {
      wishlist: false
    };
  },
  methods: {
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    }
  }
};
</script>
