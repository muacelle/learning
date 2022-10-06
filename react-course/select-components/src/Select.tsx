import { useState } from 'react'
import styles from './select.module.css'

type SelectOptions = {
    label: string
    value: any
}

type SelectProps = {
    value?: SelectOptions
    options: SelectOptions[]
    onChange: (value: SelectOptions | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {

    const [isOpen, setIsOpen] = useState(false)

    function clearOptions() {
        onChange(undefined)
    }

    function selectOption(option: SelectOptions) {
        onChange(option)
    }

    return (
        <div 
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(prev => !prev)}
        tabIndex={0}
        className={styles.container}
        >
            <span className={styles.value}>{value?.label}</span>
            <button 
            onClick={e => {
                e.stopPropagation()
                clearOptions()
            }} 
            className={styles['clear-btn']}>
                &times;
            </button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
                {options.map(option => (
                    <li onClick={e => {
                        e.stopPropagation
                        selectOption(option)
                        setIsOpen(false)
                    }} key={option.label} className={styles.option}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}