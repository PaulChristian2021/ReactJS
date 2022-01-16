import React from 'react'
import c from './SearchBar.module.css'
import {BsSearch} from 'react-icons/bs';

const SearchBar = (props) => {
  return (
    <form className={`${c.form} ${props.className}`} onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder={props.placeholder} className={props.inputClass}/>
      <button><BsSearch /></button>
    </form>
  )
}

export default SearchBar
