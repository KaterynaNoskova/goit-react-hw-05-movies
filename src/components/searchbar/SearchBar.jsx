import { useState } from "react";
import css from './SearchBar.module.css';

export const SearchBar =({onSubmit})=>{
    const [value, setValue] = useState('');

    const submit = evt =>{
        evt.preventDefault();
        onSubmit(value);
        setValue('');
    };
    return(
        <form onSubmit={submit}>
            <input 
            type="text"
            className={css.inputSB}
            value={value}
            onChange = {evt=>setValue(evt.target.value)}
             />
             <button type="submit" className={css.buttonSB}>
                Search
             </button>
        </form>
    )
}