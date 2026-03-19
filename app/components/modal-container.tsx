import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import {useState} from 'react'
import type {ReactElement} from 'react'
import {Icon} from '@iconify/react'
import Image from 'next/image'

interface Props {
    children: ReactElement[];
    triggerText: string;
}

export default function ModalContainer({children, triggerText}: Props) {
    const images = [
        {src: '/sw-colorado.jpg', label: 'Looking Over Landscape'},
        {src: '/reservoir-la-platas.webp', label: 'La Plata Mountains and water body'},
        {src: '/ruins.jpg', label: 'Ruins at Canyons of the Ancients'},
        {src: '/mcphee-res.png', label: 'McPhee Reservoir'},
        {src: '/d-river-fish.jpg', label: 'Fishing the Dolores River'},
    ]
    const [currentImage, setCurrentImage] = useState<typeof images[0]>(images[0])
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    const [caption, leafletMap] = children
    const [container] = useState<HTMLDivElement | null>(null)

    const closePopover = (event: CustomEvent) => {
        console.log(`Type: ${event.type}`)
        setIsPopoverOpen(false)
    }

    const selectImage = (imgSrc: string) => {
        const found = images.findIndex(img => img.src === imgSrc)
        setCurrentImage(images[found])
    }

    return (
        <div className="rel">
            <Dialog.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <Dialog.Trigger asChild>
                    <a className="cursor-pointer">{triggerText}</a>
                </Dialog.Trigger>
                <Dialog.Portal container={container}>
                    <Dialog.Overlay className="dialog-overlay"/>

                    <Dialog.Content
                        className="dialog-content flex flex-col"
                        onInteractOutside={closePopover}
                    >

                        <div className="flex justify-between">
                            <Dialog.Title className="dialog-title">Dolores, CO</Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="flex! gap-1! items-center! cursor-pointer!"
                                        aria-label="Close"
                                        onClick={() => setIsPopoverOpen(false)}>
                                    <Icon icon="carbon:close-filled" className="text-2xl "/> Close
                                </button>
                            </Dialog.Close>
                        </div>

                        <Image
                            width="1000"
                            height="100"
                            src={currentImage.src}
                            alt={currentImage.label}
                            title={currentImage.label}
                            className="rounded-xl mb-2"/>

                        <RadioGroup.Root
                            className="radio-group-root"
                            orientation="horizontal"
                            value={currentImage.src}
                            aria-label="Switch image"
                            onValueChange={selectImage}
                        >
                            {images.map((image, i) => {
                                return (
                                    <RadioGroup.Item key={i}
                                                     className={`radio-group-item`}
                                                     value={image.src}
                                                     id={image.label}>
                                        <RadioGroup.Indicator className="radio-group-indicator"/>
                                    </RadioGroup.Item>
                                )
                            })}
                        </RadioGroup.Root>

                        <Dialog.Description className="dialog-description">
                            {caption}
                        </Dialog.Description>

                        <div className="grow h-full">
                            {leafletMap}
                        </div>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* @ts-expect-error: ref type doesn't work */}
            <div ref={container} className="fixed p-5 top-0 left-0"/>
        </div>
    )
}