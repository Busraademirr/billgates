import React from 'react'
import billgates from '../../pic/billgates.jpg'
import './PageHeader.css'

function PageHeader() {
  return (
    <div className='header-body'>
        <img src={billgates} alt="" />
        <h3>Spend Bill Gate's Money</h3>
    </div>
  )
}

export default PageHeader