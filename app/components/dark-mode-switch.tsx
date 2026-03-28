import * as Switch from '@radix-ui/react-switch'
import {useEffect, useState} from 'react'

interface DarkModeSwitchProps {
    updateDarkMode: (mode: boolean) => void,
}

export default function DarkModeSwitch({updateDarkMode}: DarkModeSwitchProps) {
    const [isDarkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        updateDarkMode(isDarkMode)
    }, [isDarkMode, updateDarkMode])

    return <>
        <Switch.Root className="switch-root cursor-pointer"
                     id="dark-mode"
                     checked={isDarkMode}
                     data-state={`${isDarkMode ? 'checked' : 'unchecked'}`}
                     onCheckedChange={(e) => setDarkMode(e)}
        >
            <Switch.Thumb className="switch-toggle"/>
        </Switch.Root>
        <label className="switch-label cursor-pointer" htmlFor="dark-mode">Dark</label>
    </>
}