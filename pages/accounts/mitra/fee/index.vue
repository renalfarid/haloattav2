<template>
  <div class="ant-fee">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
      <a-col :span="12">
        <div class="fs-18 fw-500 cr-black">Fee Penjualan</div>
      </a-col>
      <a-col :span="12">
        <a class="d-flex align-items-center align-end" @click="showFee">
          <div class="mr-16">
            <div class="fs-12 fw-400 text-uppercase f-default cr-gray">Total Fee Penjualan</div>
            <div class="fs-18 fw-500 cr-black f-default">{{ jumlahFee | currency }}</div>
          </div>
          <div class="mr-16">
            <a-icon :type="seeFee ? 'up' : 'down'" />
          </div>
        </a>
      </a-col>
    </a-row>

    <div v-show="seeFee">
      <a-card class="b-shadow b-radius b-solid mt-16 mb-16" :bordered="false">
        <a-row :gutter="16" class="mb-16">
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #05CBB0;padding: 2px"
                    src="/icons/search/tabs/white/umrah.svg"
                  />
                </div>
                <div>
                  <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">umrah</div>
                  <div
                    class="text-ellipsis fs-18 fw-500 cr-black f-default"
                  >{{ 10000000 | currency }}</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #0FACF3;padding: 4px"
                    src="/icons/search/tabs/white/ticket.svg"
                  />
                </div>
                <div>
                  <div
                    class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default"
                  >tiket group</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #F84ECA;padding: 4px"
                    src="/icons/search/tabs/white/accommodation.svg"
                  />
                </div>
                <div>
                  <div
                    class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default"
                  >LA Akomodasi</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
        </a-row>

        <a-row :gutter="16" class="mb-16">
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #FF7C0A;padding: 4px"
                    src="/icons/search/tabs/white/visa.svg"
                  />
                </div>
                <div>
                  <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">Visa</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #52c41a;padding: 4px"
                    src="/icons/search/tabs/white/insurance.svg"
                  />
                </div>
                <div>
                  <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">Asuransi</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #484848;padding: 4px"
                    src="/icons/search/tabs/white/handling.svg"
                  />
                </div>
                <div>
                  <div
                    class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default"
                  >Handling Umrah</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
        </a-row>

        <a-row :gutter="16" class="mb-16">
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #CB9605;padding: 4px"
                    src="/icons/search/tabs/white/manasik.svg"
                  />
                </div>
                <div>
                  <div
                    class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default"
                  >Manasik Umrah</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #F43662;padding: 4px"
                    src="/icons/search/tabs/white/equipment.svg"
                  />
                </div>
                <div>
                  <div
                    class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default"
                  >Perlengkapan Umrah</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
          <a-col :span="8">
            <a-card-grid class="b-radius" style="width: 100%">
              <div class="d-flex align-items-center">
                <div class="mr-16">
                  <a-avatar
                    style="backgroundColor: #FFD500;padding: 4px"
                    src="/icons/search/tabs/white/tourleader.svg"
                  />
                </div>
                <div>
                  <div
                    class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default"
                  >Tour Leader Umrah</div>
                  <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
                </div>
              </div>
            </a-card-grid>
          </a-col>
        </a-row>

        <a-row :gutter="16" type="flex" justify="end">
          <a-col :span="8">
            <a-button
              class="fs-15 fw-500 b-shadow b-radius text-uppercase"
              type="primary"
              size="large"
              icon="reconciliation"
              @click="showWithdraw"
              block
            >Form Pengajuan Fee</a-button>
          </a-col>
        </a-row>
      </a-card>

      <a-divider></a-divider>
    </div>

    <a-list itemLayout="horizontal" :dataSource="dataSales">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :key="index"
        class="b-solid b-radius b-shadow mt-16 mb-16 p-0"
        style="backgroundColor: #ffffff"
      >
        <a-skeleton :loading="loading" active>
          <div class="w-100">
            <a-row :gutter="16" class="m-0 p-16">
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">No. Transaksi</div>
                <div class="fs-15 fw-500 cr-black">{{item.no_transaction}}</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Harga Dasar Umrah (HPP)</div>
                <div class="fs-15 fw-500 cr-black">{{ item.harga_dasar | currency }}</div>
              </a-col>
              <a-col :span="6">
                <div class="fs-14 fw-400 cr-gray">Margin Fee</div>
                <div class="fs-15 fw-500 cr-black">
                  {{ item.margin_fee_rupiah | currency }}
                  <a-divider type="vertical"></a-divider>
                  ({{item.margin_fee_persen}}%)
                </div>
              </a-col>
              <a-col :span="6" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Tanggal Penjualan</div>
                <div class="fs-15 fw-500 cr-black">
                  <span>{{item.datetime.format('llll')}}</span>
                </div>
              </a-col>
            </a-row>

            <a-row
              :gutter="16"
              type="flex"
              justify="space-between"
              align="middle"
              class="m-0 p-16"
              style="backgroundColor: #f5f5f5"
            >
              <a-col :span="12">
                <div class="d-flex align-items-center">
                  <div class="mr-8">
                    <a-avatar
                      style="backgroundColor: rgba(15, 172, 243, .1);padding: 2px"
                      src="/icons/search/tabs/color/umrah.svg"
                    />
                  </div>
                  <div>
                    <div class="fs-14 fw-400 cr-gray">Penjualan</div>
                    <div class="fs-15 fw-500 cr-black">{{item.name_package}}</div>
                  </div>
                </div>
              </a-col>
              <a-col :span="12" class="text-right">
                <div class="fs-14 fw-400 cr-gray">Tipe Pembayaran</div>
                <div class="fs-15 fw-500 cr-orange" v-if="item.payment === 'DP'">
                  <span>{{item.payment}}</span>
                </div>
                <div class="fs-15 fw-500 cr-green" v-if="item.payment === 'Lunas'">
                  <span>{{item.payment}}</span>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-skeleton>
      </a-list-item>
    </a-list>

    <!-- form pengajuan fee -->
    <a-drawer
      title="Form Pengajuan Penarikan Fee"
      :width="520"
      @close="onClose"
      :visible="visibleWithdraw"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-form-item label="Rekening Bank Anda">
          <a-select
            v-decorator="['bank',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
            placeholder="Pilih Rekening Bank Anda"
            size="large"
          >
            <a-select-option value="BCA - 1234567890">BCA - 1234567890</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Nominal Pengajuan">
          <a-input-number
            v-decorator="['nominal',{ initialValue: jumlahFee, rules: [{ required: true, message: 'Harus di isi!' }] }]"
            :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
            :max="jumlahFee"
            :min="100000"
            @change="onChange"
            size="large"
            style="width: 100%"
          />
        </a-form-item>

        <a-form-item label="Keterangan">
          <a-textarea
            v-decorator="['desc',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
            :rows="4"
          />
        </a-form-item>
        <div
          :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
        >
          <a-button :style="{marginRight: '8px'}" size="large" @click="onClose">Batalkan</a-button>
          <a-button
            type="primary"
            html-type="submit"
            size="large"
            class="b-radius b-shadow"
          >Kirim Pengajuan</a-button>
        </div>
      </a-form>
    </a-drawer>
  </div>
</template>
<script>
import moment from "moment";
const dataSales = [
  {
    no_transaction: "ATT-FEE-54021040019072938",
    datetime: moment("2019-06-28", "YYYY-MM-DD"),
    name_package:
      "Umrah Hemat September 2019 Program 9 Hari, keberangkatan Makassar",
    harga_dasar: 20000000,
    margin_fee_persen: 20,
    margin_fee_rupiah: 4000000,
    payment: "Lunas"
  }
];
export default {
  layout: "accounts",
  name: "feeSales",
  head() {
    return {
      title: "Fee Penjualan - Haloatta"
    };
  },
  data() {
    return {
      seeFee: true,
      visibleWithdraw: false,
      jumlahFee: 10000000,
      loading: true,
      dataSales,
      moment
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    showFee() {
      this.seeFee = !this.seeFee;
    },
    showWithdraw() {
      this.visibleWithdraw = true;
    },
    onClose() {
      this.visibleWithdraw = false;
    },
    onChange(value) {
      console.log(value);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    }
  }
};
</script>