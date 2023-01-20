const tempNews = [
  {
    date: "08-10-2022T23:02:11+03:00",
    name: "Елена Романова3",
    description:
      'Друзья! У меня есть очень юный телеграм-канал, который ждёт своих подписчиков!   Вчера я там запустила проект "Сказки на ночь" (это для взрослых), каждый вечер буду публиковать сказки,       читаю их я, может, вы оцените....',
    images: [
      {
        image: "https://thumbs.dreamstime.com/b/%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%B3%D1%80%D1%83%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B0%D0%B5%D1%82-%D0%B3%D1%80%D1%83%D1%81%D1%82%D0%BD%D0%BE%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%BD%D1%83%D1%8E-153800546.jpg",
      },
      {
        image: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/319/179/6.jpg",
      },
      {
        image: "https://w-dog.ru/wallpapers/14/3/476417582809897/sergej-andrejchenko-ded-starik-muzhik-ushanka-zvezda-sneg.jpg",
      },
      {
        image: "https://www.e-xecutive.ru/uploads/article/image/1990772/thumb_Irina_Travkina_executive_ru.jpg",
      },
      
    ],
    id: 1,
  },
  {
    date: "09-10-2021T23:02:11+03:00",
    name:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    images: [
      {
        image: "https://w-dog.ru/wallpapers/14/3/476417582809897/sergej-andrejchenko-ded-starik-muzhik-ushanka-zvezda-sneg.jpg",
      },
      {
        image: "https://www.e-xecutive.ru/uploads/article/image/1990772/thumb_Irina_Travkina_executive_ru.jpg",
      },
    ],
    id: 2,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    name: "Елена Романова2",
    description: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    id: 3,
  },
  {
    date: "10-10-2022T22:02:11+03:00",
    name: "Елена Романова1",
    description: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    images: [
      {
        image: "https://w-dog.ru/wallpapers/14/3/476417582809897/sergej-andrejchenko-ded-starik-muzhik-ushanka-zvezda-sneg.jpg",
      },
    ],
    id: 4,
  },
  {
    date: "09-10-2022T23:02:11+03:00",
    name:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    images: [
    ],
    id: 5,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    name: "Елена Романова2",
    description: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    id: 6,
  },
  {
    date: "10-10-2022T22:02:11+03:00",
    name: "Елена Романова1",
    description: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    id: 7,
  },
  {
    date: "09-10-2022T23:02:11+03:00",
    name:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    images: [
      {
        image: "https://w-dog.ru/wallpapers/14/3/476417582809897/sergej-andrejchenko-ded-starik-muzhik-ushanka-zvezda-sneg.jpg",
      },
    ],
    id: 8,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    name: "Елена Романова2",
    description: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    id: 9,
  },
  {
    date: "10-10-2022T22:02:11+03:00",
    name: "Елена Романова1",
    description: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    id: 10,
  },
  {
    date: "09-10-2022T23:02:11+03:00",
    name:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    id: 11,
  }
];

export default tempNews;
