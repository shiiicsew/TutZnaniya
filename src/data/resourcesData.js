// Данные о ресурсах для каждого предмета
export const resourcesData = {
  '3': { // Математический анализ
    title: 'Математический анализ',
    description: 'Курс математического анализа для студентов технических специальностей. Включает в себя основы дифференциального и интегрального исчисления, теорию рядов и дифференциальных уравнений.',
    type: 'Курс',
    subject: 'Математика',
    tags: ['математика', 'анализ', 'высшая математика'],
    author: {
      name: 'Погодина Ю.А.',
      avatar: '/images/avatar.jpg',
      role: 'Преподаватель'
    },
    uploadDate: '2024-03-15',
    downloads: 1234,
    rating: 4.8,
    materials: {
      pdf: [
        {
          id: 1,
          title: 'В. А. Зорич Математический Анализ',
          type: 'pdf',
          path: '/materials/math/pdf/В. А. Зорич Математический Анализ.pdf'
        },
        {
          id: 2,
          title: 'К. Н. Гурьянова МАТЕМАТИЧЕСКИЙ АНАЛИЗ',
          type: 'pdf',
          path: '/materials/math/pdf/К. Н. Гурьянова МАТЕМАТИЧЕСКИЙ АНАЛИЗ.pdf'
        },
        {
          id: 3,
          title: 'А.П.Господариков Начало математического анализа',
          type: 'pdf',
          path: '/materials/math/pdf/А.П.Господариков Начало математического анализа.pdf'
        },
        {
          id: 4,
          title: 'В. И. Белоусова Высшая математика Учебное пособие',
          type: 'pdf',
          path: '/materials/math/pdf/В. И. Белоусова Высшая математика Учебное пособие.pdf'
        }
      ],
      presentations: [
        {
          id: 1,
          title: 'Введение в математический анализ',
          type: 'ppt',
          path: '/materials/math/presentation/Введение_в_математический_анализ.ppt'
        }
      ],
      cheatsheets: [
        {
          id: 1,
          title: 'Формулы интегралов',
          type: 'img',
          path: '/materials/math/img/Формулы интегралов.jpg'
        },
        {
          id: 2,
          title: 'Формулы пределов',
          type: 'img',
          path: '/materials/math/img/Формулы пределов.jpg'
        }
      ],
      videos: [
        {
          id: 1,
          title: 'Математический анализ - Основные понятия',
          type: 'video',
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=-154631231&id=456239187&hd=2" width="640" height="360" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        }
      ]
    }
  },
  '4': { // Линейная алгебра
    id: "4",
    title: "Линейная алгебра",
    description: "Курс линейной алгебры и аналитической геометрии. Изучение матриц, определителей, систем линейных уравнений, векторных пространств и линейных преобразований.",
    type: "Курс",
    subject: "Математика",
    tags: ["математика", "линейная алгебра", "аналитическая геометрия"],
    author: {
      name: "Самаров Е.К.",
      avatar: "/images/teachers/teacher4.jpg",
      role: "Преподаватель"
    },
    uploadDate: "2024-03-15",
    downloads: 856,
    rating: 4.7,
    materials: {
      pdf: [
        {
          id: "lineal_pdf_1",
          title: "Е.М. Карчевский, М.М. Карчевский Лекции по линейной алгебре и аналитической геометрии",
          path: "/materials/lineal algebra/pdf/Е.М. Карчевский, М.М. Карчевский Лекции по линейной алгебре и аналитической геометрии.pdf"
        },
        {
          id: "lineal_pdf_2",
          title: "Л.И. Магазинников, А.Л. Магазинникова Линейная алгебра Аналитическая геометрия",
          path: "/materials/lineal algebra/pdf/Л.И. Магазинников, А.Л. Магазинникова Линейная алгебра Аналитическая геометрия.pdf"
        }
      ],
      presentations: [],
      cheatsheets: [
        {
          id: "lineal_img_1",
          title: "Виды матриц",
          path: "/materials/lineal algebra/img/Виды матриц.png"
        },
        {
          id: "lineal_img_2",
          title: "Производные функций",
          path: "/materials/lineal algebra/img/Производные функций.png"
        }
      ],
      videos: [
        {
          id: "lineal_video_1",
          title: "Основные задачи линейной алгебры",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=-91031095&id=456242831&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        },
        {
          id: "lineal_video_2",
          title: "Линейная алгебра: матрицы и их практическое применение",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=-145052891&id=456246724&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        }
      ]
    }
  },
  '6': { // Операционные системы
    id: "6",
    title: "Операционные системы",
    description: "Курс по операционным системам охватывает основные концепции, архитектуру и принципы работы современных операционных систем. Студенты изучают процессы, потоки, управление памятью, файловые системы и другие ключевые аспекты.",
    type: "Курс",
    subject: "Информационные технологии",
    tags: ["ОС", "Системное программирование", "Процессы", "Память"],
    author: {
      name: "Исаева Г. Н.",
      avatar: "/images/teachers/teacher6.jpg",
      role: "Преподаватель"
    },
    uploadDate: "2024-03-15",
    downloads: 156,
    rating: 4.8,
    materials: {
      pdf: [
        {
          id: "os_pdf_1",
          title: "Зверева, О. М. Операционные системы учебное пособие",
          path: "/materials/os/pdf/Зверева, О. М. Операционные системы учебное пособие.pdf"
        },
        {
          id: "os_pdf_2",
          title: "С. И. МАКАРЕНКО ОПЕРАЦИОННЫЕ СИСТЕМЫ И ОБОЛОЧКИ",
          path: "/materials/os/pdf/С. И. МАКАРЕНКО ОПЕРАЦИОННЫЕ СИСТЕМЫ И ОБОЛОЧКИ.pdf"
        },
        {
          id: "os_pdf_3",
          title: "Кондратьев В.К. ОПЕРАЦИОННЫЕ СИСТЕМЫ И ОБОЛОЧКИ",
          path: "/materials/os/pdf/Кондратьев В.К. ОПЕРАЦИОННЫЕ СИСТЕМЫ И ОБОЛОЧКИ.pdf"
        }
      ],
      presentations: [
        {
          id: "os_pres_1",
          title: "Операционные системы",
          path: "/materials/os/presentation/Операционные системы.pptx"
        }
      ],
      cheatsheets: [
        {
          id: "os_img_1",
          title: "Таблица, функции, компоненты ОС",
          path: "/materials/os/img/Таблица, функции, компоненты ОС.jpg"
        }
      ],
      videos: []
    }
  },
  '5': { // Управление качеством
    id: "5",
    title: "Управление качеством",
    description: "Курс по управлению качеством продукции и услуг. Изучение методов обеспечения качества, стандартизации, сертификации и управления качеством на предприятии.",
    type: "Курс",
    subject: "Менеджмент",
    tags: ["качество", "менеджмент", "стандартизация"],
    author: {
      name: "Попова Ю.С.",
      avatar: "/images/teachers/teacher5.jpg",
      role: "Преподаватель"
    },
    uploadDate: "2024-03-15",
    downloads: 678,
    rating: 4.5,
    materials: {
      pdf: [
        {
          id: "quality_pdf_1",
          title: "Гродзенский С.Я. Управление качеством",
          path: "/materials/quality/pdf/Гродзенский С.Я. Управление_качеством_У_2021.pdf"
        },
        {
          id: "quality_pdf_2",
          title: "Салимова Т. А. Управление",
          path: "/materials/quality/pdf/Салимова Т. А. Управление.pdf"
        }
      ],
      presentations: [
        {
          id: "quality_pres_1",
          title: "Сущность и содержание управления качеством",
          path: "/materials/quality/presentation/Сущность и содержание управления качеством.ppt"
        },
        {
          id: "quality_pres_2",
          title: "Системы качества по международным стандартам ИСО серии 9000",
          path: "/materials/quality/presentation/Системы_качества_по_международным_стандартам_ИСО_серии_9000.ppt"
        }
      ],
      cheatsheets: [],
      videos: [
        {
          id: "quality_video_1",
          title: "Управление качеством - Основные понятия",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=15611596&id=456239182&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        }
      ]
    }
  },
  '1': { // Искусственный интеллект
    id: "1",
    title: "Искусственный интеллект",
    description: "Курс по основам искусственного интеллекта и машинного обучения. Изучение нейронных сетей, алгоритмов машинного обучения, обработки данных и практического применения ИИ.",
    type: "Курс",
    subject: "Информационные технологии",
    tags: ["ИИ", "машинное обучение", "нейронные сети", "анализ данных"],
    author: {
      name: "Штрафина Е.Д.",
      avatar: "/images/teachers/teacher1.jpg",
      role: "Преподаватель"
    },
    uploadDate: "2024-03-15",
    downloads: 432,
    rating: 4.9,
    materials: {
      pdf: [
        {
          id: "ai_pdf_1",
          title: "Введение в машинное обучение",
          path: "/materials/ai/pdf/Введение_в_МО.pdf"
        }
      ],
      presentations: [],
      cheatsheets: [
        {
          id: "ai_img_1",
          title: "Нейронная сеть",
          path: "/materials/ai/img/Нейронная сеть.png"
        },
        {
          id: "ai_img_2",
          title: "Проверка концепции",
          path: "/materials/ai/img/Проверка концепции.jpg"
        },
        {
          id: "ai_img_3",
          title: "Перцептрон",
          path: "/materials/ai/img/Перцептрон.png"
        }
      ],
      videos: [
        {
          id: "ai_video_1",
          title: "Искусственный интеллект - Основные концепции",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=-17733403&id=456239263&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        },
        {
          id: "ai_video_2",
          title: "Машинное обучение - Практическое применение",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=-84585194&id=456239058&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        },
        {
          id: "ai_video_3",
          title: "Нейронные сети - Архитектура и обучение",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=-161840409&id=456240245&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        }
      ]
    }
  },
  '2': { // Философия
    id: "2",
    title: "Философия",
    description: "Курс по основам философии, включающий изучение основных философских концепций, школ и направлений. Рассмотрение ключевых проблем философии и их влияния на развитие науки и общества.",
    type: "Курс",
    subject: "Гуманитарные науки",
    tags: ["философия", "история философии", "метафизика", "эпистемология"],
    author: {
      name: "Гусева И.И.",
      avatar: "/images/teachers/teacher2.jpg",
      role: "Преподаватель"
    },
    uploadDate: "2024-03-15",
    downloads: 567,
    rating: 4.7,
    materials: {
      pdf: [
        {
          id: "phil_pdf_1",
          title: "Методическое пособие по курсу Основы философии",
          path: "/materials/philosophy/pdf/Методическое пособие по курсу Основы философии.pdf"
        }
      ],
      presentations: [
        {
          id: "phil_pres_1",
          title: "Философия, ее предмет, функции и роль в обществе",
          path: "/materials/philosophy/presentation/Философия, ее предмет, функции и роль в обществе.ppt"
        },
        {
          id: "phil_pres_2",
          title: "Средневековая западноевропейская философия",
          path: "/materials/philosophy/presentation/Средневековая западноевропейская философия.pptx"
        },
        {
          id: "phil_pres_3",
          title: "Философия предмет и метод исследования",
          path: "/materials/philosophy/presentation/Философия предмет и метод исследования.pdf"
        }
      ],
      cheatsheets: [],
      videos: [
        {
          id: "phil_video_1",
          title: "Философия - Введение в предмет",
          embed: '<iframe src="https://vkvideo.ru/video_ext.php?oid=4680181&id=456240765&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
        }
      ]
    }
  }
}; 