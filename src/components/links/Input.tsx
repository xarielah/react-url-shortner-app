import './inputdisplay.css'
import React, { useState, useRef } from 'react'
import { fetchData } from '../../service/fetch'
import { addNewURL } from '../../utils/crudFunctions'

type Props = {
    refresh: () => void;
}

const InputURL: React.FC<Props> = ({ refresh }) => {
    const [link, setLink] = useState<string>('')
    const [valid, setValid] = useState<boolean>(false)
    const inputField = useRef<HTMLInputElement>(null)

    const onsubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const sanitizedValue = link.trim()
        try {
            const { original_link: original, full_short_link: shortened } = await fetchData(sanitizedValue)
            addNewURL({ original, shortened })
            setLink('')
            setValid(false)
            inputField.current!.value = ''
            refresh()
        } catch (error) {
            console.log(error)
        }
    }

    function isValid(sample = link) {
        const urlRegex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
        const regex = new RegExp(urlRegex)
        if (sample.match(regex)) setValid(true)
        else setValid(false)
    }

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        isValid()
        setLink(e.target.value)
    }

    return (
        <form onSubmit={onsubmit}>
            <div className="input-wrapper">
                <input ref={inputField} onChange={onchange} className='input-main' placeholder='Shorten a link here...' />
                <button disabled={!valid} className='btn input-btn' type="submit">Shorten it!</button>
            </div>
        </form>
    )
}

export default InputURL