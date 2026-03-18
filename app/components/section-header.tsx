import {Icon} from '@iconify/react'
import {type ReactNode} from 'react'

interface TagListProps {
    title: string,
    children?: ReactNode,
    icon: string,
    iconSize?: string,
}

export default function SectionHeader({title, children, icon, iconSize = 'text-3xl'}: TagListProps) {

    return <div className="section-head">
        <div className="section-title">{title}</div>
        {children}
        <Icon icon={icon} className={iconSize}></Icon>
    </div>
}