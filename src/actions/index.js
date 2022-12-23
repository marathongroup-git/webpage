import axios from 'axios'
import Swal from 'sweetalert2'

const API_KEY_TOKEN =
  '52b2165c5a8252eef0a3781c5a31bc9fc9a4bca0f5085a8650ea3306057f31d9'

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      Swal.fire({
        title: 'Sesión Expirada',
        text: 'Su sesión ha expirado',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      }).then(result => {
        if (result.isConfirmed) {
          logOut()
          window.location.href = '/login'
        }
      })
    } else {
      return Promise.reject(error)
    }
  }
)

export const setTitle = payload => ({
  type: 'SET_TITLE',
  payload,
})

export const setWraper = payload => ({
  type: 'SET_WRAPER',
  payload,
})

export const setLoading = payload => ({
  type: 'SET_LOADING',
  payload,
})

export const setSocket = payload => ({
  type: 'SET_SOCKET',
  payload,
})

export const setUser = (payload, redirectionUrl) => async dispatch => {
  const { user, password } = payload
  console.log(user, password);
  console.log(`url: ${process.env.REACT_APP_API}auth/sing-in`)
  try {
    localStorage.setItem('password', password)
    const res = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}auth/sing-in`,
      auth: {
        username: user,
        password,
      },
      data: {
        apiKeyToken: API_KEY_TOKEN,
      },
    })

    console.log("Legue hasta aqui 👲👲👲")

    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', res.data.user.user)
    localStorage.setItem('name', res.data.user.name)
    localStorage.setItem('id', res.data.user.id)
    localStorage.setItem('role', res.data.user.role)
    localStorage.setItem('BranchCD', res.data.user.BranchCD)
    localStorage.setItem('department', res.data.user.department)
   //alert(localStorage.getItem('user'))


    window.location.href = redirectionUrl

    dispatch({
      type: 'LOGIN_REQUEST',
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrectos',
    })
  }
}

export const logOut = () => ({
  type: 'LOG_OUT',
})

//CRUD

const storedJwt = localStorage.getItem('token')

export const getAll = (endPoint, typeAction) => async dispatch => {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API}${endPoint}`,
      headers: { Authorization: `Bearer ${storedJwt}` },
      method: 'get',
    })
    console.log(res.data)
    dispatch({
      type: typeAction,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const get = (endPoint, typeAction) => async dispatch => {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API}${endPoint}`,
      headers: { Authorization: `Bearer ${storedJwt}` },
      method: 'get',
    })
    dispatch({
      type: typeAction,
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const create = (endPoint, typeAction, data) => async dispatch => {
  try {
    await axios({
      url: `${process.env.REACT_APP_API}${endPoint}`,
      headers: { Authorization: `Bearer ${storedJwt}` },
      method: 'post',
      data: data,
    })
    dispatch({
      type: typeAction,
    })
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    })
    Toast.fire({
      icon: 'success',
      title: 'Se guardo correctamente',
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: 'Error!',
      text: 'Ah ocurrido un error',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    })
  }
}

export const update = (endpoint, typeAction, data) => async dispatch => {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API}${endpoint}`,
      headers: { Authorization: `Bearer ${storedJwt}` },
      method: 'put',
      data: data,
    })
    dispatch({
      type: typeAction,
      payload: { ...data, id: res.data.data ? parseInt(res.data.data) : 0 },
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleted = (endpoint, typeAction) => async dispatch => {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API}${endpoint}`,
      headers: { Authorization: `Bearer ${storedJwt}` },
      method: 'delete',
    })
    dispatch({
      type: typeAction,
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const createFile =
  (endPoint, typeAction, data, fileName) => async dispatch => {
    const formData = new FormData()
    Object.keys(data).map(key => {
      if (key === fileName) {
        return formData.append(key, data[key][0])
      } else {
        return formData.append(key, data[key])
      }
    })
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_API}${endPoint}`,
        headers: {
          Authorization: `Bearer ${storedJwt}`,
          'Content-Type': 'multipart/form-data',
        },
        method: 'post',
        data: formData,
      })
      dispatch({
        type: typeAction,
        payload: res.data.data,
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
      })
      Toast.fire({
        icon: 'success',
        title: 'Se guardo correctamente',
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error!',
        text: 'Ah ocurrido un error',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      })
    }
  }

export const updateFile =
  (endPoint, typeAction, data, fileName) => async dispatch => {
    const formData = new FormData()
    // eslint-disable-next-line
    Object.keys(data).map(key => {
      if (key === fileName) {
        if (data[key].length > 0) {
          return formData.append(key, data[key][0])
        }
      } else {
        return formData.append(key, data[key])
      }
    })
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_API}${endPoint}`,
        headers: {
          Authorization: `Bearer ${storedJwt}`,
          'Content-Type': 'multipart/form-data',
        },
        method: 'put',
        data: formData,
      })
      dispatch({ type: typeAction, payload: res.data.data })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
      })
      Toast.fire({
        icon: 'success',
        title: 'Se guardo correctamente',
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error!',
        text: 'Ah ocurrido un error',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      })
    }
  }
