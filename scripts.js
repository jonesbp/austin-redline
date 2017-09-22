function buildImageViewer(viewerId, tilesPath, zoom, minZoom, maxZoom) {
  var map = L.map(viewerId).setView([0, 0], zoom);

  L.tileLayer(tilesPath + '/{z}/{x}/{y}.png', {
    minZoom: minZoom,
    maxZoom: maxZoom,
    tms: true,
    noWrap: true
  }).addTo(map);
}
