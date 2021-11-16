const initial = {
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
      skills: [
        // {
        //   id: null,
        //   name: '',
        //   seniority_level: null,
        // }
      ],
    },
    ref_url: '',
    created_at: '',
    is_bookmarked: false,
    recommended_courses: [
      // {
      //   id: null,
      //   title: '',
      //   description: '',
      //   images: {
      //     cover: '',
      //   },
      //   academy: {
      //     id: null,
      //     name: '',
      //     avatar: '',
      //   },
      //   type: '',
      //   rating: {
      //     average: 0,
      //     participants: 0,
      //   },
      //   price: null,
      //   discount: null,
      // },
    ],
    recommended_jobs: [
      // {
      //   id: 11,
      //   contract_type: 'تمام‌وقت',
      //   province: 'تهران',
      //   city: 'تهران',
      //   title: 'استخدام کارشناس تولید محتوا',
      //   company: {
      //     name_fa: 'فروشگاه اینترنتی پارسان می',
      //     name_en: 'Parsan Me',
      //     avatar:
      //       'https://develop.karsazapp.ir/storage/company-images/3AsN9iZmV6WllFoNsHwAQfw18FBs1Xmcg4QlRdha.jpg',
      //   },
      //   salary_from: 'از ۵,۰۰۰,۰۰۰ تومان',
      //   created_at: '174 روز قبل',
      // },
    ],
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case 'GET_JOB_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
