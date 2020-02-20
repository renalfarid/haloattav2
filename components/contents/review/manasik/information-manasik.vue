<template>
  <section>
    <a-card
      class="b-shadow b-solid b-radius bordered-left mt-24 mb-16"
      id="informasi"
    >
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <div class="d-flex align-items-center">
              <div class="fs-28 fw-600 cr-black">
                <span>{{ data.nama }}</span>
              </div>

              <a-avatar
                :size="64"
                :style="{
                  marginRight: '0',
                  backgroundImage:
                    'url(https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-512.png)'
                }"
                class="brand-vendor ml-auto"
              />
            </div>
          </div>
        </a-list-item>
        
        <a-list-item class="ant-list-item--package-information">
          <div class="w-100">
            <div class="fs-14 cr-black" v-html="data.deskripsi"></div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- Fasilitas -->
    <a-card
      class="b-shadow bordered-left b-radius b-solid ant-list-item--package-information mb-16"
      id="fasilitas"
    >
      <div class="fs-16 fw-500 cr-black mb-24">Fasilitas Room</div>
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;min-width:24px"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">550 sqm</div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;min-width:24px"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">
                Theatre Setup for 600 people
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;min-width:24px"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">
                Cocktail Setup for 800 people
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;min-width:24px"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">
                Classroom Setup for 300 people
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;min-width:24px"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">
                Round Table Setup for 350 people
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3;min-width:24px"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-14 fw-400 cr-black">
                U-shape Setup for100 people
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </section>
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
