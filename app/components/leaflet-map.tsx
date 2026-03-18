'use client'

/*
    Relevant Docs:
    https://github.com/Norkart/Leaflet-MiniMap
    https://github.com/jieter/Leaflet.layerscontrol-minimap
 */

import {useEffect, useRef} from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// @ts-expect-error no types available for leaflet-minimap
import MiniMap from 'leaflet-minimap'
import 'leaflet.layerscontrol-minimap'
import 'leaflet.layerscontrol-minimap/control.layers.minimap.css'
import {Icon as ExtraIcon, PointCircle as Pin} from 'leaflet-extra-markers'
import 'leaflet.defaultextent'
import 'leaflet-easybutton'
import 'leaflet-easybutton/src/easy-button.css'
import 'leaflet.defaultextent/dist/leaflet.defaultextent.css'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import mapLayers from '@lib/map-layers'

export default function LeafletMap() {
    const hasMounted = useRef(false)

    useEffect(() => {
        let map: L.Map | undefined

        if (!hasMounted.current || !map) {
            hasMounted.current = true

            const zoom = 11
            const marker = {lat: 37.44, lng: 251.43}
            const center = {lat: 37.42, lng: 251.43}

            // set icon URLs so they work in Node.js environment
            L.Icon.Default.mergeOptions({
                iconUrl,
                shadowUrl,
            })

            map = new L.Map('map', {
                layers: [mapLayers.google.roads],
                attributionControl: false,
            }).setView(center, zoom)
            L.control.scale().addTo(map)

            // @ts-expect-error: deal with classes that have been extended elsewhere
            L.control.defaultExtent().addTo(map)

            const easyButtonIcon = '<img src="/octicon--focus-center-16.svg" width="26" alt="center" ' +
                'class="absolute left-0.5 top-0.5" title="Center Dolores area on map"/>'

            L.easyButton(easyButtonIcon,
                function (btn, map) {
                    map.setView(marker, map.getZoom())
                }).addTo(map)

            new MiniMap(mapLayers.esri.natGeoWorld, {
                position: 'bottomright', // bottomleft | bottomright
                width: 150,
                height: 150,
                zoomLevelOffset: -6,
                toggleDisplay: true,
                // zoomLevelFixed: 10,
                // centerFixed: true,
                // toggleDisplay: true,
                aimingRectOptions: {
                    stroke: true,
                    color: 'red',
                    weight: 2,
                    opacity: 1,
                    fill: true,
                    fillColor: 'white',
                    fillOpacity: 0.3,
                }
            }).addTo(map)

            const baseLayers = {
                // 'MapTiler Streets': mapLayers.maptiler.streets,
                'World Street Map': mapLayers.esri.worldStreetMap,
                'Google Satellite': mapLayers.google.hybrid,
                'Google Roads': mapLayers.google.roads,
            }

            const overlays = {}

            // I hate this approach that Leaflet used in the early days
            // @ts-expect-error: deal with classes that have been extended elsewhere
            L.control.layers.minimap(baseLayers, overlays, {
                collapsed: true,
                hideSingleBase: true,
                sortLayers: true,
            }).addTo(map)

            new L.Marker(marker, {
                icon: new ExtraIcon({
                    // accentColor: 'skyblue',
                    color: 'red',
                    // content: '',
                    contentHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M22 9L12 1L2 9v2h2v10h5v-4a3 3 0 1 1 6 0v4h5V11h2z"/></svg>',
                    contentColor: 'white',
                    scale: 1,
                    svg: Pin,
                }),
            })
                .bindTooltip('Beautiful Southwest Colorado!', {
                    offset: [0, 20],
                    permanent: true,
                    direction: 'bottom',  //  'right' | 'left' | 'top' | 'bottom' | 'center' | 'auto'
                })
                .addTo(map)

            // debug
            // map.on('moveend zoomend', () => (console.log(map.getCenter())))
        }

        return () => {
            if (map) {
                map.remove()
            }
        }
    },)

    return <div className="w-full h-full">
        <div id="map"/>
    </div>
}