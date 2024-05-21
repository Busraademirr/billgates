import React from 'react'
import './Receipt.css'

function Receipt({ basket, totalPrice }) {
    return (
        <div className='receipt-cont'>
            <div>
                <div>
                    <div>
                        <h3 style={{textAlign: 'center'}}>Your Receipt</h3> <hr />
                    </div>
                    <table className='table'> 
                        {basket.map((item, index) => (
                            <tr key={index}>
                                <td id='box'>{item.name}</td>
                                <td> X {item.amount}</td>
                                <td style={{color: '#489448'}}>Price: ${item.amount * item.price}</td>
                            </tr>
                        ))}
                        <br />
                        <tr className='total'>
                            <td>TOTAL</td>
                            <td></td>
                            <td style={{color: '#489448'}}> ${totalPrice}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Receipt