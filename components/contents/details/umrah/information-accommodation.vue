<template>
  <div>
    <!-- information hotel makkah -->
    <a-card class="b-shadow b-solid mb-16">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="ant-package--images w-100" style="z-index: inherit">
            <a-row :gutter="10">
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.hotel_mekkah.img_room_double" />
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.hotel_mekkah.img_room_triple" />
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.hotel_mekkah.img_room_quard" />
                </div>
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
                    <div class="fs-15 fw-400 cr-gray f-default">Durasi Inap (belum ada)</div>
                    <div class="fs-15 fw-500 cr-black text-capitalize">3 Hari Makkah</div>
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
                    >{{data.hotel_mekkah.jarak_hotel || 'Belum ada'}}</div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-list-item>
      </a-list>
    </a-card>

    <!-- information hotel madinah -->
    <a-card class="b-shadow b-solid mb-16">
      <a-list itemLayout="horizontal" class="ant-list--package-information">
        <a-list-item class="ant-list-item--package-information pt-0">
          <div class="ant-package--images w-100" style="z-index: inherit">
            <a-row :gutter="10">
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.hotel_madinah.img_room_double" />
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.hotel_madinah.img_room_triple" />
                </div>
              </a-col>
              <a-col :span="8">
                <div class="ant-package--images-small">
                  <expandable-image :src="data.hotel_madinah.img_room_quard" />
                </div>
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
                    <div class="fs-15 fw-400 cr-gray f-default">Durasi Inap (belum ada)</div>
                    <div class="fs-15 fw-500 cr-black text-capitalize">3 Hari Makkah</div>
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
                    >{{data.hotel_madinah.jarak_hotel || 'Belum ada'}}</div>
                  </div>
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
      <a-row :gutter="8" v-if="fasilitas_termasuk != null">
        <a-col :span="6" class="mb-16" v-for="fasilitas in fasilitas_termasuk" :key="fasilitas">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black" v-html="fasilitas">{{fasilitas}}</div>
            </div>
          </div>
        </a-col>
        <!-- <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">City Tour</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Mutawwif</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Makanan Indonesia</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Akses Wifi</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Elevator</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Restaurant</div>
            </div>
          </div>
        </a-col>
        <a-col :span="6" class="mb-16">
          <div class="d-flex align-items-start">
            <a-avatar
              style="backgroundColor: rgba(15, 172, 243, .1);color:#0FACF3"
              class="mr-8"
              size="small"
              icon="check"
            />
            <div>
              <div class="fs-15 fw-500 cr-black">Resepsionis 1x24 Jam</div>
            </div>
          </div>
        </a-col>-->
      </a-row>
    </a-card>
  </div>
</template>
<script>
// import informationSideRight from "~/components/contents/details/umrah/information-sideright.vue";
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
      this.fasilitas_termasuk =
        this.$props.data.fasilitas != null
          ? this.$props.data.fasilitas.split("<br>")
          : null;
    }
  }
};
</script>
