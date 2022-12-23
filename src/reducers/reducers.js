const initialState = {
  loggedIn: false,
  branch: [
    {
      id: 1,
      name: 'Puebla (Matriz)',
      direcction: 'Puebla (Matriz): Av. 4 Poniente 1712 - A Col. Centro.',
      city: 'Puebla, México C.P. 72000',
      phone: '(222) 690 67 00',
      email: 'matriz@marathongroup.mx',
      lat: 19.052681,
      lng: -98.21008,
      center: {
        lat: 19.05,
        lng: -98.21,
      },
    },
    {
      id: 2,
      name: 'Querétaro',
      direcction: 'Querétaro: Av. Constituyentes #73 Pte. Col. El Pocito.',
      city: 'Corregidora, Querétaro C.P. 76901',
      phone: '(442) 196 83 61 / (442) 189 26 38',
      email: 'queretaro@marathongroup.mx',
      lat: '20.559586',
      lng: '-100.416315',
      center: {
        lat: '20.55',
        lng: '-100.41',
      },
    },
    {
      id: 3,
      name: 'Coatzacoalcos',
      direcction:
        'Coatzacoalcos: 18 de marzo #820 Esq. Mariano Abasolo Col. Ma. de la Piedad Coatzacoalcos,',
      city: 'Veracrúz. C.P. 96400',
      phone: '(921) 158 88 57 / (921) 210 54 26',
      email: 'coatzacoalcos@marathongroup.mx',
      lat: '18.152195',
      lng: '-94.432638',
      center: {
        lat: '18.15',
        lng: '-94.43',
      },
    },
    {
      id: 4,
      name: 'Villahermosa',
      direcction:
        'Villahermosa: Calle Anacleto Canabal No.120, Col. 1º de Mayo ',
      city: 'Villahermosa, Tabasco. C.P. 86190',
      phone: '(993) 317 21 31',
      email: 'villahermosa@marathongroup.mx',
      lat: '17.981898',
      lng: '-92.93598',
      center: {
        lat: '17.98',
        lng: '-92.93',
      },
    },
    {
      id: 5,
      name: 'San Luis Potosí',
      direcction:
        'Conjunto Industrial PITI-RAYO Eje 126 No. 216, interior 20, Av. Industrias, Zona Industrial Rural, Pozos.',
      city: 'San Luis Potosí.  C.P. 78427',
      phone: '(222) 750 67 66',
      email: 'sanluispotosi@marathongroup.mx',
      lat: 22.088154,
      lng: -100.88413,
      center: {
        lat: '19.05',
        lng: '-98.21',
      },
    },
  ],
  user: {
    id: localStorage.getItem('id'),
    user: localStorage.getItem('user'),
    name: localStorage.getItem('name'),
    role: localStorage.getItem('role'),
    BranchCD: localStorage.getItem('BranchCD'),
    department: localStorage.getItem('department'),
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loggedIn: true,
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
      }
    default:
      return state
  }
}
