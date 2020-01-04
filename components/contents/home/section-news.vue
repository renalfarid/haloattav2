<template>
  <div class="container">
    <div class="header-title">
      <a-divider orientation="left" class="ant-divider-title-left">Halo Ummi</a-divider>
      <a-row :gutter="16">
        <a-col :span="16">
          <h6 class="subtitle">
            Adalah agregator berita islami pertama yang memberikan informasi seputar ibadah Umroh Haji dan kajian Islam lainnya
          </h6>
        </a-col>
      </a-row>
    </div>

    <a-row :gutter="16">
      <a-col :span="24">
        <client-only>
          <a-carousel>
            <div>
              <a :href="`https://www.haloummi.com/headlines/${mainhead.slug}`" target="_blank">
                <a-card class="card-news--large-overlay">
                  <div slot="cover">
                    <div class="haloummi">
                      <img src="/haloummi.png" />
                    </div>
                    <div class="box-content" v-lazy:background-image="imgUrl">
                      <div :style="{ width: '100%', zIndex: '2' }">
                        <div class="box-overlay">
                          <div class="txt">{{ mainhead.title }}</div>
                          <div class="item">
                            <a-tag color="#f50" class="ant-tag--kajian ant-tag--large">{{ mainhead.kategori }}</a-tag>
                            <span class="time">
                              <a-icon type="clock-circle" />{{ mainhead.date | moment }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="gradient-bottom"></div>
                    </div>
                  </div>
                </a-card>
              </a>
              
            </div>

            
          </a-carousel>
        </client-only>
      </a-col>
      <div v-for="sub in this.subHeadlines" :key="sub.id">
      <a-col :span="6">
        <a :href="`https://www.haloummi.com/headlines/${sub.slug}`" target="_blank">
       
            <a-card class="card-news--small-overlay">
            <div slot="cover">
              <div class="haloummi">
                <img src="/haloummi.png" />
              </div>
              <div class="box-content" v-lazy:background-image="'https://api.haloummi.com/uploads/'+sub.image_url">
                <div :style="{ width: '100%', zIndex: '2' }">
                  <div class="box-overlay">
                    <div class="txt">{{ sub.title }}</div>
                    <div class="item">
                      <a-tag color="#f50" class="ant-tag--umrah ant-tag--small">{{ sub.kategori }}</a-tag>
                      <span class="time">
                        <a-icon type="clock-circle" />{{ sub.date | moment }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gradient-bottom"></div>
              </div>
            </div>
          </a-card>
        </a>
       
      </a-col>
       </div>

      
    </a-row>

    <div class="all-package mt-24 mb-16">
      
      <a href="https://www.haloummi.com" target="_blank">
        Tampilkan semua
        <a-icon class="fs-16 ml-8" type="right" />
      </a>
     
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
moment.locale('id');

export default {
  data() {
    return {
      headlines: [],
      mainhead: [],
      imgUrl: '',
      subHeadlines: [],
      moment,
    };
  },
  mounted(){
    this.loadHeadlines();
  },
  methods: {
       loadHeadlines(){



      axios.get('https://api.haloummi.com/berita/haloatta/headlines').then(result => {
         this.headlines = result.data.values
         this.mainhead = result.data.values[0]
         this.imgUrl = "https://api.haloummi.com/uploads/"+this.mainhead['image_url']

         this.subHeadlines = this.headlines.filter(function(headline, index){
          return index > 0;
        })
        //console.log(this.subHeadlines)
        console.log(this.subHeadlines)


      });

    },
  },
  filters: {
    moment(val) {
      return moment(val, "YYYY-MM-DD").fromNow();
    }
  }
};
</script>