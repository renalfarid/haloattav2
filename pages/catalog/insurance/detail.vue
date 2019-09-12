<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <div class="info-affix">
      <a-anchor :offsetTop="64">
        <a-anchor-link href="#informasi" title="Informasi" />
        <a-anchor-link href="#manfaat" title="Manfaat" />
        <a-anchor-link href="#ulasan" title="Ulasan" />
        <a-anchor-link href="#vendor" title="Vendor" />
        <a-anchor-link href="#policy" title="Kebijakan" />
        <a-anchor-link href="#faq" title="FAQ" />
      </a-anchor>
    </div>

    <div class="ant-package--images w-100">
      <a-row>
        <a-col :span="10">
          <div class="ant-package--images-large">
            <div
              class="ant-package--images-cover"
              :style="{ backgroundImage: 'url(/asuransi/package/a1.png)' }"
            ></div>
          </div>
        </a-col>
        <a-col :span="6">
          <a-row>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/asuransi/package/a2.png)' }"
                ></div>
              </div>
            </a-col>
            <a-col :span="24">
              <div class="ant-package--images-small">
                <div
                  class="ant-package--images-cover"
                  :style="{ backgroundImage: 'url(/asuransi/package/a3.png)' }"
                ></div>
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <div class="ant-package--images-large">
            <div
              class="ant-package--images-cover"
              :style="{ backgroundImage: 'url(/asuransi/package/a4.png)' }"
            ></div>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="container">
      <a-row :gutter="32">
        <a-col :span="17">
          <div class="ant-layout--package-details-body">
            <information-insurance />
          </div>
        </a-col>

        <a-col :span="7">
          <div class="ant-layout--right" :style="{ margin: '32px 0'}">
            <div class="ant-affix--container">
              <information-sideright />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import informationInsurance from "~/components/contents/details/insurance/information-insurance.vue";
import informationSideright from "~/components/contents/details/insurance/information-sideright.vue";
export default {
  name: "detailInsurance",
  head() {
    return {
      title:
        "Asuransi Perjalanan Umrah September 2019 - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {};
  },
  components: {
    informationInsurance,
    informationSideright
  }
};
</script>
