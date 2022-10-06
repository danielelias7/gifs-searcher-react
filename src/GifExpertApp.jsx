import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['Dragon Ball']);

  const [message, setMessage] = useState(false);

  const onAddCategory = ( newCategory) => {
    if (categories.includes(newCategory)) {
      setMessage(true);
      return;
    }
    setCategories([ newCategory, ...categories]);
    setMessage(false);
  }

  return (
    <>

      <h1></h1>

      <AddCategory
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {
        message && <small className="red-message">Ya existe</small>
      }

      {
        categories.map(
          (item) => <GiftGrid category={ item } key={ item } />
        )
      }
    </>
  )
}
