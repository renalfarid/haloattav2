<template>
  <a-layout :style="{ maxWidth: '1200px', margin: '0 auto' }">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed'}" width="280">
      <a-card class="ant-card--steps-proggress" :bordered="false">
        <sider-steps :active="active" />

        <div class="ant-card--footer">
          <a-button size="large" block @click="nextSteps">Lanjutkan</a-button>
        </div>
      </a-card>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '280px', padding: '24px' }">
      <a-layout-content class="ant-layout-content--steps">
        <a-row type="flex" justify="space-between" align="middle" :gutter="24">
          <a-col :span="14">
            <div class="fs-20 fw-500 cr-black f-default mb-16">
              Bagaimana Mengatur Tampilan
              <br />Paket Umrah Saya ?
            </div>
            <div class="fs-14 fw-400 cr-black mb-8">
              Berikut cara pengaturan paket umrah anda,
              pilihan nama paket umrah anda,
              selanjutnya pilih gambar tampilan paket.
              Tentukan tanggal Publish dan tanggal closing paket umrah anda.
            </div>
          </a-col>
          <a-col :span="10">
            <img
              class="max-width m-auto d-block"
              style="maxHeight: 135px"
              src="/icons/set_package.png"
            />
          </a-col>
        </a-row>

        <div class="fs-20 fw-500 cr-black mb-16 mt-16">Pengaturan Tampilan Paket</div>
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
          <a-form-item help="Pilih salah satu gambar tampilan paket umrah anda!">
            <span slot="label">Pilih Gambar</span>
            <a-list
              :grid="{ gutter: 16, xs: 2, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }"
              :dataSource="listGambar"
            >
              <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                <a-skeleton :loading="loading" active>
                  <a
                    v-on:click="selectedimages = item.key"
                    v-bind:class="[ selectedimages === item.key ? 'package-selected' : '' ]"
                  >
                    <div class="ant-card--package-selected">
                      <a-icon type="check-circle" theme="filled" />
                    </div>
                    <a-card class="ant-card-package b-radius">
                      <div slot="cover">
                        <div
                          class="ant-card-cover--images b-radius"
                          :style="{ backgroundImage: `url(${item.images_package})` }"
                        ></div>
                      </div>
                    </a-card>
                  </a>
                </a-skeleton>
              </a-list-item>
            </a-list>
          </a-form-item>
          <a-divider />
          <a-form-item help="Pilih nama paket umrah anda!">
            <span slot="label">Nama Paket</span>
            <a-select
              placeholder="Pilih Nama Paket"
              defaultValue="1"
              @change="handleChange"
              size="large"
            >
              <a-select-option value="1">Umrah September Makassar 9 Hari</a-select-option>
              <a-select-option value="2">Umrah Hemat September Makassar 9 Hari</a-select-option>
            </a-select>
          </a-form-item>
          <a-divider />
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Tanggal Publish" help="Pilih tanggal publish paket umrah anda!">
                <a-date-picker
                  :disabledDate="disabledStartDate"
                  :defaultValue="moment('2019/07/10', dateFormat)"
                  :format="dateFormat"
                  v-model="startValue"
                  placeholder="Pilih tanggal publish"
                  @openChange="handleStartOpenChange"
                  size="large"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Tanggal Closing" help="Pilih tanggal closing paket umrah anda!">
                <a-date-picker
                  :disabledDate="disabledEndDate"
                  :defaultValue="moment('2019/07/19', dateFormat)"
                  :format="dateFormat"
                  placeholder="Pilih tangal closing"
                  v-model="endValue"
                  :open="endOpen"
                  @openChange="handleEndOpenChange"
                  size="large"
                  style="width: 100%"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-divider />
          <a-form-item class="text-right">
            <a-button @click="showModal" size="large" class="ant-btn--action" icon="layout">Lihat Pratinjau</a-button>
          </a-form-item>
        </a-form>

        <a-modal :footer="false" v-model="visible" title="Pratinjau Paket" :width="400">
          <a-card class="ant-card-package">
            <nuxt-link to="/umrah/detail-package" class="ant-list-item--link"></nuxt-link>
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${coverPackage})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title">sisa</div>
                    <div class="ant-card-cover--overlay-text-subtitle">
                      <span>8</span> pax
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a-card-meta>
              <div slot="title">
                <div class="ant-card-meta-title--top d-flex align-items-center">
                  <div class="ant-card-meta-title--top-left">
                    <a-rate :defaultValue="3" disabled />
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>0</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package">Umrah September 2020 Keberangkatan Jakarta</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled" />0
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message" />0 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
          <a-divider />
          <a-button class="ant-btn-modal--action" size="large" block>Lanjutkan</a-button>
        </a-modal>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import moment from "moment";
import siderSteps from "~/pages/create/steps/sider.vue";
import coverPackage from "~/static/products/V1.png";
const listGambar = [
  {
    key: 1,
    images_package: "/products/V1.png"
  },
  {
    key: 2,
    images_package: "/products/V2.png"
  },
  {
    key: 3,
    images_package: "/products/V3.png"
  },
  {
    key: 4,
    images_package: "/products/V4.png"
  }
];
export default {
  layout: "application",
  name: "setPackage",
  head() {
    return {
      title: "Pengaturan Paket - Buat Paket Umrah | Haloatta"
    };
  },
  data() {
    return {
      dateFormat: 'YYYY/MM/DD',
      loading: true,
      visible: false,
      selectedimages: 2,
      active: 7,
      coverPackage,
      listGambar,
      startValue: null,
      endValue: null,
      endOpen: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  watch: {
    startValue(val) {
      console.log("startValue", val);
    },
    endValue(val) {
      console.log("endValue", val);
    }
  },
  methods: {
    moment,
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        } else {
          return;
        }
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    showModal() {
      this.visible = true;
    },
    nextSteps() {
      this.$router.push('/create/steps/preview');
    }
  },
  components: {
    siderSteps
  }
};
</script>