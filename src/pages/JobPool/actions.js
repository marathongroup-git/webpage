import axios from 'axios'
import Swal from 'sweetalert2'

export const create = data => async dispatch => {
  const formData = new FormData()
  Object.keys(data).map(key => {
    if (key === 'cv') {
      return formData.append(key, data[key][0])
    } else {
      return formData.append(key, data[key])
    }
  })
  try {
    await axios({
      url: `${process.env.REACT_APP_API}jobs/request`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'post',
      data: formData,
    })
    dispatch({
      type: 'REQUEST_JOB',
    })
    Swal.fire({
      title: 'Correcto!',
      text: 'Solicitud recibida',
      icon: 'success',
      confirmButtonColor: '#C90026',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      window.location.href = '/'
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
