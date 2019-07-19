<template>
  <div class="ant-layout--results-filter">
    <a-card class="ant-card--results-filter d-flex align-items-center" :bordered="false">
      <div class="ant-card--results-filter-label">Filter pencarian</div>
      <div>
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" href="#">
            Vendor
            <a-icon type="down"/>
          </a>
          <a-card slot="overlay">
            <div class="ant-filter-dropdown--overlay">
              <a-radio-group name="rating_hotel">
                <a-radio :style="radioStyle" :value="1">Tampilkan Semua</a-radio>
                <a-radio :style="radioStyle" :value="2">Subur Jaya</a-radio>
              </a-radio-group>
            </div>
          </a-card>
        </a-dropdown>

        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" href="#">
            Harga
            <a-icon type="down"/>
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
            <a-icon type="down"/>
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
            <a-icon type="down"/>
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
  </div>
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