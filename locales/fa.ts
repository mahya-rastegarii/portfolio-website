export default {
    myName: "محیا رستگاری",

    resumeButton: "دانلود رزومه",
    socialMedia: {
        github: "گیت هاب",
        linkedin: "لینکدین",
        telegram: "تلگرام",
    },
     
    menu: {
      homeLabel: "صفحه اصلی",
      aboutLabel: "درباره من",
      projectsLabel: "پروژه های من",
      contactLabel: "تماس با من"
    },

    dashboard: {
      skill : {
        skill1: "توسعه دهنده فرانت اند",
        skill2:  "توسعه دهنده React"
      },
        aboutMe:  " عاشق یادگیری و تجربه کردن چیزای جدیدم دوست دارم پروژه‌هام هم کاربردی باشن، هم حس خوبی به کاربر بدن. با پشتکار و علاقه، هر چالشی برام یه فرصت جدیده"
      


    },

   aboutMe: {
     title: "درباره من",
     tabs: {
       tab1: "درباره من",
      tab2: "مهارت ها",
      tab3: "تحصیلات",
     }
   },

   projects: {
    title: "پروژه های من",

      error: {
        title: "خطا در بارگذاری پروژه ها",
        btn: "بارگذاری مجدد"
      },
      notification: {
        error: "در بارگذاری پروژه ها مشکلی پیش آمده است"
      }
   },

   contactMe: {
    title: "ارتباط با من",

    notification: {
      success: "پیام با موفقیت ارسال شد",
      error: "خطا در ارسال پیام لطفا مجددا تلاش کنید",
     },

     label : {
       name: "نام شما",
       email: "ایمیل شما",
       subject: "موضوع",
       message: "پیام"
     },

     submitBtn: {
      title: "ارسال پیام",
      submittingTitle: "در حال ارسال...",

    },

    message: {
      nameRequired: "لطفا نام خود را وارد کنید",
      emailRequired: "لطفا ایمیل خود را وارد کنید",
      emailPattern: "فرمت ایمیل صحیح نیست",
      subjectRequired: "لطفا موضوع ایمیل خود را وارد کنید",
      messageRequired: "لطفا پیام خود را وارد کنید",
    },

   },

   error : {
    title: "یه مشکلی پیش اومده",
    description: "به نظر می‌رسه چیزی درست کار نمی‌کنه. لطفاً یه بار دیگه تلاش کن یا بعداً برگرد",
       btn: "بارگذاری مجدد"
  },


   notFound: {
    title: "صفحه موردنظر یافت نشد",
    btn: "رفتن به صفحه اصلی"
   }
  } as const