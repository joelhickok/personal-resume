import {format} from 'date-fns/format'
import {intervalToDuration} from 'date-fns/intervalToDuration'
import {formatDuration} from 'date-fns/formatDuration'

export default function ExperienceBlock({title, employer, date, duties}: Experience) {

    const formatExperienceInterval = (dates: DateInterval) => {
        const {start, end} = dates
        const fStart = format(start, 'LLL yyyy')
        const fEnd = end ? format(end, 'LLL yyyy') : 'Present'
        return `${fStart} - ${fEnd}`
    }

    const formatExpDuration = (dates: DateInterval) => {
        const end = dates.end || new Date()
        const duration = intervalToDuration({
            start: dates.start,
            end,
        })
        return formatDuration(duration, {
            delimiter: ' and ',
            format: ['years', 'months'],
            zero: false,
        })
    }

    const determineBreak = (title:string) => {
        switch (title) {
            case 'GIS Specialist I':
                return ' break-before-page'
            // case 'Older Experience':
            //     return ' break-before-page'
            default:
                return ''
        }
    }

    return <div className={'mt-1 mb-2 pb-3 separator-line' + determineBreak(title)}>
        <div className="section-subtitle">
            <div className="font-bold">{title}</div>
            <div className="italic lg:not-italic">{employer}</div>
        </div>
        <div className="flex justify-between secondary-color">
            <div>{formatExperienceInterval(date)}</div>
            <div>{formatExpDuration(date)}</div>
        </div>
        <ul className="list-disc pl-6 mt-3 print:text-sm">
            {duties.map((duty, i) =>
                <li key={i} className="">{duty}</li>
            )}
        </ul>
    </div>
}