interface Props {
    list: string[],
}

export default function TagList({list}: Props) {

    const queryColSpan = (text: string) => {
        if (text.length > 18)
            return 'xs:row-span-2 sm:row-span-3'
        if (text.length > 14)
            return 'xs:row-span-2 sm:col-span-2'

        return 'row-span-2'
    }

    return <div className="tag-list">
        {list.map((listItem, i) =>
            <div key={i} className={`tag ${queryColSpan(listItem)}`}>
                {listItem}
            </div>)}
    </div>
}