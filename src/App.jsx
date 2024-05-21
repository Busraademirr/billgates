import './App.css'
import Card from './Card/Card';
import PageHeader from './PageHeader/PageHeader';
import StickyNav from './StickyNav/StickyNav';
import {data} from './Data/Data'
import { useState , useEffect} from 'react';
import Receipt from './Data/Receipt/Receipt';

function App() {
  const [count, setCount] = useState(100000000000);
  const [basket, setBasket]=useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

  }, [basket]);

  return (
    <>
      <PageHeader/>
      <StickyNav count={count}/>
      <div className='card-body'>
      {data.map((eachProduct)=>{
        return (
          <Card
          key = {eachProduct.id}
          id = {eachProduct.id}
          title = {eachProduct.title}
          price = {eachProduct.price}
          image = {eachProduct.image}
          count={count} setCount={setCount}
          basket={basket} setBasket={setBasket}
          totalPrice={totalPrice} setTotalPrice={setTotalPrice}
        />
      );
      })}
      </div>
      {basket.length > 0 && <Receipt basket={basket} totalPrice={totalPrice}/>}
      
      
    </>
  )
}

export default App
