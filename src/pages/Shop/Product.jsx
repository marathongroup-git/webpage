/* import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../actions'
import { create } from '../../actions'
import Button from '../../components/Button'
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineRight,
  AiFillStar,
} from 'react-icons/ai'
import './styles.scss'

const Contact = props => {
  const products = [
    {
      id: 1,
      name: 'Producto',
      price: 100.0,
      stars: 3,
      category_id: 1,
      subcategory_id: 1,
      images: [
        {
          id: 1,
          url: 'https://via.placeholder.com/200',
        },
        {
          id: 2,
          url: 'https://via.placeholder.com/200',
        },
        {
          id: 3,
          url: 'https://via.placeholder.com/200',
        },
        {
          id: 4,
          url: 'https://via.placeholder.com/200',
        },
      ],
      CD: 1234,
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200.0,
      stars: 5,
      category_id: 1,
      subcategory_id: 1,
      image: 'https://via.placeholder.com/200',
      CD: 3456,
    },
    {
      id: 3,
      name: 'Producto 3 ',
      price: 300.0,
      stars: 5,
      category_id: 1,
      subcategory_id: 1,
      image: 'https://via.placeholder.com/200',
      CD: 4321,
    },
  ]

  return (
    <div className="shop">
      <div className="shop__container-Product">
        <div className="shop__product-card">
          <div>
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
          </div>
          <div></div>
        </div>
        <div className="shop__products">
          <div className="shop__productsList">
            {products.map((product, index) => (
              <div className="shop__product" key={index}>
                <div
                  className="shop__productImage"
                  onClick={() => console.log(index)}
                >
                  <img src={product.image} alt="product" />
                  <div className="shop__imageHover">
                    <button>Agregar al carrito</button>
                  </div>
                </div>
                <div
                  className="shop__productInfo"
                  onClick={() =>
                    props.history.push(`shop/${product.id}`)
                  }
                >
                  <span className="shop__productStars">
                    {[...Array(product.stars)].map((i, index) => (
                      <AiFillStar key={index} />
                    ))}
                  </span>
                  <span className="shop__productName">
                    {product.name}
                  </span>
                  <span className="shop__productPrice">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  getAll,
  create,
}

export default connect(null, mapDispatchToProps)(Contact)
 */