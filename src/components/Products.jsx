import React from 'react'
import Product from './Product'

const Products = () => {
    var prod = [
        {
            title: 'arqitel', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, aperiam amet consectetur adipisicing elit. Atque, aperiam!', live: true, caseB: false
        },
        {
            title: 'TTR', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, aperiam amet consectetur adipisicing elit. Atque, aperiam!', live: true, caseB: false
        },
        {
            title: 'YIR 2022', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, aperiam amet consectetur adipisicing elit. Atque, aperiam!', live: true, caseB: true
        },
        {
            title: 'Yahoo!', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, aperiam amet consectetur adipisicing elit. Atque, aperiam!', live: true, caseB: true
        },
        {
            title: 'Rainfall', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, aperiam amet consectetur adipisicing elit. Atque, aperiam!', live: true, caseB: true
        },
    ];

  return (
    <div className='mt-20'>
          {prod.map((el, i) => <Product data={el} />)}
    </div>
  )
}

export default Products