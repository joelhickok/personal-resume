'use client'

import {Icon} from '@iconify/react'
import dynamic from 'next/dynamic'
import ModalContainer from '@components/modal-container'

// leaflet creates issues with the window object if not guaranteed for client-side
const LeafletMap = dynamic(
    () => import('./leaflet-map'),
    {ssr: false}
)

export default function Header() {
    return (<div>

        <div className="header-intro">
            <div>

                <div className="header-intro-title1">Joel Hickok</div>

                <div className="header-intro-title2">
                    Geospatial Professional <br className="visible sm:hidden"/>
                    &amp; Web Developer
                </div>

            </div>

            <Icon icon="tabler:user-hexagon" className="mb-1 text-6xl "></Icon>

        </div>

        <div className="contact-block bg-slate-200 p-2">

            <div className="contact-row">
                <div>
                    <a href="tel:4352101544">
                        (435) 210-1544
                    </a>
                </div>
                <div>
                    <ModalContainer triggerText="Dolores, CO">
                        <span className="mb-3 inline">
                            Located adjacent to Mesa Verde National Park, Dolores is nestled in Southwest
                            Colorado near the heart of the illustrious San Juan Mountains.
                        </span>
                        <LeafletMap/>
                    </ModalContainer>
                </div>
            </div>

            <div className="contact-row">
                <div>
                    <a href="mailto: joelhickok@gmail.com&subject=Reviewing Your Resume"
                       className="underline text-green-800">
                        joelhickok@gmail.com
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/joel-hickok-developer" className="flex gap-1 items-center">
                        <Icon icon="tabler:brand-linkedin" className="text-2xl"/>
                        LinkedIn
                    </a>
                </div>
            </div>

        </div>

    </div>)
}
