import React from 'react';
import {categories} from '../../utils/data';
import CategoryItem from '../../components/category-item/CategoryItem';
import './Home.scss'
function Home() {
  return (
    <div className='home-container'>
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem title={title} imageUrl={imageUrl} key={id}/>
      ))}
    </div>
  )
}

export default Home