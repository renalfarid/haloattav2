<template>
  <div class="container">
    <div class="header-title">
      <a-row :gutter="16">
        <a-col :span="16">
          <h2 class="title">Umrah Favorit</h2>
          <h6
            class="subtitle"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione</h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col :span="16">
        <a-card class="card-product-overlay">
          <div slot="cover">
            <div class="box-content" :style="{ backgroundImage: `url(${vaforite5})` }">
              <div :style="{ width: '100%', zIndex: '2' }">
                <div class="box-overlay">
                  <div class="txt">Bisa share profit loh!</div>
                </div>

                <div class="box-overlay-text">
                  <div
                    class="txt"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam amet pariatur asperiores necessitatibus error architecto et</div>
                </div>

                <div class="box-bottom">
                  <a-button size="large">Explore Paket</a-button>
                </div>
              </div>
              <div class="gradient-bottom"></div>
            </div>
          </div>
        </a-card>
      </a-col>

      <a-col :span="8">
        <a-card class="ant-card-package">
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
                <div class="ant-card-meta-title--top-right ml-auto"><a-tag>Terbooking <strong>30</strong> seat</a-tag></div>
              </div>
              <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
            </div>

            <div slot="description">
              <div
                class="ant-card-meta-description--bottom d-flex align-items-center"
              >
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
      </a-col>

      <a-col :span="8">
        <a-card class="ant-card-package">
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
                <div class="ant-card-meta-title--top-right ml-auto"><a-tag>Terbooking <strong>30</strong> seat</a-tag></div>
              </div>
              <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
            </div>

            <div slot="description">
              <div
                class="ant-card-meta-description--bottom d-flex align-items-center"
              >
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
      </a-col>

      <a-col :span="8">
        <a-card class="ant-card-package">
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
                <div class="ant-card-meta-title--top-right ml-auto"><a-tag>Terbooking <strong>30</strong> seat</a-tag></div>
              </div>
              <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
            </div>

            <div slot="description">
              <div
                class="ant-card-meta-description--bottom d-flex align-items-center"
              >
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
      </a-col>

      <a-col :span="8">
        <a-card class="ant-card-package">
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
                <div class="ant-card-meta-title--top-right ml-auto"><a-tag>Terbooking <strong>30</strong> seat</a-tag></div>
              </div>
              <div class="ant-card-meta-title--package">Umrah Exclusive 2020 Keberangkatan Jakarta</div>
            </div>

            <div slot="description">
              <div
                class="ant-card-meta-description--bottom d-flex align-items-center"
              >
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
      </a-col>
    </a-row>
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
      vaforite5
    };
  }
};
</script>