import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAll, get } from '../../../actions'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import banner from '../../../assets/static/divisions/banner.jpg'
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineFilePdf } from 'react-icons/ai'
import moment from 'moment'
import '../styles.scss'

const Wiki = props => {
  const { posts, categories, post } = props
  const [selectedCategory, setSelectedCategory] = useState(0)
  const { id } = useParams()
  const [search, setSearch] = useState('')

  useEffect(() => {
    props
      .getAll('wiki', 'GET_POSTS')
      .then(() => {
        props.getAll('wiki/categories', 'GET_CATEGORIES')
      })
      .then(() => {
        props.get(`wiki/${id}`, 'GET_POST')
      })

    // eslint-disable-next-line
  }, [])

  const categoryFiltered =
    selectedCategory !== 0
      ? posts.filter(post => post.category_id === selectedCategory)
      : posts

  const searchFiltered = categoryFiltered.filter(post =>
    post.title.toLowerCase().includes(search)
  )

  if (post) {
    return (
      <div className="wiki">
        <div
          className="wiki__background"
          style={{
            backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(${banner})`,
          }}
        >
          <Title className="title --center --white">{post.title}</Title>
        </div>
        <div className="wikiContainer">
          <div className="wikiContainer__content">
            <img
              className="wiki__banner"
              src={`${process.env.REACT_APP_API}docs/wiki/${post.img}`}
              alt=""
            />
            <div className="wiki__post">
              {post.paragraph && post.paragraph !== '' ? (
                <div className="parragraph">{post.paragraph}</div>
              ) : null}
              {post.subtitle && post.subtitle !== '' ? (
                <Title>{post.subtitle}</Title>
              ) : null}
              {post.paragraph2 && post.paragraph2 !== '' ? (
                <div className="parragraph">
                  <img src={banner} alt="" />
                  {post.paragraph2}
                </div>
              ) : null}
              {post.paragraph3 && post.paragraph3 !== '' ? (
                <div className="parragraph">
                  <img src={banner} alt="" />
                  {post.paragraph3}
                </div>
              ) : null}
            </div>
            {post.pdf && post.pdf !== '' ? (
              <div className="wiki__file">
                <a
                  href={`${process.env.REACT_APP_API}docs/wiki/${post.pdf}`}
                  target="blank"
                >
                  <Button>
                    <AiOutlineFilePdf /> Descargar
                  </Button>
                </a>
              </div>
            ) : null}
            {/*  <div className="wiki__commnets">
              <h5>Dejanos un comentario</h5>
              <textarea name="" id=""></textarea>
              <div className="wiki__inputsGroup">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <Button>Enviar</Button>
            </div> */}
          </div>
          <div className="wikiContainer__history">
            <div className="wiki__divider">Buscar</div>
            <input
              className="wiki__input"
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar..."
            />
            <div className="wiki__divider">Post Recientes</div>
            {posts ? (
              posts.slice(0, 3).map(post => (
                <div className="wiki__entryBlog">
                  <img
                    src={`${process.env.REACT_APP_API}docs/wiki/${post.img}`}
                    alt=""
                  />
                  <div className="wiki__textBoxBlog">
                    <span>
                      {moment(post.created).format('YYYY-mm-DD')} | By{' '}
                      {post.user_name}
                    </span>
                    <div>{post.title}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="wiki__entryBlog">
                <img src={banner} alt="" />
                <div className="wiki__textBoxBlog">
                  <span>2020-01-01 | By Marathon</span>
                  <div>Seven Doubts You Should Clarify About</div>
                </div>
              </div>
            )}

            <div className="wiki__divider">Categorías</div>
            <div className="wiki__month" onClick={() => setSelectedCategory(0)}>
              <BsChevronRight /> Todas
              <hr />
            </div>
            {categories
              ? categories.map(category => (
                  <div
                    className="wiki__month"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <BsChevronRight /> {category.name}
                    <hr />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Cargando</h1>
  }
}
const mapStateToProps = state => {
  return {
    posts: state.reducerWiki.posts,
    categories: state.reducerWiki.categories,
    post: state.reducerWiki.post,
  }
}

const mapDispatchToProps = {
  getAll,
  get,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wiki)
