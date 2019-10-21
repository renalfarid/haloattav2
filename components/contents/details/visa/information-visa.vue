<template>
  <section>
    <a-card class="b-shadow b-solid bordered-left mt-32 mb-16" id="informasi">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <a-row :gutter="16" type="flex" justify="start">
              <a-col :span="16">
                <div class="fs-28 fw-600 f-default cr-black">
                  <span>{{data.nama}}</span>
                </div>
                <a-badge
                  status="warning"
                  text="Periode Low Season"
                  class="text-uppercase mb-0 mt-16"
                />
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
            <a-row :gutter="16">
              <a-col :span="12" class="mb-16">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Jenis Visa</div>
                    <div class="fs-15 fw-500 cr-black text-capitalize">Visa Umrah</div>
                  </div>
                </div>
              </a-col>

              <a-col :span="12" class="mb-16">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Durasi</div>
                    <div class="fs-15 fw-500 cr-black text-capitalize">{{data.duration_stay}} Hari</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- comments -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="ulasan">
      <comments-visa />
    </a-card>

    <!-- vendor -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="vendor">
      <vendor-visa />
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
import commentsVisa from "~/components/contents/details/visa/comments.vue";
import vendorVisa from "~/components/contents/details/visa/vendor.vue";
import policy from "~/components/contents/details/visa/policy.vue";
import faq from "~/components/contents/details/visa/faq.vue";
import moment from "moment";
export default {
  props: ["data"],
  components: {
    commentsVisa,
    vendorVisa,
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