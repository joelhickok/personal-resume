interface DateInterval {
    start: Date,
    end: Date | null,
}

interface Experience {
    readonly title: string,
    readonly employer: string,
    readonly date: DateInterval,
    readonly description?: string,
    readonly duties: string[],
}

interface PopoverContentProps {
    position: PopoverPosition,
    childRect: Rect,
    popoverRect: Rect,
}