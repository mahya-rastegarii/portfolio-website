import { NextResponse } from "next/server";


export type Project = {
    id: number;
    titleEn: string;
    titleFa: string;
    descriptionEn: string;
    descriptionFa: string;
    techs: string[];
    image: string;
    preview : string;
    github: string;
  };
  
  
const projects: Project[] = [
      {
        id:1,
        titleEn: 'Weather App',
        titleFa: 'اپلیکیشن آب و هوا',
        descriptionEn: 'A weather application with the ability to convert temperatures between Celsius and Fahrenheit, and dynamically change the background based on the weather conditions of the selected city.',
        descriptionFa: 'یک اپلیکیشن هواشناسی با قابلیت تبدیل دما بین سانتی‌گراد و فارنهایت و تغییر پویا‌ی پس‌زمینه بر اساس شرایط آب‌وهوایی شهر انتخاب‌شده',
        techs: ['Reactjs', 'TailwindCss'],
        image: '/img/projects/weatherApp.png',
        preview : 'https://weather-app-sand-alpha.vercel.app',
        github: 'https://github.com/mahya-rastegarii/weather-App.git',
      },
      {
        id:2,
        titleEn: 'Admin Dashboard',
        titleFa: 'داشبورد ادمین',
        descriptionEn: 'A bilingual (FA/EN) admin dashboard project featuring theme and color customization.It offers full course management, including filtering, adding, deleting, and editing courses.Additionally, users can add or delete events to the calendar.',
        descriptionFa: 'پروژه داشبورد ادمین دو‌زبانه (فارسی و انگلیسی) با قابلیت تغییر تم و رنگ.امکان مدیریت کامل درس‌ها شامل فیلتر کردن، اضافه کردن، حذف و ویرایش درس‌ها وجود دارد.همچنین می‌توان رویدادهایی را به تقویم اضافه و یا حذف کرد.',
        techs: ['React', 'vite', 'MUI', 'Supabase', 'i18next', 'react-hook-form', 'lodash', 'fullcalendar'],
        image: '/img/projects/adminDashboard.png',
        preview : 'https://admin-dashboard-alpha-five-14.vercel.app',
        github: 'https://github.com/mahya-rastegarii/Admin-Dashboard.git',
      },
      {
        id:3,
        titleEn: 'Movie Site',
        titleFa: 'سایت فیلم و سریال',
        descriptionEn: 'A movie and TV series platform with advanced filtering and search capabilities by genre, country, release year, and rating. Users can also leave comments on each title and add movies or series to their favorites list.',
        descriptionFa: 'یک پلتفرم فیلم و سریال با قابلیت‌های پیشرفته فیلتر و جستجو براساس ژانر، کشور، سال تولید و امتیاز. کاربران همچنین می‌توانند روی هر فیلم یا سریال نظر ثبت کنند و فیلم و سریال مورد علاقه‌ی خود را به لیست علاقه‌مندی‌ها اضافه کنند',
        techs: ['React', 'vite', 'redux-toolkit', 'redux-persist', 'supabase', 'lodash', 'swiper',  'TailwindCss' ],
        image: '/img/projects/movieSite.png',
        preview : 'https://movie-site-topaz.vercel.app',
        github: 'https://github.com/mahya-rastegarii/movieSite.git',
      },
    ];


    export async function GET(){
        return NextResponse.json(projects)
    }