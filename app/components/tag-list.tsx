
interface Props {
    list: string[],
}

export default function TagList({list}:Props) {

    const queryColSpan = (text: string) => {
        if (text.length > 22)
            return 'xs:row-span-3 sm:col-span-3'
        if (text.length > 14)
            return 'xs:row-span-2 sm:col-span-2'

        return ''
    }

    return <div className="tag-list">
        {list.map((listItem, i) =>
            <div key={i} className={`tag ${queryColSpan(listItem)}`}>
                {listItem}
            </div>)}
    </div>
}