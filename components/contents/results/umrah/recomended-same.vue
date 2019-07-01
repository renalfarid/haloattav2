<template>
  <div class="container">
    <div class="header-title">
      <a-row :gutter="16" type="flex" justify="center" align="middle">
        <a-col :span="16">
          <h2 class="title">Rekomendasi Paket Umrah Sejenis</h2>
        </a-col>
        <a-col :span="8" class="text-right">
          <nuxt-link to="/umrah/recomended-same-list">Telusuri <a-icon type="right" /></nuxt-link>
        </a-col>
      </a-row>
    </div>

    <div class="container-slick">
      <slick ref="slick" :options="slickRecomended">
        <div>
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${vaforite1})` }">
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
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>30</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled"/>5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message"/>10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </div>

        <div>
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${vaforite2})` }">
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
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>30</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled"/>5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message"/>10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </div>

        <div>
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${vaforite3})` }">
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
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>30</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled"/>5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message"/>10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </div>

        <div>
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${vaforite4})` }">
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
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>30</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled"/>5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message"/>10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </div>

        <div>
          <a-card class="ant-card-package-small">
            <div slot="cover">
              <div class="ant-card-cover--images" :style="{ backgroundImage: `url(${vaforite3})` }">
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
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                    <a-icon type="star" theme="filled"/>
                  </div>
                  <div class="ant-card-meta-title--top-right ml-auto">
                    <a-tag>
                      Terbooking
                      <strong>30</strong> seat
                    </a-tag>
                  </div>
                </div>
                <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
              </div>

              <div slot="description">
                <div class="ant-card-meta-description--bottom d-flex align-items-center">
                  <div class="ant-card-meta-description--bottom-left">Rp 20.000.000</div>
                  <div class="ant-card-meta-description--bottom-right ml-auto d-flex">
                    <div class="icon icon-star">
                      <a-icon type="star" theme="filled"/>5.8
                    </div>
                    <div class="icon icon-comment">
                      <a-icon type="message"/>10 Komentar
                    </div>
                  </div>
                </div>
              </div>
            </a-card-meta>
          </a-card>
        </div>
      </slick>

      <div class="action-slick">
        <a-button class="btn-left" @click="prev" size="large" shape="circle" icon="left"/>
        <a-button class="btn-right" @click="next" size="large" shape="circle" icon="right"/>
      </div>
    </div>
  </div>
</template>
<script>
import vaforite1 from "~/static/products/V1.png";
import vaforite2 from "~/static/products/V2.png";
import vaforite3 from "~/static/products/V3.png";
import vaforite4 from "~/static/products/V4.png";
import vaforite5 from "~/static/products/V5.png";
export default {
  data() {
    return {
      vaforite1,
      vaforite2,
      vaforite3,
      vaforite4,
      vaforite5,
      slickRecomended: {
        slidesToShow: 4,
        infinite: false,
        arrows: false,
        draggable: true,
        prevArrow: ".prev",
        nextArrow: ".next"
      }
    };
  },

  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    }
  }
};
</script>
