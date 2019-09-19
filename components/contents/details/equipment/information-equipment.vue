<template>
  <section>
    <a-card class="b-shadow b-solid bordered-left mt-32 mb-16" id="informasi">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <a-row :gutter="16" type="flex" justify="start">
              <a-col :span="16">
                <div class="fs-28 fw-600 f-default cr-black">
                  <span>Kain Ihram Umrah</span>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="d-flex align-end align-items-center text-right">
                  <div>
                    <a @click="toggleWishlist" class="fs-22 cr-gray mb-0">
                      <a-icon v-if="wishlist == false" type="heart" />
                      <a-icon
                        v-else-if="wishlist == true"
                        type="heart"
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                      />
                    </a>
                  </div>
                  <a-avatar
                    size="large"
                    :style="{ marginRight: '0', backgroundImage: 'url(https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png)' }"
                    class="brand-vendor ml-16"
                  />
                </div>
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

    <!-- comments -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="ulasan">
      <comments-equipment />
    </a-card>

    <!-- vendor -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="vendor">
      <vendor-equipment />
    </a-card>

    <!-- policy -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="policy">
      <policy />
    </a-card>

    <!-- faq -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="faq">
      <faq />
    </a-card>
  </section>
</template>
<script>
import commentsEquipment from "~/components/contents/details/equipment/comments.vue";
import vendorEquipment from "~/components/contents/details/equipment/vendor.vue";
import policy from "~/components/contents/details/equipment/policy.vue";
import faq from "~/components/contents/details/equipment/faq.vue";
import moment from "moment";
export default {
  components: {
    commentsEquipment,
    vendorEquipment,
    policy,
    faq
  },
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