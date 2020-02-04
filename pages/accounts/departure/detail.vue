<template>
  <div class="ant-layout--accounts-management-seat">
    <div class="mb-16">
      <nuxt-link to="/accounts/departure" class="fs-14 fw-400 cr-gray">
        <a-icon type="left" class="mr-8" />Kembali
      </nuxt-link>
    </div>
    <a-card :bordered="false" class="b-shadow b-solid b-radius mb-16">
      <div slot="title">Detail Produk</div>
      <div slot="extra" class="fs-16 fw-500 cr-black">
        No. Transaksi {{ data.info.nomor_transaksi }}
      </div>
      <a-row :gutter="8">
        <a-col :span="12">
          <div class="d-flex align-items-center">
            <div class="mr-8">
              <a-avatar
                style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                src="/icons/search/tabs/color/umrah.svg"
              />
            </div>
            <div class="fs-14 fw-500 cr-black f-default">
              <span>{{ data.info.nama_paket }}</span
              >,
              <br />
              <!-- <span>Keberangkatan Makassar</span> -->
            </div>
          </div>
        </a-col>
        <a-col :span="4">
          <div class="fs-14 fw-400 cr-gray">Tanggal Keberangkatan</div>
          <div class="fs-14 fw-500 cr-black">
            {{
              data.info.tanggal_keberangkatan
                ? moment(data.info.tanggal_keberangkatan, 'YYYY-MM-DD').format(
                    'LL'
                  )
                : '-'
            }}
          </div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Program Hari</div>
          <div class="fs-14 fw-500 cr-black">
            Program
            {{ data.info.program_hari ? data.info.program_hari : '-' }} Hari
          </div>
        </a-col>
        <a-col :span="4" class="text-right">
          <div class="fs-14 fw-400 cr-gray">Jumlah Pax</div>
          <div class="fs-14 fw-500 cr-black">{{ data.info.pax }} Pax</div>
        </a-col>
      </a-row>
    </a-card>

    <div class="fs-16 fw-500 cr-black">Informasi Pax Anda</div>
    <a-list itemLayout="horizontal" :dataSource="data.listBooking">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <div class="w-100">
          <a-row
            :gutter="16"
            type="flex"
            justify="space-around"
            align="middle"
            class="m-0 p-24"
          >
            <a-col :span="12">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: rgba(15, 172, 243, .1);color: #0FACF3"
                    >{{ ++index }}</a-avatar
                  >
                </div>
                <div>
                  <div class="fs-14 fw-400 cr-gray">Kode Booking</div>
                  <div class="fs-14 fw-500 cr-black">
                    {{ item.kode_booking }}
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="fs-14 fw-400 cr-gray">Status Berkas</div>
              <div
                class="fs-14 fw-500 cr-red"
                v-if="item.status_berkas === 'Belum Lengkap'"
              >
                {{ item.status_berkas }}
              </div>

              <div class="fs-14 fw-500 cr-green" v-else>
                {{ item.status_berkas }}
              </div>
            </a-col>
            <a-col :span="4" class="text-right">
              <nuxt-link
                :to="
                  '/accounts/jamaah/berkas?nomor_transaksi=' +
                    notrans +
                    '&kode_booking=' +
                    item.kode_booking
                "
              >
                <span class="fs-14 fw-500 cr-green">
                  Lihat Formulir
                  <a-icon type="right" class="ml-8" />
                </span>
              </nuxt-link>
            </a-col>
          </a-row>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined;
import axios from 'axios';
import moment from 'moment';
export default {
  middleware: 'authenticated',
  layout: 'accounts',
  name: 'mitraDaftarSeat',
  head() {
    return {
      title: 'Daftar Pemberangkatan - Kembangkan Bisnis Umrah Anda | Haloatta'
    };
  },

  data() {
    return {
      data: {
        info: '',
        listBooking: '',
        notrans: ''
      }
    };
  },
  created: function() {
    this.getdata();
  },
  methods: {
    moment,
    async getdata() {
      const token = Cookie.get('auth');
      const config = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      };

      this.notrans = this.$route.query.nomor_transaksi;

      axios
        .get(
          process.env.baseUrl +
            'jamaah/booking?nomor_transaksi=' +
            this.notrans,
          config
        )
        .then(response => {
          if (response.data.status == 200) {
            this.data.info = response.data.data.index;
            this.data.listBooking = response.data.data.list_booking;
          } else {
            this.$message.error(response.data.msg);
          }
        })
        .catch(() => {
          this.$message.error('Terjadi Salah');
        });
    }
  }
};
</script>
