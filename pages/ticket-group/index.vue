<template>
  <div>
    <div class="content-head">
      <div class="content-head--cover" :style="{ backgroundImage: `url(${coverUrl})` }">
        <div class="content-head--body">
          <div class="gradient-top"></div>
          <a-row :gutter="90" class="w-100" type="flex" justify="space-around" align="middle">
            <a-col :span="10">
              <h2 class="title">Ragam Pilihan Tiket Group</h2>
              <p class="cr-white fs-16 fw-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </a-col>
            <a-col :span="14">
              <searchTicket />
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coverUrl from "~/static/cover/ticket_group.png";
import searchTicket from "~/components/contents/lib/search/search-ticket.vue";
export default {
  name: "ticketGroup",
  head() {
    return {
      title: "Pesan Tiket Group - Best Travel Agen | Haloatta"
    };
  },
  data() {
    return {
      coverUrl
    };
  },
  components: {
    searchTicket
  }
};
</script>
