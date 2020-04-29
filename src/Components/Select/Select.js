import React, { useState, useEffect } from 'react';
import './Select.css';

export default function Select({ options, value, onChange, placeholder, allowDeselect }) {
    const [selectedValue, setSelectedValue] = useState(value);
    const [open, setOpen] = useState(false);
    useEffect(() => setSelectedValue(value), [value]);
    useEffect(() => {
        function close() { setOpen(false); }

        if (open)
            document.addEventListener('click', close);

        return () => document.removeEventListener('click', close);
    }, [open]);

    const selectedOption = options.find(option => option.value === selectedValue);
    const displayedText = selectedOption ? selectedOption.text : placeholder;

    function updateValue(val) {
        onChange(val);
        setSelectedValue(val);
        setOpen(false);
    }

    return (
        <div className={'Select' + (open ? ' open' : '')}>
            <div
                className='Select_toggle'
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(!open);
                }}
            >
                {displayedText}
                <div className='Select_arrow' />
            </div>

            <div className='Select_dropdown'>
                {allowDeselect ? (
                    <div
                        key='__NULL_OPTION_KEY__'
                        className='Select_option'
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            updateValue(null);
                        }}
                    >
                        &nbsp;
                    </div>
                ) : null}
                {options.map(option => (
                    <div
                        key={option.value}
                        value={option.value}
                        className={'Select_option' + (option === selectedOption ? ' selected' : '')}
                        title={option.text}
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            updateValue(option.value);
                        }}
                    >
                        {option.text}&nbsp;
                    </div>
                ))}
            </div>
        </div>
    );
}
