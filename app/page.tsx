'use client'
import {useRef,} from 'react'
// components
import Header from '@components/header'
import ExperienceBlock from '@components/experience-block'
import SectionHeader from '@components/section-header'
import TagList from '@components/tag-list'
import DarkModeSwitch from '@components/dark-mode-switch'
// libs
import experiences from '@lib/past-experience'
import introText from '@lib/intro-text'

export default function Home() {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const skills = [
        'ArcGIS Product Suite', 'Leaflet', 'Front-end Dev', 'Full Stack Dev', 'Node.js', 'Quickbase',
    ]

    const languages = ['JavaScript', 'TypeScript', 'Python', 'Jinja', 'C#', '...more']

    const strengths = ['GIS', 'GeoSpatial', 'Web Dev', 'Backend', 'Project Management']

    const updateDarkMode = (isDarkMode: boolean) => {
        if (isDarkMode && containerRef.current) {
            containerRef.current.classList.add('dark')
            containerRef.current.classList.remove('light')
        } else if (containerRef.current) {
            containerRef.current.classList.remove('dark')
            containerRef.current.classList.add('light')
        }
    }

    return (
        <div className={'resume-container light'} ref={containerRef}>

            {/* bug forced dark text class to go here */}
            <main className="resume-body dark:text-mauve-200">

                <div className="flex justify-end items-center -mt-4 sm:mt-0 pb-2">
                    <DarkModeSwitch updateDarkMode={updateDarkMode}/>
                </div>

                <Header/>

                <SectionHeader title="Overview" icon="material-symbols:description-outline"/>

                <div className="text-sm">
                    {introText.map((text, i) => {
                        return (
                            <p key={i} className={`${i > 0 ? 'mt-1' : ''}`}>
                                {text}
                            </p>
                        )
                    })}
                </div>

                <SectionHeader title="Education" icon="mdi:graduation-cap"/>

                <div className="section-body">
                    <div className="section-subtitle">
                        <div>M.S. in Applied Geospatial Sciences</div>
                        <div>Northern Arizona University</div>
                    </div>
                    <div className="flex justify-between secondary-color">
                        <div>Flagstaff, AZ (May 2014)</div>
                        <div>with distinction</div>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="section-subtitle">
                        <div>B.S. Public Service Administration</div>
                        <div>Colorado State University</div>
                    </div>
                    <div className="flex justify-between secondary-color">
                        <div>Colorado Springs, CO</div>
                    </div>
                </div>


                <SectionHeader title="Strengths" icon="icon-park-outline:muscle"/>
                <TagList list={strengths}/>

                <SectionHeader title="Languages" icon="solar:programming-outline"/>
                <TagList list={languages}/>

                <SectionHeader title="Skills" icon="game-icons:skills">
                    <div className="text-xs text-gray-400 font-normal">Partial list</div>
                </SectionHeader>

                <TagList list={skills}/>
                <SectionHeader title="Experience" icon="mdi:tool-time"/>

                {experiences.map((experience, i) =>
                    <ExperienceBlock key={i} {...experience}></ExperienceBlock>
                )}

            </main>
        </div>
    )
}
