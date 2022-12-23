import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../actions'
import Title from '../../components/Title'
import Text from '../../components/Text'
import Button from '../../components/Button'
import banner from '../../assets/static/divisions/banner.jpg'
import { BsChevronRight } from 'react-icons/bs'
import moment from 'moment'
import './styles.scss'
import Iframe from 'react-iframe'
import IframeComponent from './IframeComponent';

const Wiki = props => {
  const { posts, categories, user, departments } = props
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    props
      .getAll('wiki', 'GET_POSTS')
      .then(() => {
        props.getAll('wiki/categories', 'GET_CATEGORIES')
      })
      .then(() => {
        props.getAll('users/departments', 'GET_DEPARTMENTS')
      })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (departments && categories) {
      const department = departments.find(
        department => parseInt(department.id) === parseInt(user.department)
      )

      console.log(department, 'department')

      if (department !== undefined && parseInt(user.role) === 5) {
        setSelectedCategory(
          categories.find(category => category.name === department.name).id
        )
      }
    }
    // eslint-disable-next-line
  }, [departments, categories])

  if (departments && posts && categories) {
    const categoryFiltered =
      selectedCategory !== 0
        ? posts.filter(post => post.category_id === selectedCategory)
        : posts

    const searchFiltered = categoryFiltered.filter(post =>
      post.title.toLowerCase().includes(search)
    )
    let user= localStorage.getItem('user')
    let password = localStorage.getItem('password')
    let acceso = "https://wiki-marathon.azurewebsites.net/menu2.php?id=inicio&p="+password+"&u="+user+"&r=1"+"&_redireccionar=1"
    
    

   
    let data =
      parseInt(user.role) === 5
        ? posts.filter(post => post.category_id === selectedCategory)
        : posts
       // alert(acceso.toString);

    return (
      
      <div className="wiki">
         {}

        <h1>  </h1>
      
        <IframeComponent
          src={acceso}
          height="100%"
          width="100%"
        />
      </div>
 


     


    )
  } else {
    return <div>Cargando...</div>
  }
}

const mapStateToProps = state => {
  return {
    posts: state.reducerWiki.posts,
    categories: state.reducerWiki.categories,
    user: state.reducersApp.user,
    departments: state.reducerWiki.departments,
  }
}

const mapDispatchToProps = {
  getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wiki)
