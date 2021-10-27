import React, { useEffect, useState } from 'react';
import Layout from '../../common/Layout/detail';
import instance from '../../app/instance';

import About from '../../components/course/About';
import Author from '../../components/course/Author';
import Chapters from '../../components/course/Chapters';
import Comments from '../../components/course/Comments';
import Header from '../../components/course/Header';
import Recommended from '../../components/course/Recommended';

import './course.css';

export default function Course() {
  const [data, setData] = useState({
    id: 1,
    title: 'آموزش برنامه نویسی پایتون (Python) - مقدماتی',
    images: {
      cover: 'https://develop.karsazapp.ir/storage/course-images/600560e80c587785c08e065006.png',
    },
    description:
      '<p><span style="color: rgb(32, 35, 37);">در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید.</span></p><p style="text-align: justify;">پایتون (Python)، یک زبان قدرتمند، سطح بالا و بسیار محبوب برنامه نویسی است. این زبان در سال ۲۰۱۹ همواره در بین سه زبان محبوب برنامه نویسی قرار دارد. این زبان قدرتمند برنامه نویسی در زمینه های مختلفی چون: توسعه وب، توسعه نرم افزار، ریاضیات، System Scripting و… مورد استفاده قرار می گیرد.</p><p style="text-align: justify;">دلایل مختلفی باعث محبوبیت پایتون شده است که می توان به این موارد اشاره کرد: ۱) پایتون روی پلتفرم های مختلفی همچون: ویندوز، مک، لینوکس، رزبری پای و… کار می کند. ۲) پایتون سینتکس (Syntax) بسیار ساده ای دارد. ۳) سینتکس پایتون به شما اجازه می دهد یک کار را با نوشتن خط های کد کم تر نسبت به اغلب زبان های محبوب برنامه نویسی انجام دهید. ۴) پایتون روی یک سیستم Interpreter اجرا می شود، به این معنی که کد به محض نوشتن قابلیت اجرا دارد که این باعث Prototyping بسیار سریع می شود. ۵) از پایتون می توان به طرق مختلفی اعم از: Procedural، شی گرا یا Functional استفاده کرد.</p><p style="text-align: justify;">پایتون را می توان روی یک سرور برای ساختن Web Applications و ساختن Workflow در نرم افزار استفاده کرد و به سیستم های پایگاه داده متصل شده و فایل ها را بخواند و بنویسد، همچنین می تواند داده های کلان (Big Data) را مدیریت کرده و عملیات پیچیده ریاضیاتی انجام دهد، این قابلیت ها است که باعث شده پایتون به یک زبان بسیار محبوب تبدیل شود.</p><p style="text-align: justify;">در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم.</p><p style="text-align: justify;">مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید.</p>',
    description_summary:
      '<p><span style="color: rgb(32, 35, 37);">در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید.</span></p><p style="text-align: justify;">پایتون (Python)، یک زبان قدرتمند، سطح بالا و بسیار محبوب برنامه نویسی است. این زبان در سال ۲۰۱۹ همواره در بین سه زبان محبوب برنامه نویسی قرار دارد. این زبان قدرتمند برنامه نویسی در زمینه های مختلفی چون: توسعه وب، توسعه نرم افزار، ریاضیات، System Scripting و… مورد استفاده قرار می گیرد.</p>',
    description_summary_string:
      'در این آموزش قصد داریم پایتون را از پایه آموزش دهیم و سعی می کنیم تمام مطالب مقدماتی لازم برای برنامه نویسی با پایتون را پوشش دهیم. چرا که برای انجام هر کاری با پایتون، نیازمند آشنایی با دانش مقدماتی و نحوه برنامه نویسی با پایتون هستیم. مخاطبان این آموزش نیاز به دانش قبلی از پایتون ندارند و سعی می شود تمام مطالب لازم در همین آموزش بیان شود. در پایان این آموزش شما قادر خواهید بود به راحتی با پایتون برنامه نویسی کنید و مسیر مورد علاقه خود را برای ادامه کار با پایتون انتخاب کنید.پایتون (Python)، یک زبان قدرتمند، سطح بالا و بسیار محبوب برنامه نویسی است. این زبان در سال ۲۰۱۹ همواره در بین سه زبان محبوب برنامه نویسی قرار دارد. این زبان قدرتمند برنامه نویسی در زمینه های مختلفی چون: توسعه وب، توسعه نرم افزار، ریاضیات، System Scripting و… مورد استفاده قرار می گیرد.',
    topics:
      '<ul><li style="text-align: justify;">درس یکم: آشنایی با Python (پایتون)</li><li class="ql-indent-1" style="text-align: justify;">نصب پایتون</li><li class="ql-indent-1" style="text-align: justify;">یک برنامه ساده در پایتون و تفسیر آن</li><li class="ql-indent-1" style="text-align: justify;">Standard Library در پایتون</li><li style="text-align: justify;">بلوک های کد در پایتون</li><li class="ql-indent-2" style="text-align: justify;">if و else</li><li class="ql-indent-2" style="text-align: justify;">Python Shell</li><li class="ql-indent-1" style="text-align: justify;">for</li><li class="ql-indent-1" style="text-align: justify;">تولید Random Integers با پایتون</li><li class="ql-indent-1" style="text-align: justify;">range</li><li style="text-align: justify;">درس دوم: ساختمان داده در پایتون</li><li class="ql-indent-1" style="text-align: justify;">ساختمان داده در پایتون</li><li class="ql-indent-1" style="text-align: justify;">List و قابلیت های آن در پایتون</li><li class="ql-indent-1" style="text-align: justify;">Tuple و قابلیت های آن در پایتون</li><li class="ql-indent-1" style="text-align: justify;">Dictionary و قابلیت های آن در پایتون</li><li class="ql-indent-1" style="text-align: justify;">Set و قابلیت های آن در پایتون</li><li style="text-align: justify;">درس سوم: توابع و ماژول ها</li><li class="ql-indent-1" style="text-align: justify;">توابع در پایتون</li><li class="ql-indent-1" style="text-align: justify;">قابلیت های توابع در پایتون</li><li class="ql-indent-1" style="text-align: justify;">ماژول ها در پایتون و نحوه ساختن ماژول</li><li class="ql-indent-1" style="text-align: justify;">نصب Package ها با pip</li><li style="text-align: justify;">درس چهارم: کلاس</li><li class="ql-indent-1" style="text-align: justify;">مفهوم و ساخت کلاس در پایتون</li><li class="ql-indent-1" style="text-align: justify;">قابلیت های کلاس</li><li class="ql-indent-1" style="text-align: justify;">اضافه کردن متد به کلاس</li><li class="ql-indent-1" style="text-align: justify;">اهمیت self</li><li class="ql-indent-1" style="text-align: justify;">ارث بری</li><li style="text-align: justify;">درس پنجم: خواندن و نوشتن فایل ها</li><li class="ql-indent-1" style="text-align: justify;">خواندن و نوشتن فایل های txt</li><li class="ql-indent-1" style="text-align: justify;">Exception Handling در کار با فایل ها</li><li class="ql-indent-1" style="text-align: justify;">خواندن و نوشتن فایل های JSON</li><li class="ql-indent-1" style="text-align: justify;">خواندن و نوشتن فایل های اکسل</li></ul>',
    topics_summary:
      '<ul><li style="text-align: justify;">درس یکم: آشنایی با Python (پایتون)</li><li class="ql-indent-1" style="text-align: justify;">نصب پایتون</li><li class="ql-indent-1" style="text-align: justify;">یک برنامه ساده در پایتون و تفسیر آن</li><li class="ql-indent-1" style="text-align: justify;">Standard Library در پایتون</li><li style="text-align: justify;">بلوک های کد در پایتون</li><li class="ql-indent-2" style="text-align: justify;">if و else</li><li class="ql-indent-2" style="text-align: justify;">Python Shell</li><li class="ql-indent-1" style="text-align: justify;">for</li><li class="ql-indent-1" style="text-align: justify;">تولید Random Integers با پایتون</li><li class="ql-indent-1" style="text-align: justify;">range</li><li style="text-align: justify;">درس دوم: ساختمان داده در پایتون</li><li class="ql-indent-1" style="text-align: justify;">ساختمان داده در پایتون</li></ul>',
    topics_summary_string:
      'درس یکم: آشنایی با Python (پایتون)نصب پایتونیک برنامه ساده در پایتون و تفسیر آنStandard Library در پایتونبلوک های کد در پایتونif و elsePython Shellforتولید Random Integers با پایتونrangeدرس دوم: ساختمان داده در پایتونساختمان داده در پایتون',
    prices: null,
    is_free: 1,
    discount: null,
    cashback: 10,
    academy: {
      id: 1,
      name: 'فرادرس',
      avatar: 'https://develop.karsazapp.ir/storage/academy-images/600560e80c587785c08e066001.png',
    },
    type: {
      type: 'غیرحضوری',
      name: 'فیلم‌های آموزشی',
    },
    start_datetime: null,
    end_datetime: null,
    duration_hours: null,
    duration_minutes: null,
    episodes: null,
    payment_type: 0,
    ref_url: 'https://faradars.org/courses/fvpht9808-basic-of-python-programming',
    ref_url_discount: null,
    instructors: [
      {
        id: 1,
        first_name: 'پژمان',
        last_name: 'اقبالی شمس آبادی',
        position: null,
        description:
          'مهندس پژمان اقبالی شمس آبادی کارشناس ارشد مهندسی مکانیک دانشگاه علم و صنعت ایران، مشغول انجام کار روی پروژه های خود در زمینه های آکوستیک، ارتعاشات و پردازش تصویر هستند. ایشان به مباحث دینامیک و ارتعاشات و همچنین برنامه نویسی علاقه مند هستند و سابقه کار با نرم افزارهای مهندسی مکانیک همچون: CATIA و COMSOL را دارند. ایشان به نرم افزار MATLAB مسلط هستند و توانایی برنامه نویسی با زبان های مختلف همچون: C++, JAVA, Python را دارند.',
        academy_description: null,
        image:
          'https://develop.karsazapp.ir/storage/instructor-images/60058a1de7ecakce7ed1a85006.jpg',
      },
    ],
    rating: {
      average: 4.5,
      participants: 2,
    },
    recommended_courses: [
      {
        id: 3007,
        title: 'آموزش جامع و پروژه محور پایتون Python',
        description:
          'پایتون (Python) در سال 1991 توسط گویدو ون روسوم به وجود آمد. زبان برنامه نویسی پایتون به قدری ساده و خواناست که حتی کودکان هم می توانند آن را در مدتی کوتاه بیاموزند ! این سادگی در حالی است که پایتون از قدرت بسیار بالایی برخوردار است.Python زبانی بدون پیچیدگی و آشفتگی است که می تواند هر آنچه در ذهن یک برنامه نویس وجود دارد را به واقعیت تبدیل کند. این زبان محبوب در سال های اخیر به شدت مورد استقبال قرار گرفته و اکنون یکی از ترندهای برنامه نویسی دنیاست.',
        images: {
          cover:
            'https://develop.karsazapp.ir/storage/course-images/60058a1de7ecaace7ed1a85006.png',
        },
        academy: {
          id: 5,
          name: 'داناپ',
          avatar:
            'https://develop.karsazapp.ir/storage/academy-images/600560e80c587785c08e066005.png',
        },
        type: 'غیرحضوری',
        rating: {
          average: 0,
          participants: 0,
        },
        price: null,
        discount: null,
      },
      {
        id: 2570,
        title: 'آموزش مقدماتی برنامه نویسی با پایتون Python',
        description:
          'پایتون Python یک زبان برنامه نویسی سطح بالا، شی گرا و چندسکویی است که در توسعه بک اند (Back-End) کاربردهای بسیاری دارد و دارای بیش از 15000 کتابخانه می باشد. پایتون در حدی قدرتمند است که در پروژه های بزرگی همچون گوگل، یوتیوب و اینستاگرام از آن استفاده شده است.یکی از دلایل مهم محبوبیت بسیار بالای پایتون نسبت به زبان های دیگری مثل جاوا یا سی شارپ این است که نیاز به کدنویسی کمتری دارد و یادگیری آن به دلیل نزدیک بودن به زبان انگلیسی بسیار ساده است.',
        images: {
          cover:
            'https://develop.karsazapp.ir/storage/course-images/6005838b3751551573b8385006.jpg',
        },
        academy: {
          id: 5,
          name: 'داناپ',
          avatar:
            'https://develop.karsazapp.ir/storage/academy-images/600560e80c587785c08e066005.png',
        },
        type: 'غیرحضوری',
        rating: {
          average: 0,
          participants: 0,
        },
        price: null,
        discount: null,
      },
      {
        id: 2857,
        title: 'آموزش جامع مبانی پایتون Python',
        description:
          'یادگیری مبانی پایتون Python اولین قدم برای شروع یادگیری و تسلط بر این زبان محبوب است. پایتون یک زبان برنامه نویسی تفسیری، داینامیک، شی گرا و بسیار محبوب است که روش های بسیار زیادی را برای کار با زبان ها و ابزارهای مختلف دیگر را به سادگی در اختیار قرار می دهد.همچنین پایتون دارای کتابخانه (Library) های بسیار متنوع و زیادی ماست که یادگیری و استفاده از آنها در کمترین زمان امکان پذیر می باشد. کدهای نوشته شده در پایتون در تمامی پلتفرم ها از جمله ویندوز، مک، لینوکس و حتی سیستم عامل های موبایل قابل اجراست.',
        images: {
          cover:
            'https://develop.karsazapp.ir/storage/course-images/6005878bae2a44a2eab8785006.jpg',
        },
        academy: {
          id: 5,
          name: 'داناپ',
          avatar:
            'https://develop.karsazapp.ir/storage/academy-images/600560e80c587785c08e066005.png',
        },
        type: 'غیرحضوری',
        rating: {
          average: 0,
          participants: 0,
        },
        price: null,
        discount: null,
      },
      {
        id: 2518,
        title: 'پایتون چیست؟کاربرد زبان برنامه نویسی python+ویدیو رایگان',
        description:
          'زبان‌های برنامه نویسی بسیاری در دنیا وجود دارد که هرکدام کارایی خاص خود را دارند. یکی از این زبان‌ها که در جهان بسیار پرطرفدار می باشد، پایتون (python) است. البته که زبان برنامه نویسی پایتون در ایران به اندازه بقیه زبان ها محبوب نیست، اما روز به روز محبوبیتش افزایش می یابد به طوری که می توان پیش بینی کرد تا 5 سال آینده محبوب ترین زبان برنامه نویسی ایران و جهان باشد. به همین دلیل تصمیم گرفتیم تا محتوایی تولید کنیم که بگوییم پایتون چیست؟ چه کاربردهایی دارد و ویژگی‌های آن چه چیزهایی هستند. پیشنهاد می کنیم از بخش جلسات دوره آموزش پایتون در پایین همین صفحه ویدیو معرفی زبان پایتون را دانلود و مشاهده کنید.',
        images: {
          cover:
            'https://develop.karsazapp.ir/storage/course-images/60057f4e8543663458e4f75006.jpg',
        },
        academy: {
          id: 4,
          name: 'آکادمی آی تی',
          avatar:
            'https://develop.karsazapp.ir/storage/academy-images/600560e80c587785c08e066004.png',
        },
        type: 'غیرحضوری',
        rating: {
          average: 0,
          participants: 0,
        },
        price: null,
        discount: null,
      },
      {
        id: 2502,
        title: 'آموزش پایتون مقدماتی - یادگیری زبان برنامه نویسی python',
        description:
          'چند سالی است که آموزش پایتون از پرطرفدار ترین دوره های آموزش طراحی سایت میباشد. یکی از زبان‌های برنامه نویسی شی گرا و سطح بالا که به جهت توسعه اپلیکیشن‌های وب و دسکتاپ مورد استفاده قرار می‌گیرد، زبان برنامه نویسی پایتون نام دارد. این زبان به گونه‌ای طراحی شده است که می‌تواند امکان نوشتن کدهای منطقی و بدون ابهام را برای انواع پروژه‌های کوچک و بزرگ فراهم آورد. اگر بخواهیم در خصوص آموزش پایتون یک مورد را بیان کنیم می‌توانیم بگوییم از زبان پایتون به جهت انجام محاسبات عددی و محاسبات علمی به صورت پیچیده استفاده می‌شود. در ادامه با معرفی دوره آموزش python مقدماتی آکادمی آی تی همراه ما باشید.',
        images: {
          cover:
            'https://develop.karsazapp.ir/storage/course-images/60057f2c602b66b206c2f75006.png',
        },
        academy: {
          id: 4,
          name: 'آکادمی آی تی',
          avatar:
            'https://develop.karsazapp.ir/storage/academy-images/600560e80c587785c08e066004.png',
        },
        type: 'غیرحضوری',
        rating: {
          average: 0,
          participants: 0,
        },
        price: '140000',
        discount: null,
      },
    ],
    is_purchased: false,
    is_bookmarked: false,
    user_comment: {
      id: 10,
      content: null,
      rating: 4,
      like: {
        like: 0,
        dislike: 0,
        user_like: 0,
        user_dislike: 0,
      },
      is_participant: 0,
      is_anonymous: 0,
      created_at: '14 مهر 1400',
      user: {
        profile: {
          first_name: 'علی',
          last_name: 'رادمنش',
          image:
            'https://develop.karsazapp.ir/storage/user-images/uoNFIGfb1LPdh6rPusM9x0KBVr3GXqdVTrSwlWES.jpg',
        },
      },
    },
  });

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <Header
        image={data.images.cover}
        title={data.title}
        description_summary_string={data.description_summary_string}
        prices={data.prices}
        discount={data.discount}
        is_free={data.is_free}
        rating={data.rating}
        academy={data.academy}
        is_purchased={data.is_purchased}
        is_bookmarked={data.is_bookmarked}
        duration_hours={data.duration_hours}
        duration_minutes={data.duration_minutes}
        start_datetime={data.start_datetime}
        end_datetime={data.end_datetime}
        type={data.type}
        cashback={data.cashback}
      />
      <Author instructors={data.instructors} />
      <About />
      <Chapters />
      <Recommended />
      <Comments />
    </Layout>
  );
}
