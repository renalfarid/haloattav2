<template>
  <section>
    <!-- information hotel makkah -->
    <a-card class="b-shadow b-solid bordered-left mt-32 mb-16" id="hotelmakkah">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="w-100">
            <a-row :gutter="16" type="flex" justify="start">
              <a-col :span="16">
                <div class="fs-28 fw-600 f-default cr-black">{{data.informasi.nama}}</div>
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
                    :style="{ marginRight: '0', backgroundImage: `url(${data.informasi.foto})` }"
                    class="brand-vendor ml-16"
                  />
                </div>
              </a-col>
            </a-row>

            <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="mt-16">
              <a-col :span="12">
                <a-badge status="warning" :text="data.informasi.tipe" class="text-uppercase m-0" />
              </a-col>
              <a-col :span="12" class="text-right">
                <span
                  class="fs-14 fw-400 cr-gray text-capitalize"
                >Dari(belum ada) : {{moment("2019-10-24", "YYYY-MM-DD").format('LL')}}</span>
                <a-divider type="vertical"></a-divider>
                <span
                  class="fs-14 fw-400 cr-gray text-capitalize"
                >Sampai(belum ada) : {{moment("2019-10-24", "YYYY-MM-DD").format('LL')}}</span>
              </a-col>
            </a-row>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="d-flex align-items-start w-100">
            <div>
              <a-avatar size="small" shape="square" src="/icons/package/bedtime.png" />
            </div>
            <div class="w-100">
              <div class="d-flex align-items-center">
                <div>
                  <div class="fs-15 fw-400 cr-gray">Hotel Makkah</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>{{data.hotel_mekkah.nama_hotel}}</span>
                  </div>
                </div>
                <div class="ml-auto">
                  <a-rate class="fs-16" :defaultValue="data.hotel_mekkah.rating" disabled />
                </div>
              </div>
            </div>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="w-100">
            <a-row :gutter="8">
              <a-col :span="12">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Durasi Inap</div>
                    <div
                      class="fs-15 fw-500 cr-black text-capitalize"
                    >{{data.informasi.durasi_inap_mekkah}} Hari Makkah</div>
                  </div>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Jarak Hotel</div>
                    <div
                      class="fs-15 fw-500 cr-black"
                    >{{(data.hotel_mekkah.jarak_hotel !=null)?data.hotel_mekkah.jarak_hotel:'kosong'}}</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="ant-package--images w-100" style="z-index: inherit">
            <div class="fs-15 fw-400 cr-gray mb-16">Gambar Hotel</div>
            <a-row :gutter="10">
              <a-col :span="8">
                <div class="ant-package--images-large">
                  <div
                    class="ant-package--images-cover"
                    :style="{ backgroundImage: `url(${data.hotel_mekkah.img_room_double})` }"
                  ></div>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-large">
                  <div
                    class="ant-package--images-cover"
                    :style="{ backgroundImage: `url(${data.hotel_mekkah.img_room_triple})` }"
                  ></div>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-large">
                  <div
                    class="ant-package--images-cover"
                    :style="{ backgroundImage: `url(${data.hotel_mekkah.img_room_quard})` }"
                  ></div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- information hotel madinah -->
    <a-card class="b-shadow b-solid bordered-left mb-16" id="hotelmadinah">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="d-flex align-items-start w-100">
            <div>
              <a-avatar size="small" shape="square" src="/icons/package/bedtime.png" />
            </div>
            <div class="w-100">
              <div class="d-flex align-items-center">
                <div>
                  <div class="fs-15 fw-400 cr-gray">Hotel Madinah</div>
                  <div class="fs-15 fw-500 cr-black text-uppercase">
                    <span>{{data.hotel_madinah.nama_hotel}}</span>
                  </div>
                </div>
                <div class="ml-auto">
                  <a-rate class="fs-16" :defaultValue="data.hotel_madinah.rating" disabled />
                </div>
              </div>
            </div>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="w-100">
            <a-row :gutter="8">
              <a-col :span="12">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Durasi Inap</div>
                    <div
                      class="fs-15 fw-500 cr-black text-capitalize"
                    >{{data.informasi.durasi_inap_madinah}} Hari Makkah</div>
                  </div>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="d-flex align-items-start">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
                    class="mr-8"
                    size="small"
                    icon="check"
                  />
                  <div>
                    <div class="fs-15 fw-400 cr-gray f-default">Jarak Hotel</div>
                    <div
                      class="fs-15 fw-500 cr-black"
                    >{{(data.hotel_madinah.jarak_hotel !=null)?data.hotel_madinah.jarak_hotel:'kosong'}}</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>

        <a-list-item class="ant-list-item--package-information">
          <div class="ant-package--images w-100" style="z-index: inherit">
            <div class="fs-15 fw-400 cr-gray mb-16">Gambar Hotel</div>
            <a-row :gutter="10">
              <a-col :span="8">
                <div class="ant-package--images-large">
                  <div
                    class="ant-package--images-cover"
                    :style="{ backgroundImage: `url(${data.hotel_madinah.img_room_double})` }"
                  ></div>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-large">
                  <div
                    class="ant-package--images-cover"
                    :style="{ backgroundImage: `url(${data.hotel_madinah.img_room_triple})` }"
                  ></div>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-large">
                  <div
                    class="ant-package--images-cover"
                    :style="{ backgroundImage: `url(${data.hotel_madinah.img_room_quard})` }"
                  ></div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- fasilitas -->
    <a-card class="b-shadow bordered-left b-solid mb-16" id="fasilitas">
      <div class="fs-16 fw-500 cr-black mb-24">Fasilitas Termasuk</div>
      <p>{{data.informasi.fasilitas_termasuk}}</p>
      <a-row :gutter="8"></a-row>
    </a-card>
  </section>
</template>
<script>
import moment from "moment";
export default {
  props: ["data"],
  data() {
    return {
      wishlist: false,
      fasilitas_termasuk: []
    };
  },
  created() {
    this.splitFasilitas();
  },
  methods: {
    splitFasilitas() {
      // this.fasilitas_termasuk = this.data.informasi.fasilitas_termasuk.split("<br>");
    },
    moment,
    toggleWishlist() {
      this.wishlist = !this.wishlist;
    }
  }
};
</script>
