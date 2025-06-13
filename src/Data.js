const allProducts = [
  {
    id: 1,
    name: `کراتین کوین لورون`,
    price: 2_000_000,
    img: "./../Images/Products/2.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/2-2.webp",
      },
    ],
    categury: "creatin",
    taste: [],
    // "qty" : 1
  },
  {
    id: 2,
    name: "کراتین رونی کلمن",
    price: 2_750_000,
    img: "./../Images/Products/1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/1-1.webp",
      },
    ],
    categury: "creatin",
    taste: [],

  },
  {
    id: 3,
    name: "کراتین اپلاید",
    price: 3_250_000,
    img: "./../Images/Products/3.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/3-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/3-3.webp",
      },
    ],
    categury: "creatin",
    taste: [],


  },
  {
    id: 4,
    name: "پروتعین وی اپلاید 3 کیلویی",
    price: 4_000_000,
    img: "./../Images/Products/4.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/4-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/4-3.webp",
      },

    ],
    taste: [
      { id: 1, title: " توت فرنگی", status: '1' },
      { id: 2, title: "  کیک بلوبری", status: '0' },
      { id: 3, title: " پاپ کورن ", status: '1' },
      { id: 4, title: " کارامل ", status: "1" },
      { id: 5, title: " کاکائو ", status: "1" },
      { id: 6, title: "   وانیلی", status: '0' },
      { id: 7, title: "  کیک هویج", status: '0' }
    ],
  },
  {
    id: 5,
    name: "گلوتامین ماسلتک",
    price: 825_000,
    img: "./../Images/Products/5.webp",
    img: "./../Images/Products/5.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/5.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/5-1.webp",
        taste: []
      },

    ],
  },
  {
    id: 6,
    name: "کراتین مونوهیدرات ماسلتک",
    img: "./../Images/Products/8-2.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/8-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/8-3.webp",
      },
      {
        id: 3,
        img: "./../Images/Products/8-1.webp",
      },
    ],
    categury: "creatin",
    taste : [],


  },
  {
    id: 7,
    name: "گینر رول وان کیسه ای ",
    price: 5_490_000,
    img: "./../Images/Products/10-1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/10-1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/10-2.webp",
      },
    ],
    categury: "gainer",
    taste : [],
    "qty" : 1

  },
  {
    id: 8,
    name: " قرص هورمون رشد یونیورسال جی اچ مکس ",
    price: 3_290_000,
    img: "./../Images/Products/12-1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/12-1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/12-2.webp",
      },
    ],
    categury: "Growth hormone",
    taste : [],

  },
];

const allCategury = [
  { id: 1, name: "پروتئین وی", img: "./Images/Categury/1.webp" , link : "/categuryByProducts/protein"},
  { id: 2, name: "آمینواسید ها", img: "./Images/Categury/5.webp" , link : "/categuryByProducts/amino"},
  { id: 3, name: "گینر", img: "./Images/Categury/3.webp" , link : "/categuryByProducts/gainer"},
  { id: 4, name: "کربو مس ", img: "./Images/Categury/4.webp" , link : "/categuryByProducts/carbomas"},
  { id: 5, name: "کراتین", img: "./Images/Categury/6.webp" , link : "/categuryByProducts/ceratin"},
  { id: 6, name: "تست بوستر", img: "./Images/Categury/11.webp" , link : "/categuryByProducts/testboaster"},
  { id: 7, name: "گلوتامین", img: "./Images/Categury/8.webp" , link : "/categuryByProducts/glotamin"},
  { id: 8, name: "مولتی ویتامین", img: "./Images/Categury/12.webp" , link : "/categuryByProducts/moltivitamin"},
  { id: 9, name: "بی سی ای ای", img: "./Images/Categury/2.png" , link : "/categuryByProducts/bcaa"},
  { id: 10, name: "پروتئین وی ", img: "./Images/Categury/1.webp" , link : "/categuryByProducts/protein"},
];

const preSellProducts = [
  {
    id: 1,
    name: `کراتین کوین لورون`,
    price: 2_000_000,
    img: "./../Images/Products/2.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/2-2.webp",
      },
    ],
    taste : [],
    qty : 1

  },
  {
    id: 2,
    name: "کراتین رونی کلمن",
    price: 2_750_000,
    img: "./../Images/Products/1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/1-2.webp",
      },
    ],
    taste : [],
    qty : 1

  },
  {
    id: 3,
    name: "کراتین اپلاید",
    price: 3_250_000,
    img: "./../Images/Products/3.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/3-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/3-3.webp",
      },
    ],
    taste : [],
    qty : 1


  },
  {
    id: 4,
    name: "پروتعین وی اپلاید 3 کیلویی",
    price: 4_000_000,
    img: "./../Images/Products/4.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/4.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/4-2.webp",
      },
      {
        id: 3,
        img: "./../Images/Products/4-3.webp",
      },
    ],
    taste: [
      { id: 1, title: " آدامس بادکنکی", status: '1' },
      { id: 2, title: "  کیک بلوبری", status: '0' },
      { id: 3, title: " تافی پاپ کورن ", status: '1' },
      { id: 4, title: "  بستنی وانیلی", status: '0' },
      { id: 5, title: " کارامل " },
      { id: 6, title: "  کیک هویج", status: '0' }
    ],
    qty : 1

  },
  {
    id: 5,
    name: "گلوتامین ماسلتک",
    price: 825_000,
    img: "./../Images/Products/5.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/5.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/5-2.webp",
      },

    ],
    taste : [],
    qty : 1


  },
  {
    id: 6,
    name: "کراتین مونوهیدرات ماسلتک 1.5 کیلویی",
    img: "./../Images/Products/8-2.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/8-2.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/8-3.webp",
      },
    ],
    taste : [],
    qty : 1


  },
  {
    id: 7,
    name: "گینر رول وان کیسه ای ",
    price: 5_490_000,
    img: "./../Images/Products/10-1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/10-1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/10-2.webp",
      },
    ],
    taste : [],
    qty : 1


  },
  {
    id: 8,
    name: " قرص هورمون رشد یونیورسال جی اچ مکس ",
    price: 3_290_000,
    img: "./../Images/Products/12-1.webp",
    subImg: [
      {
        id: 1,
        img: "./../Images/Products/12-1.webp",
      },
      {
        id: 2,
        img: "./../Images/Products/12-2.webp",
      },
    ],
    taste : [],
    qty : 1


  },
];

const allBrandLogo = [
  {
    id: 1,
    img: "./Images/logo/1.webp",
    name: "cevinlevron",
    title: "کوین لورون | KEVIN LEVRONE",
    desc: "معرفی برند مکمل کوین لورون امریکا : کوین لورون یک بدنساز حرفه ای IFBB است و به عنوان یکی از جذاب ترین و با استعداد ترین ورزشکاران در تمام دوران ها شناخته می شود. طی سال های گذشته ، سری محصولات تغذیه ورزشی Levrone Signature Series در سراسر اروپا راه افتاده و به سرعت رد پای خود را در بسیاری از کشورهای جهان گسترش داده است. مکمل های کمپانی کوین لورون امریکا و توزیع کننده لهستان مجموعه ای از فرمول های پیشرفته مبتنی بر عملکرد هستند که همه با استفاده از بهترین مواد تشکیل دهنده و دقیق ترین استانداردهای کنترل کیفیت تولید شده اند. لوورون ، یک بار دیگر ، مصمم بود که خط تولید محصولات تغذیه ای ورزشی را برای هر کسی که قصد دارد قدرت افسانه ای ، عضله ، قدرت ، استقامت و رسیدن به بالاترین سطح آمادگی .جسمانی و زیبایی ظاهری را داشته باشد ، ت",
    products: [
      {
        id: 1,
        img: "./Images/cevinlevron/1.webp",
        price: "258000",
        name: "کراتین کوین لورون",
      },
      {
        id: 2,
        img: "./Images/cevinlevron/2.webp",
        price: "365000",
        name: "کراتین کوین لورون",
      },
      {
        id: 3,
        img: "./Images/cevinlevron/3.webp",
        price: "2200000",
        name: "کراتین کوین لورون",
      },
      {
        id: 4,
        img: "./Images/cevinlevron/4.webp",
        price: "780000",
        name: "کراتین کوین لورون",
      },
      {
        id: 5,
        img: "./Images/cevinlevron/5.webp",
        price: "4500000",
        name: "کراتین کوین لورون",
      },
    ],
  },
  {
    id: 2,
    img: "./Images/logo/2.webp",
    name: "on",
    title: "اپتیموم نوتریشن | Optimum Nutrition",
    desc: " این کمپانی از همان ابتدا به دلیل کیفیت بالا محصولات تولیدی خود مطرح شد و در مدت زمان کوتاهی به یکی از برند های پر فروش در این صنعت بزرگ تبدیل شد ، به مرور زمان گستره محصولات خود را افزایش داد و توانست بخش بزرگی از این صنعت را در اختیار بگیرد .پروتئین وی گلد استاندرارد اپتیموم نوتریشن طی سال های متوالی جزو پرفروش ترین مکمل های پروتئینی در دنیا محسوب میشود و این نشانه کیفیت بالا و رضایت مصرف کننده است کمپانی Optimum Nutrition در سال ۱۹۸۶ در امریکا تاسیس شد",
    products: [
      {
        id: 1,
        img: "./Images/onnotritions/1.webp",
        name: "مس گینر",
        price: 2500000,
      },
      {
        id: 2,
        img: "./Images/onnotritions/2.webp",
        name: "آمینو 2222",
        price: 3650000,
      },
      {
        id: 3,
        img: "./Images/onnotritions/3.webp",
        name: "مس گینر 3.5 کیلویی",
        price: 850000,
      },
      {
        id: 4,
        img: "./Images/onnotritions/4.webp",
        name: "پروتعین وی ایزوله ",
        price: 9850000,
      },
      {
        id: 5,
        img: "./Images/onnotritions/5.webp",
        name: "کراتین مونوهیدرات",
        price: 2500000,
      },
    ],
  },
  {
    id: 3,
    img: "./Images/logo/3.webp",
    name: "applaid",
    title: "اپلاید نوتریشن | Applied Nutrition",
    desc: "Applied Nutrition دارای گواهینامه های متعدد استاندارد مواد غذایی (BRC ، ISO۲۲۰۰۰ ، GMP ، Informed Sport و Halal Trust) را دریافت کرده است و این نشان می دهد که این کمپانی چقدر علاقه به کیفیت و ساخت محصولاتی دارید که مورد اعتماد ورزشکاران در سراسر جهان هستیم کمپانی Applied Nutrition ، یک چشم انداز دارد – “تبدیل شدن به معتبرترین برند تغذیه ورزشی جهان” در نتیجه تلاش بی وقفه برای رسیدن به کمال ، Applied Nutrition انقلابی را آغاز کرده است ، نحوه مصرف مکمل ورزشی ،طعم و مزه آن و مهمتر از همه ، چگونه به شما در عملکرد کمک می کند!",
    products: [
      {
        id: 1,
        img: "./Images/applied/1.webp",
        name: "مس گینر 2.5 کیلویی اپلاید",
        price: 5500000,
      },
      {
        id: 2,
        img: "./Images/applied/2.webp",
        name: "مس گینر 5 کیلویی اپلاید",
        price: 12000000,
      },
      {
        id: 3,
        img: "./Images/applied/3.webp",
        name: "ایزو ویی اپلاید",
        price: 3600000,
      },
      {
        id: 4,
        img: "./Images/applied/4.webp",
        name: "لآمینو اپلاید",
        price: 5000000,
      },
      {
        id: 5,
        img: "./Images/applied/5.webp",
        name: "bcaa اپلاید",
        price: 4200000,
      },
    ],
  },
  {
    id: 4,
    img: "./Images/logo/4.webp",
    name: "bpi",
    title: "بی پی آی | BPI SPORTS",
    desc: "کمپانی بزرگ و مطرح bpi sports یکی از غول ها در صعنت مکمل های غذایی میباشد .این کمپانی امریکایی به تمام مشتریان خود این اطمینان را میدهد که محصولی با بالاترین کیفیت و خلوص را در اختیارشان قرار میدهد . شعار کمپانی بزرگ بی پی ای این است که (بهترین محصول را بسازید ، پشت آنچه می سازید بایستیدبرند BPI ، مخفف Be Powerful Incorporated ، یعنی با قدرت همراه باشید .کمپانی مکمل BPI Sports یک مورد یک برند نوظهور در بازار مکمل های ورزشی است با این وجود به سرعت به یکی از کمپانی های برجسته در این زمینه تبدیل شده است .دفتر مرکزی کمپانی بی پی ای اسپورت در جنوب فلوریدا اکنون بیش از ۵۳،۰۰۰ فوت مربع را شامل می شود و در حال رشد است.در مجاورت فضای اداری یک سالن ورزشی BPI کاملاً تجاری است که برای ورزشکاران و اعضای تیم خود ساخته است .",
    products: [
      { id: 1, img: "./Images/bpi/1.webp", name: "بست کراتین", price: 2500000 },
      { id: 2, img: "./Images/bpi/2.webp", name: "ایزو HD", price: 6850000 },
      { id: 3, img: "./Images/bpi/3.webp", name: "MRK", price: 3600000 },
      { id: 4, img: "./Images/bpi/4.webp", name: "بست آمینو", price: 4500000 },
      { id: 5, img: "./Images/bpi/5.webp", name: "کراتین CLA", price: 2650000 },
    ],
  },
  {
    id: 5,
    img: "./Images/logo/5.webp",
    name: "museltech",
    title: "ماسل تک / MuscleTech",
    desc: "شرکت ماسل تک آمریکا فعالیت خود را در سال ۱۹۹۵ میلادی در زمینه تولید مکمل های غذایی و ورزشی با کیفیت و متنوع آغاز نمود و ظرف مدت کمتر از ۳ سال به یکی از تخصصی ترین و برترین برندهای تولیدکننده مکمل های بدنسازی در سرتاسر جهان تبدیل شد .یکی از اصلی ترین وجه های تمایز شرکت ماسل تک نسبت به سایر شرکت های تولید کننده مکمل های ورزشی، توجه راسخ این برند به علم و پژوهش می باشد .امروزه ماسل تچ Muscletech بیش از یک دهه است که نمادی از بهترین و والاترین کیفیت می باشد . اگر فقط بخواهیم چندتایی از محصولات معروف ماسل تک را نام ببریم این لیست شامل کراتین سل تک ( Cell-Tech )، کربو پروتئین مس تک ( Mass-Tech ) ، پروتئین وی نیترو تچ ( Nitro-Tech ) ، پروتئین فاز ۸ ( Phase ۸ ) ، چربی سوز هیدروکس کات ( Hydroxycut ) ، پمپاژ خون نانو ویپور ( Nano Vapor ) ، پمپ عضله شاتر اس ایکس سون ( Shatter SX ۷ ) ، عضله ساز آنابولیک هالو ( Anabolic Halo ) ، آمینو بیلد ( Amino Build ) می باشد .",
    products: [
      {
        id: 1,
        img: "./Images/muscletech/1.webp",
        name: "مولتی ویتامین",
        price: 1500000,
      },
      { id: 2, img: "./Images/muscletech/2.webp", name: "fv", price: 3650000 },
      {
        id: 3,
        img: "./Images/muscletech/3.webp",
        name: "کراتین سلتک",
        price: 3560000,
      },
      {
        id: 4,
        img: "./Images/muscletech/4.webp",
        name: "کلیر ماسل",
        price: 5000000,
      },
      {
        id: 5,
        img: "./Images/muscletech/5.webp",
        name: "آمینو بیلد",
        price: 3257000,
      },
    ],
  },
  {
    id: 6,
    img: "./Images/logo/6.webp",
    name: "nutrex",
    title: "ناترکس | Nutrex Research",
    desc: "معرفی برند Nutrex Research امریکا :کمپانی Nutrex Research ، در سال ۲۰۰۲ تاسیس شده ، همیشه به ارائه محصولات پیشرفته در صنعت بهداشت و تناسب اندام اختصاص یافته است. ناترکس با بیش از ۱۶ سال تجربه ، متعهد هست که از طریق نوآوری و محصولات با کیفیت ، تمام جنبه های صنعت تناسب اندام را پوشش دهد . ناترکس در خط مقدم سلامتی و عملکرد ورزشی ایستاده است . کمپانی ناترکس اولین شرکت سازنده مکمل کپسول های مایع بود . در حالی که کمپانی های دیگر مشغول تلاش برای کپی کردن فرمول موفقیت آمیز کپسول مایع Nutrex  بودند . کمپانی مکمل ناترکس سطح بعدی با توسعه کپسول های چند فاز مایع، که دو کپسول در یک است. چربی سوزهای این کمپانی باعث معروف شدن Nutrex شد ، اما سازمان آن به گسترش آن در سراسر جهان تناسب اندام کمک کرده است. ناترکس ریسرچ یک کمپانی بر پایه جدید ترین تحقیقات علمی در صتعت مکمل های غذایی و تناسب اندام است که در نتیجه برترین و موثر ترین محصولات در جهت بهبود وضعیت بدنی روانه بارار کرده اند",
    products: [
      { id: 1, img: "./Images/nutrex/1.webp", name: "آرژنین", price: 2500000 },
      {
        id: 2,
        img: "./Images/nutrex/2.webp",
        name: "HMB اچ ام بی",
        price: 3650000,
      },
      {
        id: 3,
        img: "./Images/nutrex/3.webp",
        name: "پروتعین وی ایزوله",
        price: 638000,
      },
      {
        id: 4,
        img: "./Images/nutrex/4.webp",
        name: "لیپو سیکس",
        price: 550000,
      },
      { id: 5, img: "./Images/nutrex/5.webp", name: "لیپو سون", price: 966000 },
    ],
  },
];

const allArticles = [
  {
    id: 1,
    title: "قرص امگا 3 برای چیست؟ فواید تا زمان مصرف",
    img: "./Images/Articles/1.webp",
    disc: "اسیدهای چرب امگا 3 بخش مهمی از رژیم غذایی انسان هستند و نقش بسیار حیاتی در سیستم‌های مختلف بدن ایفا می‌کنند. خواص شگفت‌انگیز امگا 3 سبب می‌شود برخی افراد بخواهند از قرص امگا 3 در کنار یک رژیم غذایی م",
  },
  {
    id: 2,
    title: "تفاوت آمینو پودری و قرصی چیست؟",
    img: "./Images/Articles/2.webp",
    disc: "بدنسازان و ورزشکاران برای بهبود عملکرد تمرینی خود و گرفتن نتایج بهتر، از مکمل‌های ورزشی مختلفی استفاده می‌کنند",
  },
  {
    id: 3,
    title: "همه چیز درباره ملاتونین ",
    img: "./Images/Articles/3.webp",
    disc: "بدن شگفت‌انگیز ما به طور مداوم در حال تولید هورمون‌های مختلف و مواد موردنیازمان است. هر یک از این مواد تولید شده در بدن نقش مهمی را در حفظ هماهنگی و کارکرد درست تمام ارگان‌ها ایفا می‌کنند. ملاتونین ی...",
  },
  {
    id: 4,
    title: "عوارض و فواید روزه‌ برای ورزشکاران ",
    img: "./Images/Articles/4.webp",
    disc: "اگر ورزشکار هستید و دوست دارید بدانید روزه‌گرفتن در ماه رمضان چه فواید و عوارضی برایتان به همراه دارد تا انتهای این مقاله از سم سون شاپ همراه ما باشید...",
  },
  {
    id: 5,
    title: "بهترین کراتین ترکیبی برای حجم",
    img: "./Images/Articles/5.webp",
    disc: "کراتین ترکیبی، به‌عنوان یک فرم پیشرفته‌تر از کراتین، ترکیبی از انواع مختلف کراتین و سایر مواد مغذی است که به افزایش جذب و اثربخشی آن کمک می‌کند...",
  },
];
const papularSearchesInwebsite = [
  { id: 1, title: "کراتین" },
  { id: 2, title: "گینر" },
  { id: 3, title: "پمپ" },
  { id: 4, title: "ماسلتک" },
  { id: 5, title: "اپلاید" },
  { id: 6, title: "وی" },
];

const RelatedProducts = [
  {
    id: 1,
    name: `کراتین کوین لورون`,
    price: 2_000_000,
    img: "./../Images/Products/1.webp",
  },
  {
    id: 2,
    name: "کراتین رونی کلمن",
    price: 2_750_000,
    img: "./../Images/Products/2.webp",
  },
  {
    id: 3,
    name: "کراتین اپلاید",
    price: 3_250_000,
    img: "./../Images/Products/3.webp",
  },
  {
    id: 4,
    name: "پروتعین وی اپلاید 3 کیلویی",
    price: 4_000_000,
    img: "./../Images/Products/4.webp",
  },
  {
    id: 5,
    name: "کراتین ماسلتک",
    price: 825_000,
    img: "./../Images/Products/5.webp",
  },
  { id: 6, name: "کراتین مونوهیدرات ماسلتک", img: "./Images/Products/6.webp" },
  {
    id: 7,
    name: "مس گینر",
    price: 67_500_000,
    img: "./../Images/Products/7.webp",
  },
];

const DataFrequentlyAskedQuestions = [
  {id : 1 , qustion : "کدام مکمل برای افزایش حجم و وزن بهتر است؟"  , answer : "گینر و کراتین بهترین مکمل‌ها برای افزایش حجم و وزن هستند."},
  {id : 2 , qustion : "بهترین مکمل برای سوزاندن چربی و کاهش وزن چیست؟"  , answer : "بهترین مکمل برای کاهش وزن چربی‌سوز است."},
  {id : 3 , qustion : "آیا مصرف مکمل‌های بدنسازی عوارضی دارد؟", answer : "مصرف بیش از توصیه شده امکان آسیب دارد. "},
  {id : 4 , qustion : "آیا مکمل‌هایی که در فروشگاه محمدی به فروش می‌رسند اصل و قابل اعتماد هستند؟"  , answer : "بله همه مکمل‌ها وارداتی هستند و به صورت اورجینال ارائه می‌شوند."},
  {id : 5 , qustion : "آیا مکمل‌های بدنسازی امکان بازگشت و مرجوعی دارند؟"  , answer : "بله درصورتی که پلمپ محصول باز نشده باشد."},
]

const TitleCategury = [
  "پیش فرض",
  "پرفروش ترین",
  "پر بازدید ترین",
  "جدید ترین",
  "گران ترین",
]

export {
  allCategury,
  RelatedProducts,
  allProducts,
  preSellProducts,
  allBrandLogo,
  allArticles,
  papularSearchesInwebsite,
  DataFrequentlyAskedQuestions,
  TitleCategury
};
