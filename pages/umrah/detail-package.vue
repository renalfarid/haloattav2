<template>
  <div class="ant-layout--package-details">
    <div class="ant-layout--results-space-small"></div>
    <a-affix :offsetTop="60" @change="change">
      <div class="ant-layout--package-tabs">
        <div class="container">
          <div class="ant-tabs--item">
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab=1"
              v-bind:class="[ activetab === 1 ? 'active' : '' ]"
            >Tiket</a>
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab=2"
              v-bind:class="[ activetab === 2 ? 'active' : '' ]"
            >LA Akomodasi</a>
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab=3"
              v-bind:class="[ activetab === 3 ? 'active' : '' ]"
            >Kelengkapan</a>
            <a
              class="ant-tabs--item-link"
              v-on:click="activetab=4"
              v-bind:class="[ activetab === 4 ? 'active' : '' ]"
            >Itinerary</a>
          </div>
        </div>
      </div>
    </a-affix>

    <div class="container">
      <div class="ant-tabs--content">
        <div v-if="activetab === 1" class="ant-tabs--content-body">
          <informationTicket />
        </div>
        <div v-if="activetab === 2" class="ant-tabs--content-body">
          <informationAccommodation />
        </div>
        <div v-if="activetab === 3" class="ant-tabs--content-body">
          <informationEquipment />
        </div>
        <div v-if="activetab === 4" class="ant-tabs--content-body">
          <informationItinerary />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import informationTicket from "~/components/contents/details/umrah/information-ticket.vue";
import informationAccommodation from "~/components/contents/details/umrah/information-accommodation.vue";
import informationEquipment from "~/components/contents/details/umrah/information-equipment.vue";
import informationItinerary from "~/components/contents/details/umrah/information-itinerary.vue";
export default {
  name: "detailPackage",
  head() {
    return {
      title:
        "Umrah Exclusive 2019 - Booking Paket Umrah & Komponen Umrah Lainnya"
    };
  },
  data() {
    return {
      activetab: 1
    };
  },
  components: {
    informationTicket,
    informationAccommodation,
    informationEquipment,
    informationItinerary
  },
  methods: {
    change(affixed) {
      console.log(affixed);
    }
  }
};
</script>
