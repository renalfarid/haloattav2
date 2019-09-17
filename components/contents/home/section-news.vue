<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Halo Ummi</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio hic in sint reiciendis libero necessitatibus quos cumque ipsum ratione
          </h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col :span="24">
        <client-only>
          <a-carousel>
            <div>
              <nuxt-link to="/blog/detail">
                <a-card class="card-news--large-overlay">
                  <div slot="cover">
                    <div class="haloummi">
                      <img src="/haloummi.png" />
                    </div>
                    <div class="box-content" v-lazy:background-image="blog1">
                      <div :style="{ width: '100%', zIndex: '2' }">
                        <div class="box-overlay">
                          <div class="txt">Haram Hukumnya merubah aturan yang disepakati</div>
                          <div class="item">
                            <a-tag color="#f50" class="ant-tag--kajian ant-tag--large">Kajian</a-tag>
                            <span class="time">
                              <a-icon type="clock-circle" />5 jam lalu
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="gradient-bottom"></div>
                    </div>
                  </div>
                </a-card>
              </nuxt-link>
            </div>

            <div>
              <nuxt-link to="/blog/detail">
                <a-card class="card-news--large-overlay">
                  <div slot="cover">
                    <div class="haloummi">
                      <img src="/haloummi.png" />
                    </div>
                    <div class="box-content" v-lazy:background-image="blog4">
                      <div :style="{ width: '100%', zIndex: '2' }">
                        <div class="box-overlay">
                          <div class="txt">Agar tidak over bagasi saat traveling</div>
                          <div class="item">
                            <a-tag color="#f50" class="ant-tag--travel ant-tag--large">travel</a-tag>
                            <span class="time">
                              <a-icon type="clock-circle" />5 jam lalu
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="gradient-bottom"></div>
                    </div>
                  </div>
                </a-card>
              </nuxt-link>
            </div>

            <div>
              <nuxt-link to="/blog/detail">
                <a-card class="card-news--large-overlay">
                  <div slot="cover">
                    <div class="haloummi">
                      <img src="/haloummi.png" />
                    </div>
                    <div class="box-content" v-lazy:background-image="blog3">
                      <div :style="{ width: '100%', zIndex: '2' }">
                        <div class="box-overlay">
                          <div class="txt">Agar tidak over bagasi saat traveling</div>
                          <div class="item">
                            <a-tag color="#f50" class="ant-tag--travel ant-tag--large">travel</a-tag>
                            <span class="time">
                              <a-icon type="clock-circle" />5 jam lalu
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="gradient-bottom"></div>
                    </div>
                  </div>
                </a-card>
              </nuxt-link>
            </div>
          </a-carousel>
        </client-only>
      </a-col>

      <a-col :span="6">
        <nuxt-link to="/blog/detail">
          <a-card class="card-news--small-overlay">
            <div slot="cover">
              <div class="haloummi">
                <img src="/haloummi.png" />
              </div>
              <div class="box-content" v-lazy:background-image="blog2">
                <div :style="{ width: '100%', zIndex: '2' }">
                  <div class="box-overlay">
                    <div class="txt">Sunnah hukumnya mencium Hajar Aswad</div>
                    <div class="item">
                      <a-tag color="#f50" class="ant-tag--umrah ant-tag--small">Umrah</a-tag>
                      <span class="time">
                        <a-icon type="clock-circle" />5 jam lalu
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gradient-bottom"></div>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>

      <a-col :span="6">
        <nuxt-link to="/blog/detail">
          <a-card class="card-news--small-overlay">
            <div slot="cover">
              <div class="haloummi">
                <img src="/haloummi.png" />
              </div>
              <div class="box-content" v-lazy:background-image="blog3">
                <div :style="{ width: '100%', zIndex: '2' }">
                  <div class="box-overlay">
                    <div class="txt">Sunnah hukumnya mencium Hajar Aswad</div>
                    <div class="item">
                      <a-tag color="#f50" class="ant-tag--travel ant-tag--small">Travel</a-tag>
                      <span class="time">
                        <a-icon type="clock-circle" />5 jam lalu
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gradient-bottom"></div>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>

      <a-col :span="6">
        <nuxt-link to="/blog/detail">
          <a-card class="card-news--small-overlay">
            <div slot="cover">
              <div class="haloummi">
                <img src="/haloummi.png" />
              </div>
              <div class="box-content" v-lazy:background-image="blog4">
                <div :style="{ width: '100%', zIndex: '2' }">
                  <div class="box-overlay">
                    <div class="txt">Sunnah hukumnya mencium Hajar Aswad</div>
                    <div class="item">
                      <a-tag color="#f50" class="ant-tag--travel ant-tag--small">Travel</a-tag>
                      <span class="time">
                        <a-icon type="clock-circle" />5 jam lalu
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gradient-bottom"></div>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>

      <a-col :span="6">
        <nuxt-link to="/blog/detail">
          <a-card class="card-news--small-overlay">
            <div slot="cover">
              <div class="haloummi">
                <img src="/haloummi.png" />
              </div>
              <div class="box-content" v-lazy:background-image="blog5">
                <div :style="{ width: '100%', zIndex: '2' }">
                  <div class="box-overlay">
                    <div class="txt">Sunnah hukumnya mencium Hajar Aswad</div>
                    <div class="item">
                      <a-tag color="#f50" class="ant-tag--travel ant-tag--small">Travel</a-tag>
                      <span class="time">
                        <a-icon type="clock-circle" />5 jam lalu
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gradient-bottom"></div>
              </div>
            </div>
          </a-card>
        </nuxt-link>
      </a-col>
    </a-row>

    <div class="all-package mt-24 mb-16">
      <nuxt-link to="/blog" class="fs-18 cr-green d-flex align-items-center">
        Tampilkan semua
        <a-icon class="fs-16 ml-8" type="right" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import blog1 from "~/static/blog/B1.png";
import blog2 from "~/static/blog/B2.png";
import blog3 from "~/static/blog/B3.png";
import blog4 from "~/static/blog/B4.png";
import blog5 from "~/static/blog/B5.png";
export default {
  data() {
    return {
      blog1,
      blog2,
      blog3,
      blog4,
      blog5
    };
  }
};
</script>