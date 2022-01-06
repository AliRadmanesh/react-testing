const initial = {
  dispatcher: '',

  modal: { show: false, query: '', sort: 1, is_free: 1 },

  primary: {
    academy: { id: null, name: '', avatar: '' },
    cashback: 10,
    description: '',
    discount: null,
    duration_hours: null,
    duration_minutes: null,
    end_datetime: null,
    episodes: null,
    id: null,
    images: { cover: '' },
    instructors: [
      {
        first_name: '',
        id: null,
        image: '',
        last_name: '',
        position: null,
      },
    ],
    is_free: 0,
    price: null,
    rating: { average: null, participants: null },
    start_datetime: null,
    title: '',
    type: { type: '', name: '' },
  },
  secondary: {
    academy: { id: null, name: '', avatar: '' },
    cashback: 10,
    description: '',
    discount: null,
    duration_hours: null,
    duration_minutes: null,
    end_datetime: null,
    episodes: null,
    id: null,
    images: { cover: '' },
    instructors: [
      {
        first_name: '',
        id: null,
        image: '',
        last_name: '',
        position: null,
      },
    ],
    is_free: 0,
    price: null,
    rating: { average: null, participants: null },
    start_datetime: null,
    title: '',
    type: { type: '', name: '' },
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'SET_PRIMARY':
      return {
        ...state,
        primary: action.payload,
      };

    case 'SET_SECONDARY':
      return {
        ...state,
        secondary: action.payload,
      };
    case 'CLEAR_PRIMARY':
      return {
        ...state,
        primary: initial.primary,
      };

    case 'CLEAR_SECONDARY':
      return {
        ...state,
        secondary: initial.secondary,
      };

    case 'SET_MODAL_SORT':
      return {
        ...state,
        modal: { ...state.modal, sort: action.payload },
      };
    case 'SET_MODAL_FREE':
      return {
        ...state,
        modal: { ...state.modal, is_free: action.payload },
      };
    case 'SET_MODAL_QUERY':
      return {
        ...state,
        modal: { ...state.modal, query: action.payload },
      };
    case 'SET_MODAL_SHOW':
      return {
        ...state,
        modal: { ...state.modal, show: action.payload },
      };
    case 'SET_DISPATCHER':
      return {
        ...state,
        dispatcher: action.payload,
      };
    default:
      return state;
  }
};
