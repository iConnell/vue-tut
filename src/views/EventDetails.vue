<template>
  <div v-if="event">
    <h2>{{ event.title }}</h2>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import apiClient from "../services/EventService";

export default {
  name: "EventDetails",
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },

  created() {
    apiClient
      .getEvent(this.id)
      .then((res) => {
        this.event = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
