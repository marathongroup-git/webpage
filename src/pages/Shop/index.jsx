import React, { useState, useEffect } from 'react'
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
  const { productsPunchOut } = props
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(0)
  const [subcategory, setSubCategory] = useState(0)
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'Categoría',
    },
    {
      id: 2,
      title: 'Categoría',
    },
    {
      id: 3,
      title: 'Categoría',
      isOpen: false,
      submenu: [
        {
          title: 'Subcategoría',
          subcategoryId: 1,
        },
        {
          title: 'Subcategoría',
          subcategoryId: 2,
        },
        {
          title: 'Subcategoría',
          subcategoryId: 3,
        },
      ],
    },
    {
      id: 4,
      title: 'Categoría',
    },

    {
      id: 5,
      title: 'Categoría',
      isOpen: false,
      submenu: [
        {
          title: 'Subcategoría',
          subcategoryId: 3,
        },
        {
          title: 'Subcategoría',
          subcategoryId: 4,
        },
        {
          title: 'Subcategoría',
          subcategoryId: 5,
        },
      ],
    },
  ])

  useEffect(() => {
    props.getAll(`connect_products_punchout`, 'GET_PRODUCTS_PUNCHOUT')

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (productsPunchOut) {
      setData(productsFinal)
    }
  }, [productsPunchOut, category, subcategory])

  const products = [
    {
      id: 1,
      name: 'Producto',
      price: 100.0,
      stars: 3,
      category_id: 1,
      subcategory_id: 1,
      image: 'https://via.placeholder.com/200',
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
    {
      id: 4,
      name: 'Producto 4',
      price: 400.0,
      stars: 5,
      category_id: 2,
      subcategory_id: 1,
      image: 'https://via.placeholder.com/200',
      CD: 4444,
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 500.0,
      stars: 5,
      category_id: 3,
      subcategory_id: 2,
      image: 'https://via.placeholder.com/200',
      CD: 5555,
    },
    {
      id: 6,
      name: 'Producto 6',
      price: 600.0,
      stars: 5,
      category_id: 3,
      subcategory_id: 2,
      image: 'https://via.placeholder.com/200',
      CD: 6666,
    },
  ]

  const productsFinal = productsPunchOut

  const handleOpen = (id, isOpen) => {
    setCategories(
      categories.map(category => {
        if (category.id === id) {
          category.isOpen = !isOpen
        }
        return category
      })
    )
  }

  const handleSort = i => {
    switch (i) {
      case 1:
        setData(productsFinal.sort((a, b) => b.price - a.price))
        break
      case 2:
        setData(productsFinal.sort((a, b) => a.price - b.price))
        break
      case 3:
        setData(productsFinal.sort((a, b) => b.stars - a.stars))
        break
      case 4:
        setData(productsFinal.sort((a, b) => a.name - b.name))
        break
      default:
        setData(productsFinal)
    }
  }

  if (!productsPunchOut) {
    return <h1>Cargando</h1>
  }

  return (
    <div className="shop">
      <div className="shop__container">
        <div className="shop__aside">
          <div className="shop__search">
            <span className="shop__title">Buscar</span>
            <div className="shop__inputGroup">
              <input
                className="shop__input"
                type="text"
                placeholder="Buscar..."
                onChange={e => setSearch(e.target.value)}
              />
              <Button className="shop__button">
                <AiOutlineSearch />
              </Button>
            </div>
          </div>
          <div className="shop__categories">
            <span className="shop__title">Categorias</span>
            <hr className="shop__divider" />

            <ul className="shop__categoriesList">
              <li className="shop__category">
                <li
                  className="shop__link"
                  onClick={() => {
                    setCategory(0)
                    setSubCategory(0)
                  }}
                >
                  <span>Todos</span>
                </li>
              </li>
              {categories.map((menu, index) =>
                menu.submenu ? (
                  <li key={index} className="shop__category">
                    <li className="shop__link">
                      <span
                        onClick={() => {
                          setSubCategory(0)
                          setCategory(parseInt(menu.id))
                        }}
                      >
                        {menu.title}
                      </span>
                      <AiOutlinePlus
                        onClick={() => {
                          handleOpen(menu.id, menu.isOpen)
                        }}
                      />
                    </li>
                    <ul
                      className={`shop__submenu ${
                        menu.isOpen ? '--active' : ''
                      }`}
                    >
                      {menu.submenu.map((submenu, i) => (
                        <li
                          className="shop__category"
                          key={i}
                          onClick={() =>
                            setSubCategory(submenu.subcategoryId)
                          }
                        >
                          <li className="shop__link">
                            <span>{submenu.title}</span>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index} className="shop__category">
                    <li
                      className="shop__link"
                      onClick={() => {
                        setSubCategory(0)
                        setCategory(parseInt(menu.id))
                      }}
                    >
                      <span>{menu.title}</span>
                    </li>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="shop__products">
          <div className="shop__productsHeader">
            <span className="shop__title">
              Mostrando {productsPunchOut.length} resultados
            </span>
            <span className="shop__title">
              <select
                className="shop__select"
                onChange={e => handleSort(parseInt(e.target.value))}
              >
                <option value="0">Ordenar por</option>
                <option value="1">Mayor precio</option>
                <option value="2">Menos precio</option>
                <option value="3">Estrellas</option>
                <option value="4">Nombre</option>
              </select>
            </span>
          </div>
          <div className="shop__productsList">
            {search === ''
              ? data.map((product, index) => (
                  <div className="shop__product" key={index}>
                    <div
                      className="shop__productImage"
                      onClick={() => console.log(index)}
                    >
                      <img
                        src={`${process.env.REACT_APP_API}docs/products/${product.url}`}
                        alt="product"
                      />
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
                ))
              : data
                  .filter(product =>
                    product.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((product, index) => (
                    <div className="shop__product" key={index}>
                      <div
                        className="shop__productImage"
                        onClick={() => console.log(index)}
                      >
                        <img
                          src={`${process.env.REACT_APP_API}docs/products/${product.url}`}
                          alt="product"
                        />
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
                          {[...Array(product.stars)].map(
                            (i, index) => (
                              <AiFillStar key={index} />
                            )
                          )}
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
          <div className="shop__pagination">
            <div className="shop__page --active">1</div>
            <div className="shop__page">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    productsPunchOut: state.reducerShop.productsPunchOut,
  }
}

const mapDispatchToProps = {
  getAll,
  create,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
