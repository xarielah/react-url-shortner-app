import './inputdisplay.css'
import React, { useState, useRef, useMemo, useEffect } from 'react'
import { fetchData } from '../../service/fetch'
import { addNewURL } from '../../utils/crudFunctions'
import { Modal } from '../modal'
import { AxiosError } from 'axios'

type Props = {
    refresh: () => void;
}

type InputValidation = [boolean | null, string]

const InputURL: React.FC<Props> = ({ refresh }) => {
    const [link, setLink] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [err, setErr] = useState<InputValidation>([false, ''])
    const [valid, setValid] = useState<InputValidation | []>([null, ''])
    const inputField = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (valid[0] !== null) {
            isValid()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [link])
    const urlRegex = useMemo(() => /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, [])
    const regex = useMemo(() => new RegExp(urlRegex), [urlRegex])

    const onsubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (link === '') {
            return setValid([false, 'Please add link...'])
        }
        if (valid[0]) {
            setIsSubmitting(true)
            const sanitizedValue = link.trim()

            await fetchData(sanitizedValue).finally(() => setIsSubmitting(false))
                .then(({ original_link: original, full_short_link: shortened }) => {
                    addNewURL({ original, shortened })
                    if (!success) setSuccess(true)
                    setValid([null, ''])
                    setLink('')
                    inputField.current!.value = ''
                    refresh()
                })
                .catch(e => setErr([true, e.response.data.error]))
        }
    }

    function isValid() {
        if (link === '') setValid([false, 'Please add link...'])
        else if (!link.match(regex)) setValid([false, 'Bad URL format'])
        else setValid([true, ''])
    }

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        isValid()
        setLink(e.target.value)
    }

    const unsuccess = (): void => setSuccess(false)
    const unerr = (): void => setErr([false, ''])

    return (
        <form onSubmit={onsubmit} id="url-input">
            {success && <Modal type="success" setter={unsuccess} />}
            {err[0] && <Modal type="error" setter={unerr} msg={err[1]} />}
            <div className="input-wrapper">
                <div className='desktop-width-bundle'>
                    <input ref={inputField} onChange={(e) => onchange(e)} placeholder='Shorten a link here...' className={`${valid[0] === false && 'error-input-field'} input-main`} />
                    {valid[0] === false && <p className="error-input-msg">{valid[1]}</p>}
                </div>
                <button disabled={isSubmitting} className='btn input-btn' type="submit">{isSubmitting ? 'Please wait...' : 'Shorten it!'}</button>
            </div>
        </form >
    )
}

export default InputURL