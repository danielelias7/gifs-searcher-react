import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChanged = ({ target }) => {

     setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const searchValue = inputValue.trim();
    if( searchValue.length <= 1) return;
    onNewCategory(searchValue);
    setInputValue('');
  }


  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        onChange={ onInputChanged }
      />
      {/* <button>Submit</button> */}
    </form>
  )
}
