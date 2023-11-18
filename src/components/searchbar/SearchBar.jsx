import { useState } from "react";
//import css

export const SearchBar =({onSubmit})=>{
    const [value, setValue] = useState('');

    const submit = evt =>{
        evt.preventDefault();
        onSubmit(value);
        setValue();
    };
    return(
        <form onSubmit={submit}>
            <input 
            type="text"
            value={value}
            onChange = {evt=>setValue(evt.target.value)}
             />
             <button type="submit">
                Search
             </button>
        </form>
    )
}