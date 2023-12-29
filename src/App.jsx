import React, { useState } from 'react'
import InputArea from './components/InputArea'
import OutputArea from './components/OutputArea'

const App = () => {

  const [products, setProducts] = useState([]);

  const addProduct = (productName, productPrice) => {
    // Create a new product object
    const newProduct = {
      name: productName,
      price: productPrice,
    };

    // Add the new product to the products array
    setProducts([...products, newProduct]);
  };

  return (
    <div className='px-32 py-16'>
      <div className='text-3xl font-bold '>Price-Pulse</div>
      <div className='mt-2 mb-4'>
        Storing the input data with Product Name and Product Price as an object into array, displaying that list data, calculating total Product Price using javascript.
      </div>

      <InputArea addProduct={addProduct} />
      <OutputArea products={products} />
    </div>
  )
}

export default App
