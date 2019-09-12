<template>
  <section>
    <a-card class="b-shadow b-solid bordered-left mt-32 mb-16" id="informasi">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <a-row :gutter="16" type="flex" justify="start">
              <a-col :span="16">
                <div class="fs-28 fw-600 f-default cr-black">
                  <span>Handling Domestik Perjalanan Umrah Bina Avia Persada</span>
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
            <a-row :gutter="16">
              <a-col :span="12">
                <a-row :gutter="16">
                  <a-col :span="24" class="mb-16">
                    <div class="d-flex align-items-start">
                      <a-avatar
                        style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                        class="mr-8"
                        size="small"
                        icon="check"
                      />
                      <div>
                        <div class="fs-15 fw-400 cr-gray f-default">Tipe Handling</div>
                        <div class="fs-15 fw-500 cr-black text-capitalize">VVIP</div>
                      </div>
                    </div>
                  </a-col>

                  <a-col :span="24" class="mb-16">
                    <div class="d-flex align-items-start">
                      <a-avatar
                        style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                        class="mr-8"
                        size="small"
                        icon="check"
                      />
                      <div>
                        <div class="fs-15 fw-400 cr-gray f-default">Durasi</div>
                        <div class="fs-15 fw-500 cr-black text-capitalize">30 Hari</div>
                      </div>
                    </div>
                  </a-col>

                  <a-col :span="24">
                    <div class="d-flex align-items-start">
                      <a-avatar
                        style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                        class="mr-8"
                        size="small"
                        icon="check"
                      />
                      <div>
                        <div class="fs-15 fw-400 cr-gray f-default">Layanan</div>
                        <div class="fs-15 fw-500 cr-black text-capitalize">Pulang Pergi</div>
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </a-col>

              <a-col :span="12">
                <a-row :gutter="16">
                  <a-col :span="24" class="mb-16">
                    <div class="d-flex align-items-start">
                      <a-avatar
                        style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                        class="mr-8"
                        size="small"
                        icon="check"
                      />
                      <div>
                        <div class="fs-15 fw-400 cr-gray f-default">Keberangkatan</div>
                        <div
                          class="fs-15 fw-500 cr-black text-capitalize"
                        >{{moment("2019-11-24", "YYYY-MM-DD").format('LL')}}</div>
                      </div>
                    </div>
                  </a-col>

                  <a-col :span="24" class="mb-16">
                    <div class="d-flex align-items-start">
                      <a-avatar
                        style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                        class="mr-8"
                        size="small"
                        icon="check"
                      />
                      <div>
                        <div class="fs-15 fw-400 cr-gray f-default">Kedatangan</div>
                        <div
                          class="fs-15 fw-500 cr-black"
                        >{{moment("2019-11-24", "YYYY-MM-DD").format('LL')}}</div>
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- Fasilitas -->
    <a-card
      class="b-shadow bordered-left b-solid ant-list-item--package-information mb-16"
      id="manfaat"
    >
      <div class="fs-16 fw-500 cr-black mb-24">Manfaat Handling</div>
      <a-row :gutter="8">
        <a-col :span="12" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Bantuan check in boarding pass bandara domestik</div>
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
              <div class="fs-15 fw-500 cr-black">Pengurusan bagasi jamaah rombongan</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>

    <!-- comments -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="ulasan">
      <comments-handling />
    </a-card>

    <!-- vendor -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="vendor">
      <vendor-handling />
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
import commentsHandling from "~/components/contents/details/handling/comments.vue";
import vendorHandling from "~/components/contents/details/handling/vendor.vue";
import policy from "~/components/contents/details/handling/policy.vue";
import faq from "~/components/contents/details/handling/faq.vue";
import moment from "moment";
export default {
  components: {
    commentsHandling,
    vendorHandling,
    policy,
    faq
  },
  methods: {
    moment
  }
};
</script>