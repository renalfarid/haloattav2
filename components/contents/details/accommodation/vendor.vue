<template>
  <a-list itemLayout="horizontal" class="ant-list--package-information">
    <a-list-item class="ant-list-item--package-information pt-0">
      <div class="w-100">
        <a-row :gutter="16" type="flex" justify="start">
          <a-col :span="16">
            <div class="fs-16 fw-500 cr-black" id="vendor">Vendor Tiket</div>
            <div class="fs-20 fw-600 cr-black f-default">{{vendor.nama_vendor}}</div>
            <div class="fs-14 fw-400 cr-gray mb-8">
              Jakarta (belum ada)
              <a-divider type="vertical"></a-divider>
              Bergabung sejak {{moment(vendor.created_at, "YYYY-MM-DD").format('LL')}}
            </div>
            <div class="fs-14 fw-400 cr-gray">
              <a-icon type="safety-certificate" class="cr-primary mr-8" />Terverifikasi
            </div>
          </a-col>
          <a-col :span="8" class="text-right">
            <a-avatar
              :size="64"
              :style="{ marginRight: '0', backgroundImage: `url(${vendor.foto})` }"
              class="brand-vendor ml-auto"
            />
          </a-col>
        </a-row>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <div class="fs-14 cr-black mb-4">
          <span>{{vendor.description}}</span>
        </div>
      </div>
    </a-list-item>

    <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <div class="fs-14 cr-black mb-4">
          <span>Alamat Kantor : Jl. BTP Blok A No 537 (belum ada)</span>
        </div>
        <div class="fs-14 cr-black mb-0">
          <span>Respon : 100%(belum ada)</span>
        </div>
      </div>
    </a-list-item>

    <!-- <a-list-item class="ant-list-item--package-information">
      <div class="w-100">
        <div class="fs-14 cr-black mb-4">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur nesciunt deleniti nobis doloribus enim unde animi ab. Accusamus aut numquam id iste non consequatur voluptatem deserunt nisi</span>
        </div>
        <nuxt-link to class="cr-primary fs-14">Pelajari Selengkapnya</nuxt-link>
      </div>
    </a-list-item>-->
  </a-list>
</template>
<script>
import moment from "moment";
export default {
  props: ["vendor"],
  methods: {
    moment
  }
};
</script>