<template>
  <div data="data-content">
    <a-row>
      <a-col :span="24">
        <HeroSearch />
      </a-col>

      <a-col :span="24">
        <UmrahRecommended />
      </a-col>

      <a-col :span="24">
        <UmrahFavorite />
      </a-col>

      <a-col :span="24">
        <Banner />
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
import UmrahFavorite from "@/components/contents/catalog/umrah/favorite";
import UmrahRecommended from "@/components/contents/catalog/umrah/recommended";
import Banner from "./Banner";
import Categories from "./Categories";
import Haloummi from "./Haloummi";
export default {
  components: {
    HeroSearch,
    UmrahFavorite,
    UmrahRecommended,
    Banner,
    Categories,
    Haloummi
  }
};
</script>
