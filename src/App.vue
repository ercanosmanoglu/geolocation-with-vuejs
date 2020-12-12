<template>
  <div id="app">
    <div style="width: 300px; margin: auto">
      <h3 style="margin:40px 0">Geolocation with VueJs</h3>
      <section style="text-align: left">
        <h3>Select Type</h3>
        <input
          type="radio"
          v-model="type"
          value="current"
        />getCurrentPosition<br />
        <input type="radio" v-model="type" value="watch" />watchPosition<br />
      </section>
      <br />
      <div v-if="location" style="text-align: left">
        <span style="font-weight: bold">Time : </span
        >{{ new Date(location.timestamp).toLocaleString() }}<br />
        <span style="font-weight: bold">latitude : </span
        >{{ location.coords.latitude.toFixed(4) }}<br />
        <span style="font-weight: bold">longitude : </span
        >{{ location.coords.longitude.toFixed(4) }}<br />
        <span style="font-weight: bold">accuracy : </span
        >{{ location.coords.accuracy.toFixed(2) }} - m<br />
        <span style="font-weight: bold">altitude : </span
        >{{
          location.coords.altitude !== null
            ? location.coords.altitude.toFixed(2)
            : null
        }} - m
        <br />
        <span style="font-weight: bold">heading : </span
        >{{
          location.coords.heading !== null
            ? location.coords.heading.toFixed(2)
            : null
        }}
        <br />
        <span style="font-weight: bold">speed : </span
        >{{
          location.coords.speed !== null
            ? location.coords.speed.toFixed(2)
            : null
        }}
        - m/s<br />
        <span style="font-weight: bold" v-if="watchId">watchId : </span
        >{{ watchId }}
      </div>
      <div v-else>Type is not selected...</div>
      <div class="about-section">
        by <span class="aboutme" @click="toMyPage">Ercan</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      location: "",
      type: "",
      watchId: "",
    };
  },
  mounted() {
    console.log("Mounted here");
  },
  methods: {
    toMyPage() {
      this.$gtag.event("direct_to_myMedium", {
        event_category: "AboutMe",
        event_label: "ToMyMedium",
      });
      const refUrl = "https://medium.com/@ercanosmanoglu";
      window.open(refUrl, "_blank");
    },
  },
  watch: {
    type(val) {
      console.log("Type Changed to:", val);
      if ("geolocation" in navigator) {
        //alert("Location is ON");
        if (this.type === "current") {
          navigator.geolocation.clearWatch(this.watchId);
          this.watchId = null;
          navigator.geolocation.getCurrentPosition(
            (location) => {
              console.log(location);
              this.location = location;
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 5000 }
          );
        } else if (this.type === "watch") {
          this.watchId = navigator.geolocation.watchPosition(
            (location) => {
              console.log(location);
              this.location = location;
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 5000 }
          );
        }
      } else {
        /* geolocation IS NOT available */
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    height: 100vh;
}
.about-section{
  position: absolute;
  top:420px;
  margin-left: 100px;
}
.aboutme {
  cursor: pointer;
  text-decoration: underline;
}
</style>
