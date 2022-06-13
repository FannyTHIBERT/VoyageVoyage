<template>
<div id="map-container">
      <div id="map"></div>
</div>

</template>

<script>
export default {
name: 'GoogleMap',

  mounted()
  {
// Initialize and add the map
console.log("map: ", google.maps)
    this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:61.180059, lng: -149.822075},
            scrollwheel: false,
            zoom: 4
            })

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


}

</script>

<style scoped>
 #map {
    height:500px;
    width: 700px;
   }
</style>