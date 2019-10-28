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
            <div class="fs-14 cr-black">{{data.deskripsi}}</div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- Fasilitas -->
    <a-card
      class="b-shadow bordered-left b-solid ant-list-item--package-information mb-16"
      id="fasilitas"
    >
      <div class="fs-16 fw-500 cr-black mb-24">Fasilitas Room</div>
      <a-row :gutter="8">
        <a-col :span="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">550 sqm</div>
            </div>
          </div>
        </a-col>
        <a-col :span="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">Theatre Setup for 600 people</div>
            </div>
          </div>
        </a-col>
        <a-col :span="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">Cocktail Setup for 800 people</div>
            </div>
          </div>
        </a-col>
        <a-col :span="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">Classroom Setup for 300 people</div>
            </div>
          </div>
        </a-col>
        <a-col :span="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">Round Table Setup for 350 people</div>
            </div>
          </div>
        </a-col>
        <a-col :span="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">U-shape Setup for100 people</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>

    <!-- comments -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="ulasan">
      <comments-manasik />
    </a-card>

    <!-- vendor -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="vendor">
      <vendor-manasik />
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
import commentsManasik from "~/components/contents/details/manasik/comments.vue";
import vendorManasik from "~/components/contents/details/manasik/vendor.vue";
import policy from "~/components/contents/details/manasik/policy.vue";
import faq from "~/components/contents/details/manasik/faq.vue";
import moment from "moment";
export default {
  props: ["data"],
  components: {
    commentsManasik,
    vendorManasik,
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
