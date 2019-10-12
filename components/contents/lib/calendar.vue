<template>
  <section>
    <client-only>
      <a-card>
        <calendar
          class="event-calendar"
          :value="value"
          :disabled-days-of-week="disabled"
          :format="format"
          :clear-button="clear"
          :placeholder="placeholder"
          :pane="2"
          :has-input="false"
          :on-day-click="onDayClick3"
          :change-pane="changePane"
        >
          <div class="event" v-for="(evt, index) in events" :key="index" :slot="evt.date">
            ${{evt.content}}
            <i :class="{low : evt.low}" v-if="evt.low">↓</i>
          </div>
        </calendar>
        <p>{{date3}}</p>
      </a-card>
    </client-only>
  </section>
</template>
<script>
import Calendar from "~/components/template/calendar.vue";
export default {
  components: { Calendar },
  data() {
    return {
      date3: "",
      events: [],
      disabled: [],
      value: this.stringify(new Date()),
      format: "yyyy-MM-dd",
      clear: true,
      placeholder: "placeholder is displayed when value is null or empty"
    };
  },
  methods: {
    isDate(v) {
      if (v instanceof Date) {
        return true;
      }
      return false;
    },
    stringify(v) {
      if (!this.isDate(v)) return null;
      return (
        v.getFullYear() +
        "-" +
        this.filled(v.getMonth() * 1 + 1) +
        "-" +
        this.filled(v.getDate())
      );
    },
    filled(v) {
      return String(v).replace(/^(\d)$/, "0$1");
    },
    onDayClick3(date, str) {
      this.date3 = str;
    },
    changePane(year, month, pane) {
      this.events = [];
      // ajax data or ...
      setTimeout(() => {
        this.events = this.getEventContent(year, month, pane);
      }, 200);
    },
    getDayCount(year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month === 1) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          return 29;
        }
      }
      return dict[month];
    },
    random(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    getEventContent(year, month, pane) {
      const data = [];
      for (let p = 0; p < pane; p++) {
        let date = new Date(year, month + p);
        let monthCounts = this.getDayCount(date.getFullYear(), date.getMonth());
        for (let i = 1; i <= monthCounts; i++) {
          data.push({
            date: this.stringify(new Date(year, month + p, i)),
            content: this.random(100, 1000),
            low: this.random(1)
          });
        }
      }
      return data;
    }
  }
};
</script>