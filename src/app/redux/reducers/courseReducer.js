import { GET_COURSE_COMMENTS } from '../actions/types';

const initialState = {
  comments: { list: [], page: { current: 1, total: 1 }, sort: 2 },
  data: {
    id: null,
    title: '',
    images: { cover: '' },
    description: '',
    description_summary: '',
    description_summary_string: '',
    topics: '',
    topics_summary: '',
    topics_summary_string: '',
    discount: null,
    is_free: 1,
    prices: null,
    cashback: null,
    academy: {
      id: null,
      name: '',
      avatar: '',
    },
    type: {
      type: '',
      name: '',
    },
    start_datetime: null,
    end_datetime: null,
    duration_hours: null,
    duration_minutes: null,
    episodes: null,
    payment_type: 0,
    ref_url: '',
    ref_url_discount: null,
    instructors: [
      {
        id: 1,
        first_name: '',
        last_name: '',
        position: null,
        description: '',
        academy_description: null,
        image: '',
      },
    ],
    rating: {
      average: 0,
      participants: 0,
    },
    recommended_courses: [],
    is_purchased: false,
    is_bookmarked: false,
    user_comment: {
      id: null,
      content: null,
      rating: 0,
      like: {
        like: null,
        dislike: null,
        user_like: null,
        user_dislike: null,
      },
      is_participant: 0,
      is_anonymous: 0,
      created_at: '',
      user: {
        profile: {
          first_name: '',
          last_name: '',
          image: '',
        },
      },
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_COMMENTS:
      return {
        ...state,
        comments: { ...state.comments, list: action.payload },
      };
    case 'GET_COURSE_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'COURSE_BOOKMARK':
      return {
        ...state,
        data: { ...state.data, is_bookmarked: action.payload },
      };
    case 'CREATE_COMMENT':
      return {
        ...state,
      };
    case 'LIKE_COMMENT':
      return {
        ...state,
        comments: {
          ...state.comments,
          list: state.comments.list.map((comment) => {
            if (comment.id === action.payload.id) {
              comment.like = action.payload.like;
            }
            return comment;
          }),
        },
      };
    case 'DISLIKE_COMMENT':
      return {
        ...state,
        comments: {
          ...state.comments,
          list: state.comments.list.map((comment) => {
            if (comment.id === action.payload.id) {
              comment.like = action.payload.like;
            }
            return comment;
          }),
        },
      };
    case 'REPORT_COURSE_COMMENT':
      return {
        ...state,
      };
    case 'COURSE_FEEDBACK':
      return {
        ...state,
      };

    case 'COURSE_COMMENT_PAGE_TOTAL':
      return {
        ...state,
        comments: { ...state.comments, page: { ...state.comments.page, total: action.payload } },
      };

    case 'COURSE_COMMENT_CURRENT_PAGE':
      return {
        ...state,
        comments: { ...state.comments, page: { ...state.comments.page, current: action.payload } },
      };

    case 'COMMENT_SORT':
      return {
        ...state,
        comments: { ...state.comments, sort: action.payload },
      };
    default:
      return state;
  }
};
