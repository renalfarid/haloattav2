<template>
  <a-card class="ant-card-accounts--filter d-flex align-items-center" :bordered="false">
    <div class="ant-card-accounts--filter-label">Filter pencarian</div>
    <div>
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" href="#">
          Kota asal
          <a-icon type="down" />
        </a>
        <a-card slot="overlay">
          <div class="ant-filter-dropdown--overlay">
            <a-radio-group name="kota_asal">
              <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
              <a-radio :style="radioStyle" :value="2">Makassar</a-radio>
              <a-radio :style="radioStyle" :value="3">Jakarta</a-radio>
              <a-radio :style="radioStyle" :value="4">Bandung</a-radio>
            </a-radio-group>
          </div>
        </a-card>
      </a-dropdown>

      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" href="#">
          Rating Hotel
          <a-icon type="down" />
        </a>
        <a-card slot="overlay">
          <div class="ant-filter-dropdown--overlay">
            <a-radio-group name="rating_hotel">
              <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
              <a-radio :style="radioStyle" :value="2">
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
              </a-radio>
              <a-radio :style="radioStyle" :value="3">
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
              </a-radio>
              <a-radio :style="radioStyle" :value="4">
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
              </a-radio>
              <a-radio :style="radioStyle" :value="5">
                <a-icon type="star" theme="filled" />
                <a-icon type="star" theme="filled" />
              </a-radio>
            </a-radio-group>
          </div>
        </a-card>
      </a-dropdown>

      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" href="#">
          Harga
          <a-icon type="down" />
        </a>
        <a-card slot="overlay">
          <div class="ant-filter-dropdown--overlay">
            <a-radio-group name="harga">
              <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
              <a-radio :style="radioStyle" :value="2">Rp. 0 - Rp. 20.000.000</a-radio>
              <a-radio :style="radioStyle" :value="3">Rp. 20.000.000 - Rp. 30.000.000</a-radio>
              <a-radio :style="radioStyle" :value="4">Rp. 30.000.000 - Seterusnya</a-radio>
            </a-radio-group>
          </div>
        </a-card>
      </a-dropdown>

      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" href="#">
          Program Hari
          <a-icon type="down" />
        </a>
        <a-card slot="overlay">
          <div class="ant-filter-dropdown--overlay">
            <a-radio-group name="program_hari">
              <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
              <a-radio :style="radioStyle" :value="2">Program 9 Hari</a-radio>
              <a-radio :style="radioStyle" :value="3">Program 10 Hari</a-radio>
              <a-radio :style="radioStyle" :value="4">Program 11 Hari</a-radio>
            </a-radio-group>
          </div>
        </a-card>
      </a-dropdown>
    </div>
    <div class="ml-auto">
      <a-dropdown :trigger="['click']" placement="bottomRight">
        <a class="ant-dropdown-link" href="#" :style="{margin: '0'}">
          Urutkan
          <a-icon type="down" />
        </a>
        <a-card slot="overlay">
          <div class="ant-filter-dropdown--overlay">
            <a-radio-group name="program_hari">
              <a-radio :style="radioStyle" :value="1">Harga Termurah</a-radio>
              <a-radio :style="radioStyle" :value="2">Harga Termahal</a-radio>
            </a-radio-group>
          </div>
        </a-card>
      </a-dropdown>
    </div>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
    };
  },
  methods: {}
};
</script>