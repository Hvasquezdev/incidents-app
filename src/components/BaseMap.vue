<template>
  <l-map style="height: 350px" :zoom="zoom" :center="[latitude, longitude]">
    <l-control-layers position="topright" />
    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"
    />
    <l-marker :lat-lng="[latitude, longitude]" :icon="icon" />
  </l-map>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LControlLayers } from 'vue2-leaflet';

export default {
  name: 'BaseMap',

  props: {
    zoom: {
      type: Number,
      default: 15
    },
    latitude: {
      type: Number,
      default: 0
    },
    longitude: {
      type: Number,
      default: 0
    },
    iconUrl: {
      type: String,
      default: '/images/marker.png'
    },
    iconSize: {
      type: Array,
      default: () => [40, 52]
    },
    iconAnchor: {
      type: Array,
      default: () => [16, 37]
    }
  },

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers
  },

  data() {
    return {
      icon: L.icon({
        iconUrl: this.iconUrl,
        iconSize: this.iconSize,
        iconAnchor: this.iconAnchor
      }),
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        },
        {
          name: 'OpenTopoMap',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }
      ]
    };
  }
};
</script>

<style></style>
