import {TileLayer, LayerGroup} from 'leaflet'

const baseUrls = {
    maptiler: 'https://api.maptiler.com/maps',
    esri: 'https://services.arcgisonline.com/ArcGIS/rest/services',
    google: 'https://mt.google.com/vt',
}

const MAPTILER_KEY = 'NPdQYeFxBzKIsr1fAsFT'

const attributions = {
    osm: '&copy; OSM contributors',
    esri: 'Powered by Esri',
    google: 'Map data © 2026 Google',
    maptiler: '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
}

const satellite = new TileLayer(`https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`, {
    attribution: attributions.esri,
})

const detectRetina = true

const layers = {

    // https://cloud.maptiler.com/maps/
    maptiler: {
        streets: new TileLayer(`${baseUrls.maptiler}/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
            attribution: attributions.maptiler,
            crossOrigin: true,
            detectRetina,
        }),
        outdoor: new TileLayer(`${baseUrls.maptiler}/outdoor-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
            attribution: attributions.maptiler,
            crossOrigin: true,
            detectRetina,
        }),
        base: new TileLayer(`${baseUrls.maptiler}/base-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
            attribution: attributions.maptiler,
            crossOrigin: true,
            detectRetina,
        }),
        hybrid: new TileLayer(`${baseUrls.maptiler}/hybrid-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
            attribution: attributions.maptiler,
            crossOrigin: true,
            detectRetina,
        }),
        topo: new TileLayer(`${baseUrls.maptiler}/topo-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`, {
            attribution: '',
            crossOrigin: true,
            detectRetina,
        }),
    },

    osm: {
        osmMapnik: new TileLayer(`https://{s}.tile.osm.org/{z}/{x}/{y}.png`, {
            attribution: attributions.osm,
        }),
        osmHumanitarian:
            new TileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: attributions.osm,
            }),
        openTopoMap:
            new TileLayer(`https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png`, {
                attribution: 'Kartendaten: &copy; OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: &copy; OpenTopoMap (CC-BY-SA)',
            }),
        openStreetMap:
            new TileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
                attribution: attributions.osm,
            }),
    },

    // https://services.arcgisonline.com/arcgis/rest/services
    esri: {
        natGeoWorld: new TileLayer(`${baseUrls.esri}/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}`, {
            attribution: attributions.esri,
        }),
        worldStreetMap:
            new TileLayer(`${baseUrls.esri}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`, {
                attribution: attributions.esri,
            }),
        worldImagery: new LayerGroup([
            satellite,
            new TileLayer(`${baseUrls.esri}/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}`, {
                attribution: attributions.esri,
            })]),
    },
    google: {
        terrain: new TileLayer(`${baseUrls.google}/lyrs=r&x={x}&y={y}&z={z}`, {
            attribution: attributions.google
        }),
        hybrid: new TileLayer(`${baseUrls.google}/lyrs=y&x={x}&y={y}&z={z}`, {
            attribution: attributions.google
        }),
        roads: new TileLayer(`${baseUrls.google}/lyrs=m&x={x}&y={y}&z={z}`, {
            attribution: attributions.google
        }),
    },
}

export default layers