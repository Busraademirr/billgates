import React from 'react'
import { useState } from 'react';
import './Card.style.css';

function Card(props) {
    const [amountCount, setAmountCount] = useState(0);
    
    
    const handleBuy = (event) => {
        
        setAmountCount(amountCount + 1);
        slowDecrease(props.count, parseInt(event.target.value, 10));
        props.setTotalPrice(props.totalPrice+parseInt(event.target.value));
        addBasket();
    };

    const handleSell = (event) => {

        if (props.count > 0) {
            setAmountCount(amountCount - 1);
            slowIncrease(props.count, parseInt(event.target.value, 10));
            props.setTotalPrice(props.totalPrice-parseInt(event.target.value));
            removeBasket();
        }
    };


    const addBasket = ()=>{
        const currentItem = props.basket.find(item => item.id === props.id);
        const newItem = props.basket.filter(item=> item.id!==props.id);
        if(currentItem){
            currentItem.amount +=1
            props.setBasket([...newItem,currentItem])
        } else {
            props.setBasket(prev =>[...prev, {name: props.title , amount: 1  , price: props.price, id: props.id}]);
        }
    };

    const removeBasket=()=>{
        const sellItem = props.basket.find(item => item.id === props.id);
        const otherItem = props.basket.filter(item=> item.id!==props.id);
        sellItem.amount -=1
        if(sellItem.amount===0){
            props.setBasket([... otherItem ])
        }
        else {
            props.setBasket([...otherItem, sellItem])
        }   
    };

    const slowDecrease = (currentCount, decreaseAmount) => {
        const interval = 0.000001; // Her adımın süresi (ms)
        const stepAmount = 100; // Her adımda azaltılacak miktar

        const decrease = () => {
            if (currentCount > props.count - decreaseAmount) {
                currentCount -= stepAmount;
                props.setCount(currentCount);
                setTimeout(decrease, interval);
            } else {
                props.setCount(props.count - decreaseAmount);
            }
        };

        decrease();
    };


    const slowIncrease = (currentCount, increaseAmount) => {
        const interval = 0.000001; 
        const stepAmount = 100;

        const increase = () => {
            if (currentCount < props.count + increaseAmount) {
                currentCount += stepAmount;
                props.setCount(currentCount);
                setTimeout(increase, interval);
            } else {
                props.setCount(props.count + increaseAmount);
            }
        };

        increase();
    };


    return (
         <div className='card-body'>
            <div className='card'>
                <div className='img-body'>
                    <img src={props.image} />
                </div>
                <div className='card-content'>
                    <h3> {props.title}</h3>
                    <p className='price'>{props.price} $</p>
                    <div className='buttons'>
                        <button className={amountCount > 0 ? 'sell-btn btn' : 'btn'} onClick={handleSell} value={props.price} disabled={ amountCount<= 0} >Sell</button>
                        <input className='counter' type="text" value={amountCount} readOnly />
                        <button className='btn buy-btn' onClick={handleBuy} value={props.price}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card