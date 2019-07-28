<template>
  <div class="ant-fee">
    <a-row :gutter="16">
      <a-col :span="12">
        <div class="fs-18 fw-500 cr-black">Formulir Pengajuan Fee</div>
      </a-col>
      <a-col :span="12">
        <a class="d-flex align-items-center align-end" @click="showFee">
          <div class="mr-16">
            <div class="fs-12 fw-400 text-uppercase f-default cr-gray">Total Fee Penjualan</div>
            <div class="fs-18 fw-500 cr-black f-default">Rp {{jumlahFee}}</div>
          </div>
          <div class="mr-16">
            <a-icon :type="seeFee ? 'up' : 'down'" />
          </div>
        </a>
      </a-col>
    </a-row>

    <a-card class="b-shadow b-radius b-solid p-24 mt-16" :bordered="false" v-show="seeFee">
      <a-card-grid style="width:50%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 2px"
              src="/icons/search/tabs/white/umrah.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">umrah</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 10.300.000</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:25%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
              src="/icons/search/tabs/white/ticket.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">tiket group</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:25%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
              src="/icons/search/tabs/white/accommodation.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">LA Akomodasi</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:25%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
              src="/icons/search/tabs/white/visa.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">Visa</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:50%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
              src="/icons/search/tabs/white/insurance.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">Asuransi</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:25%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
              src="/icons/search/tabs/white/handling.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">Handling Umrah</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:25%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
              src="/icons/search/tabs/white/manasik.svg"
            />
          </div>
          <div>
            <div class="text-ellipsis text-uppercase fs-13 fw-400 cr-gray f-default">Manasik Umrah</div>
            <div class="text-ellipsis fs-18 fw-500 cr-black f-default">Rp 0</div>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid style="width:25%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
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
      <a-card-grid style="width:50%;">
        <div class="d-flex align-items-center">
          <div class="mr-16">
            <a-avatar
              style="backgroundColor: #0FACF3;padding: 4px"
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
    </a-card>

    <a-card class="b-shadow b-radius b-solid mt-16">
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Rekening Bank Anda">
              <a-select
                v-decorator="['bank',{ rules: [{ required: true, message: 'Harus di isi!' }] }]"
                placeholder="Pilih Rekening Bank Anda"
                size="large"
              >
                <a-select-option value="BCA - 1234567890">BCA - 1234567890</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
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
          </a-col>
        </a-row>

        <a-form-item label="Keterangan">
            <a-textarea v-decorator="['desc',{ rules: [{ required: true, message: 'Harus di isi!' }] }]" :rows="4" />
        </a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          size="large"
          class="b-radius b-shadow"
        >Kirim Pengajuan</a-button>
      </a-form>
    </a-card>
  </div>
</template>
<script>
export default {
  layout: "accounts",
  name: "feeSales",
  head() {
    return {
      title: "Formulir Pengajuan Fee - Haloatta"
    };
  },
  data() {
    return {
      seeFee: false,
      jumlahFee: 10300000
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    showFee() {
      this.seeFee = !this.seeFee;
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