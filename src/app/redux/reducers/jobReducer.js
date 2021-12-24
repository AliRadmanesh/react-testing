const initial = {
  status: null,
  data: {
    id: null,
    title: '',
    province: '',
    city: '',
    contract_type: '',
    salary_from: '',
    company: {
      name_fa: '',
      name_en: '',
      avatar: '',
      industry: '',
      about: '',
    },
    benefits: [],
    work_days: null,
    requirements: null,
    description: '',
    conditions: {
      age_range: {
        min: null,
        max: null,
      },
      gender: '',
      minimum_work_experience: '',
      minimum_education_degree: '',
      military_status: '',
      skills: [],
    },
    ref_url: '',
    created_at: '',
    is_bookmarked: false,
    recommended_courses: [],
    recommended_jobs: [],
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'SET_JOB_STATUS':
      return {
        ...state,
        status: action.payload,
      };
    case 'GET_JOB_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'JOB_BOOKMARK':
      return {
        ...state,
        data: { ...state.data, is_bookmarked: action.payload },
      };
    default:
      return state;
  }
};
