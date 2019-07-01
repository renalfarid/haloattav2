<template>
  <div class="ant-layout-accounts--list-package">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item>Akun</a-breadcrumb-item>
      <a-breadcrumb-item>Paket umrah</a-breadcrumb-item>
    </a-breadcrumb>

    <div class="ant-header--title">Semua Paket Umrah</div>
    <div>
      <searchUmrah />
    </div>

    <div>
      <filterUmrah />
    </div>

    <div class="ant-layout-accounts--list-package-body">
      <a-list :grid="{ gutter: 16, column: 3 }" :pagination="pagination" :dataSource="listData">
        <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
          <a-card class="ant-card-package-mitra">
            <div slot="cover">
              <div
                class="ant-card-cover--images"
                :style="{ backgroundImage: `url(${packageUmrah})` }"
              >
                <div class="ant-card-cover--overlay">
                  <div class="ant-card-cover--overlay-box-radius"></div>
                  <div class="ant-card-cover--overlay-text">
                    <div class="ant-card-cover--overlay-text-title">sisa</div>
                    <div class="ant-card-cover--overlay-text-subtitle">
                      <span>{{item.pax}}</span> pax
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a-card-meta>
              <div slot="title">
                <div class="ant-card-meta-title--top d-flex align-items-center">
                  <div class="ant-card-meta-title--top-left">
                    <a-icon type="star" theme="filled" />
                    <a-icon type="star" theme="filled" />
                    <a-icon type="star" theme="filled" />
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled" />5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message" />10 Komentar
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                    <div><a-avatar slot="avatar" size="large" src="/user/maha_user.jpg" /></div>
                    <div class="ant-card-meta-title--package">{{item.title}}</div>
                </div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp{{item.price}}</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto">
                    <a-button>Pesan</a-button>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import searchUmrah from "~/components/accounts/contents/mitra/lib/umrah/search-umrah.vue";
import filterUmrah from "~/components/accounts/contents/mitra/lib/umrah/filter-umrah.vue";
import packageUmrah from "~/static/products/V1.png";
const listData = [];
for (let i = 1; i < 23; i++) {
  listData.push({
    title: 'Umrah Exclusive 2020 Keberangkatan Jakarta',
    price: `2${i}.000.000`,
    pax: `1${i}`
  });
}
export default {
  layout: "accounts",
  name: "listPackageMitra",
  head() {
    return {
      title: "Semua Paket Umrah - Kembangkan Bisnis Umrah Anda"
    };
  },
  data() {
    return {
      packageUmrah,
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        showTotal: total => `Total ${total} Paket Umrah`,
        pageSize: 9
      }
    };
  },
  components: {
    searchUmrah,
    filterUmrah
  }
};
</script>
