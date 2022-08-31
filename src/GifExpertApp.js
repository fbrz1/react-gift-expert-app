import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory.js'
import {GifGrid} from './components/GifGrid.js'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Java Script'])

//   const handleAdd = () => {
//     setCategories((c)=> [...c, 'asd'])
// }

console.log(categories);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories}/>

      <ol>
        { categories.map(category => (
          <GifGrid 
          key={category}
          category={category}/>
         ))
        }
      </ol>
    </div>
  )
}

export default GifExpertApp
