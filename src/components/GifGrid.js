import React from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem.js'


export const GifGrid = ({category}) => {
  
  //   const [images, setImages] = useState([])

  const {data:images, loading} = useFetchGifs( category );  
  
  
    return (
    <div className="card-grid">
        <h3>{ category }</h3>

        {loading && <p> Loading... </p>}
            
            {
                images.map(img => (
                    <GifGridItem 
                    key={img.id} 
                    {...img }
                    
                    />
                ))
            }

            
    </div>
  )
}
