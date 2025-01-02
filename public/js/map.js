
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // Use the defined coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // Create a popup
      .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`) // Set the popup content
      .setMaxWidth("300px") // Set the popup max width
  )
  .addTo(map); // Add marker to the map object
