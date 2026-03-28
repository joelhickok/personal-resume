import he from 'he'

interface Props {
    list: string[],
}

export default function TagList({list}: Props) {

    const queryColSpan = (text: string) => {
        if (text.length > 34)
            // return 'xs:row-span-2 sm:col-span-3'
            return 'basis-sm'
        if (text.length > 23)
            return 'basis-xs'
        return 'basis-auto flex-1'
    }

    return <div className="tag-list">
        {list.map((listItem, i) =>
            <div key={i} className={`tag ${queryColSpan(listItem)}`}>
                {/*{listItem.length}&nbsp;*/}
                {/*{queryColSpan(listItem)}<br/>*/}
                {he.decode(listItem)}
            </div>)}
    </div>
}