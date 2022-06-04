<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
//import EventDetails from "./EventDetails.vue";
import apiClient from "../services/EventService";

export default {
  name: "EventsList",
  components: {
    EventCard,
    //EventDetails,
  },

  data() {
    return {
      events: null,
    };
  },
  created() {
    apiClient
      .getEvents()
      .then((rrr) => {
        this.events = rrr.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
