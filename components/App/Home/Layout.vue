<template>
  <div data="data-content">
    <a-row>
      <a-col :span="24">
        <HeroSearch />
      </a-col>

      <a-col :span="24">
        <Cities />
      </a-col>

      <a-col :span="24">
        <BannerStar />
      </a-col>

      <a-col :span="24">
        <UmrahCitiesItemTop />
      </a-col>

      <a-col :span="24">
        <UmrahRecommended />
      </a-col>

      <a-col :span="24">
        <UmrahLatest />
      </a-col>

      <a-col :span="24">
        <Categories />
      </a-col>

      <a-col :span="24">
        <Haloummi />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HeroSearch from "./HeroSearch";
import Cities from "./Cities";
import BannerStar from "./BannerStar";
import UmrahCitiesItemTop from "@/components/App/Cities/ItemTop";
import UmrahRecommended from "@/components/contents/catalog/umrah/recommended";
import UmrahLatest from "@/components/contents/catalog/umrah/latest";
import Categories from "./Categories";
import Haloummi from "./Haloummi";
export default {
  components: {
    HeroSearch,
    Cities,
    BannerStar,
    UmrahCitiesItemTop,
    UmrahLatest,
    UmrahRecommended,
    Categories,
    Haloummi
  }
};
</script>
