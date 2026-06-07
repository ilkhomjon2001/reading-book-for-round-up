import { EnglishLesson } from '../types';

export const curatedLessons: EnglishLesson[] = [
  {
    id: 'lesson_1',
    title: '1-bo\'lim: The Alphabet (Alifbo)',
    topic: 'The Alphabet (Ingliz alifbosi)',
    grammarOverview: 'Ingliz tili alifbosida 26 ta harf bor: 5 ta unli (A, E, I, O, U) va 21 ta undosh harflar. Har bir harfning o\'z talaffuzi va so\'zlarda o\'ziga xos tovushi bor.',
    story: {
      title: 'Adam’s Garden Adventure',
      content: 'Adam is in the garden. He sees a big red apple. "Look!" he says. He plays with a ball and a cute cat looks at his doll. Oh, be careful! An egg is near a green frog. Adam drinks water from a glass. He puts on his hat. An Indian boy brings some jam. In the sky, a kite flies high. A lemon is on the table. Adam looks at his nose in the mirror. He sees an onion and a pen. A queen is in a book. It starts to rain. Adam sees a star and a train. He opens his umbrella and goes to a van. He looks at his watch, puts it in a box, and dreams of the yo-yo at the zoo.'
    },
    vocabulary: [
      {
        word: 'apple',
        partOfSpeech: 'noun',
        translation: 'olma',
        definition: 'A round fruit with red, green, or yellow skin.',
        example: 'He sees a big red apple.'
      },
      {
        word: 'garden',
        partOfSpeech: 'noun',
        translation: 'bog\'',
        definition: 'An area of land next to a house for growing plants.',
        example: 'Adam is in the garden.'
      },
      {
        word: 'mirror',
        partOfSpeech: 'noun',
        translation: 'ko\'zgu',
        definition: 'A piece of glass that reflects images.',
        example: 'Adam looks at his nose in the mirror.'
      },
      {
        word: 'zoo',
        partOfSpeech: 'noun',
        translation: 'hayvonot bog\'i',
        definition: 'A place where many kinds of wild animals are kept.',
        example: 'He dreams of the yo-yo at the zoo.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Adam bog\'da qanday mevalarni ko\'rdi?',
        options: ['Apple (Olma)', 'Banana (Banan)', 'Peach (Shaftoli)', 'Strawberry (Qulupnay)'],
        correctAnswer: 'Apple (Olma)',
        explanation: 'Matnda: "He sees a big red apple." (U katta qizil olma ko\'rdi) deyilgan.'
      },
      {
        id: 2,
        question: 'Yomg\'ir yoqqanda u nima qildi?',
        options: [
          'Uyga yugurdi (Ran home)',
          'Soyabonini ochdi va vanga ketdi (Opened umbrella and went to a van)',
          'Daraxt tagiga yashirindi (Hid under tree)',
          'Yig\'ladi (Cried)'
        ],
        correctAnswer: 'Soyabonini ochdi va vanga ketdi (Opened umbrella and went to a van)',
        explanation: 'Matnda: "It starts to rain... He opens his umbrella and goes to a van." deyilgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'Which of the following is a vowel (unli harf)?',
        options: ['B', 'M', 'E', 'T'],
        correctAnswer: 'E',
        hint: 'Ingliz tilida unli harflar: A, E, I, O, U.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Fill in the blank of alphabet letters: A, B, C, _ , E',
        options: ['F', 'D', 'G', 'H'],
        correctAnswer: 'D',
        hint: 'Alifboda C harfidan keyin D keladi.'
      }
    ]
  },
  {
    id: 'lesson_2',
    title: '2-bo\'lim: A - An (Noaniq artikllar)',
    topic: 'A / An Articles',
    grammarOverview: 'Unli tovush bilan boshlanadigan birlikdagi otlar oldidan "an" (an apple, an elephant, an orange), undosh tovush bilan boshlanadigan so\'zlar oldidan esa "a" (a zebra, a cow, a bird) qo\'yiladi.',
    story: {
      title: 'The Great Animal Picture',
      content: 'Wow! Look at the picture! There is a zebra and an elephant. I see an ant and a cow on the grass. Oh, look! An ostrich is very big, but a bird is small. Is that an octopus? No, it is a fish. I have an apple in my bag. When it rains, I use an umbrella. In the sky, I see an insect and a kite. It is fun to see an owl at night!'
    },
    vocabulary: [
      {
        word: 'elephant',
        partOfSpeech: 'noun',
        translation: 'fil',
        definition: 'A very large grey animal with a long trunk.',
        example: 'There is a zebra and an elephant.'
      },
      {
        word: 'ostrich',
        partOfSpeech: 'noun',
        translation: 'tuyaqush',
        definition: 'A very large bird that runs quickly but cannot fly.',
        example: 'An ostrich is very big.'
      },
      {
        word: 'octopus',
        partOfSpeech: 'noun',
        translation: 'sakkizoyoq',
        definition: 'A sea creature with a soft body and eight long arms.',
        example: 'Is that an octopus?'
      },
      {
        word: 'umbrella',
        partOfSpeech: 'noun',
        translation: 'soyabon',
        definition: 'An object used to protect you from rain.',
        example: 'When it rains, I use an umbrella.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Matnda qaysi hayvonlar "an" artikli bilan ishlatilgan?',
        options: [
          'Zebra, cow, bird',
          'Elephant, ant, ostrich, octopus, owl',
          'Lion, dolphin, kangaroo',
          'Cat, dog, puppy'
        ],
        correctAnswer: 'Elephant, ant, ostrich, octopus, owl',
        explanation: 'Matnda shunday yozilgan: "an elephant", "an ant", "an ostrich", "an octopus", va "an owl".'
      },
      {
        id: 2,
        question: '"Umbrella" so\'zi oldidan nima uchun "an" qo\'yildi?',
        options: [
          'Uzoqda bo\'lgani uchun',
          'Rangli bo\'lgani uchun',
          'Chunki u unli "u" tovushi bilan boshlanadi',
          'Chunki u kichik narsa'
        ],
        correctAnswer: 'Chunki u unli "u" tovushi bilan boshlanadi',
        explanation: '"Umbrella" so\'zi unli tovush bilan boshlanganligi bois oldiga "an" qo\'yiladi.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'I have got ___ orange in my bag.',
        options: ['a', 'an', 'the', 'some'],
        correctAnswer: 'an',
        hint: '"Orange" so\'zi unli "o" harfi bilan boshlanadi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'I see ___ beautiful zebra in the picture.',
        options: ['a', 'an', 'the', 'any'],
        correctAnswer: 'a',
        hint: '"Beautiful" undosh tovush "b" bilan boshlanadi.'
      }
    ]
  },
  {
    id: 'lesson_3',
    title: '3-bo\'lim: Numbers (Sonlar)',
    topic: 'Numbers 1-100',
    grammarOverview: 'Ingliz tilida sonlar birlik (one, two...), o\'nliklar (-ty, masalan: thirty, forty, fifty) va yuzliklar (one hundred) shakllarida bo\'ladi. Misol uchun: 15 - fifteen, 50 - fifty.',
    story: {
      title: 'Counting at the Giant Zoo',
      content: 'Welcome to the Giant Zoo! Today we count everything. I see one lion and two zebras. There are ten birds and fifteen frogs. Look at the insects! I can count thirty ants and forty bees. In the big lake, there are fifty fish and sixty small stones. On the hill, there are seventy flowers and eighty trees. Can you see the stars at night? There are ninety bright stars and one hundred tiny lights. The zoo is very big!'
    },
    vocabulary: [
      {
        word: 'count',
        partOfSpeech: 'verb',
        translation: 'sanamoq',
        definition: 'To say numbers in order.',
        example: 'Today we count everything.'
      },
      {
        word: 'insect',
        partOfSpeech: 'noun',
        translation: 'hashorat',
        definition: 'A small creature with six legs.',
        example: 'Look at the insects!'
      },
      {
        word: 'hill',
        partOfSpeech: 'noun',
        translation: 'tepalik',
        definition: 'An area of land that is higher than the land around it.',
        example: 'On the hill, there are seventy flowers.'
      },
      {
        word: 'star',
        partOfSpeech: 'noun',
        translation: 'yulduz',
        definition: 'A bright point of light in the night sky.',
        example: 'Can you see the stars at night?'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Ko\'lda nechta baliq bor ekan?',
        options: ['Thirty fish (30)', 'Forty fish (40)', 'Fifty fish (50)', 'Sixty fish (60)'],
        correctAnswer: 'Fifty fish (50)',
        explanation: 'Matnda: "In the big lake, there are fifty fish" deb ochiq aytilgan.'
      },
      {
        id: 2,
        question: 'Matnda sakson va to\'qson sonlari ingliz tilida qanday yozilgan?',
        options: ['Eight and nine', 'Eighteen and nineteen', 'Eighty and ninety', 'Eighty and nineteen'],
        correctAnswer: 'Eighty and ninety',
        explanation: 'Matnda: "eighty trees" (80) va "ninety bright stars" (90) deb yozilgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'Which number is eighty-five?',
        options: ['15', '85', '58', '98'],
        correctAnswer: '85',
        hint: '"Eighty" = 80, va "five" = 5, birgalikda 85 qiladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Choose the correct spelling for 15:',
        options: ['Fiveteen', 'Fifteen', 'Fifty', 'Fivetyn'],
        correctAnswer: 'Fifteen',
        hint: 'O\'smirlar soni "-teen" bilan tugaydi va 15 "fifteen" bo\'ladi.'
      }
    ]
  },
  {
    id: 'lesson_4',
    title: '4-bo\'lim: Plurals (Ko\'plik formasi)',
    topic: 'Plural Nouns (Otlar ko\'pligi)',
    grammarOverview: 'Otlar ko\'plikda odatda "-s" oladi (cats, trees). "-ch, -sh, -x, -s" bilan tugasa "-es" oladi (watches, boxes). "-y" undoshdan keyin kelsa "-ies" bo\'ladi (lorry -> lorries). Ba\'zi otlar esa noto\'g\'ri otlar bo\'lib, shaklini butkul o\'zgartiradi (man -> men, child -> children, mouse -> mice, tooth -> teeth, foot -> feet).',
    story: {
      title: 'A Beautiful Day in the Park',
      content: 'The park is full of life! Many children are playing. Two men and three women are waiting for the buses. Look! Yellow lorries are on the road. A man has two watches. In the garden, I see red tomatoes and beautiful flowers. Oh, no! Look at the mice! They have very sharp teeth. The babies are happy with their toys. They have small feet.'
    },
    vocabulary: [
      {
        word: 'children',
        partOfSpeech: 'noun',
        translation: 'bolalar',
        definition: 'More than one child.',
        example: 'Many children are playing.'
      },
      {
        word: 'lorry',
        partOfSpeech: 'noun',
        translation: 'yuk mashinasi',
        definition: 'A large truck for carrying things.',
        example: 'Yellow lorries are on the road.'
      },
      {
        word: 'mice',
        partOfSpeech: 'noun',
        translation: 'sichqonlar',
        definition: 'The plural of mouse.',
        example: 'Oh, no! Look at the mice!'
      },
      {
        word: 'teeth',
        partOfSpeech: 'noun',
        translation: 'tishlar',
        definition: 'More than one tooth.',
        example: 'They have very sharp teeth.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: '"Mice" so\'zi qaysi so\'zning ko\'pligi va u yerda nimalar bor?',
        options: [
          'Cat so\'zining ko\'pligi va mushuklar bor',
          'Mouse so\'zining ko\'pligi va u yerda sichqonlar bor (ularning o\'tkir tishlari bor)',
          'Man so\'zining ko\'pligi va u yerda erkaklar bor',
          'Baby so\'zining ko\'pligi va chaqaloqlar bor'
        ],
        correctAnswer: 'Mouse so\'zining ko\'pligi va u yerda sichqonlar bor (ularning o\'tkir tishlari bor)',
        explanation: 'Mice - "mouse" (sichqon) so\'zining ko\'plik shaklidir. "Oh, no! Look at the mice! They have very sharp teeth." deb yozilgan.'
      },
      {
        id: 2,
        question: '"Lorries" va "watches" so\'zlarining oxiridagi qo\'shimchalarga e\'tibor bering. Avtobusda necha kishi bor?',
        options: [
          'Hech kim yo\'q',
          'Bitta odam bor',
          'Besh kishi bor (2 ta erkak va 3 ta ayol avtobus kutmoqda)',
          'O\'n besh kishi bor'
        ],
        correctAnswer: 'Besh kishi bor (2 ta erkak va 3 ta ayol avtobus kutmoqda)',
        explanation: 'Matnda: "Two men and three women are waiting for the buses." ya\'ni 5 ta kishi avtobus kutyapti deb yozilgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'What is the plural form of "child"?',
        options: ['childs', 'childes', 'children', 'childrens'],
        correctAnswer: 'children',
        hint: '"Child" noto\'g\'ri birlikdir, ko\'pligi "children" bo\'ladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Look at those yellow ___ on the road.',
        options: ['lorry', 'lorrys', 'lorries', 'lorryes'],
        correctAnswer: 'ies',
        hint: '"Lorry" so\'zining oxirida y harfi bo\'lgani uchun u -ies ga aylanadi: "lorries".'
      }
    ]
  },
  {
    id: 'lesson_5',
    title: '5-bo\'lim: Personal Pronouns (Kishilik olmoshlari)',
    topic: 'Personal Pronouns (Kishilik olmoshlari)',
    grammarOverview: 'Kishilik olmoshlari otlarning o\'rniga ishlatiladi: I (men), You (sen/siz), He (u - o\'g\'il bola), She (u - qiz bola), It (u - jonsiz narsa/hayvon), We (biz), They (ular).',
    story: {
      title: 'Tom and Mary Meet New Friends',
      content: 'Tom: "Hello! I am Tom. Who are you?" Mary: "Hi! I am Mary. You are my new friend." Tom: "Look at that boy. He is Alex. He is very funny." Mary: "And look at Linda. She is a student. She is kind." Tom: "Look at the cat. It is Fluffy. It is a cat." Mary: "Look! We are all friends now." Tom: "Yes! And look at those people. They are our teachers."'
    },
    vocabulary: [
      {
        word: 'funny',
        partOfSpeech: 'adjective',
        translation: 'kulgili',
        definition: 'Making people laugh.',
        example: 'He is very funny.'
      },
      {
        word: 'kind',
        partOfSpeech: 'adjective',
        translation: 'mehribon',
        definition: 'Nice and helpful.',
        example: 'She is kind.'
      },
      {
        word: 'student',
        partOfSpeech: 'noun',
        translation: 'talaba, o\'quvchi',
        definition: 'A person who is studying at school.',
        example: 'Linda is a student.'
      },
      {
        word: 'teacher',
        partOfSpeech: 'noun',
        translation: 'o\'qituvchi',
        definition: 'A person who teaches pupils.',
        example: 'They are our teachers.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Tom Alex haqida gapirganda qaysi olmoshni ishlatdi?',
        options: ['She', 'It', 'They', 'He'],
        correctAnswer: 'He',
        explanation: 'Tom Alexni (o\'g\'il bola) ko\'rsatganda "He is Alex. He is very funny." deb gapirdi.'
      },
      {
        id: 2,
        question: 'Mushuk (Fluffy) uchun qaysi olmosh tanlandi?',
        options: ['She', 'It', 'He', 'We'],
        correctAnswer: 'It',
        explanation: 'Hayvon Fluffy haqida gashirganda "It is Fluffy." deb "It" olmoshi tanlandi.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'My mother is beautiful. ___ is a dancer.',
        options: ['He', 'She', 'It', 'They'],
        correctAnswer: 'She',
        hint: 'Onam (Ayol kishi) uchun "She" ishlatamiz.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Tom and Mary say: "___ are all friends now!"',
        options: ['I', 'You', 'We', 'They'],
        correctAnswer: 'We',
        hint: '"Tom and Mary" o\'zlari haqida "We" (Biz) deb gapirishadi.'
      }
    ]
  },
  {
    id: 'lesson_6',
    title: '6-bo\'lim: The verb \'to be\' (Am/Is/Are)',
    topic: 'The verb "to be"',
    grammarOverview: 'To be (bo\'lmoq) fe\'li gapda holatni ifodalaydi. Bo\'lishli shakli: I am, He/She/It is, We/You/They are. Bo\'lishsiz shakli uchun "not" qo\'shiladi (I am not, she is not/isn\'t, they are not/aren\'t). So\'roq shaklida to be fe\'li gap boshiga chiqadi.',
    story: {
      title: 'Our Happy Family Roles',
      content: 'I am a pupil. I am not a teacher. My mother is a dancer. She is beautiful. My father is a firefighter. He is not a pilot. We are a happy family. Are they doctors? No, they are not. They are football players. They are very fast!'
    },
    vocabulary: [
      {
        word: 'pupil',
        partOfSpeech: 'noun',
        translation: 'o\'quvchi',
        definition: 'A student in school.',
        example: 'I am a pupil.'
      },
      {
        word: 'firefighter',
        partOfSpeech: 'noun',
        translation: 'o\'t o\'chiruvchi',
        definition: 'A person who puts out fires.',
        example: 'My father is a firefighter.'
      },
      {
        word: 'dancer',
        partOfSpeech: 'noun',
        translation: 'raqqosa',
        definition: 'A person who dances.',
        example: 'My mother is a dancer.'
      },
      {
        word: 'pilot',
        partOfSpeech: 'noun',
        translation: 'uchuvchi',
        definition: 'A person who flies a plane.',
        example: 'He is not a pilot.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Hikoya qiluvchining otasi qaysi kasb egasi?',
        options: ['Dancer (Raqqosa)', 'Firefighter (O\'t o\'chiruvchi)', 'Pilot (Uchuvchi)', 'Doctor (Shifokor)'],
        correctAnswer: 'Firefighter (O\'t o\'chiruvchi)',
        explanation: 'Matnda keltirilgan: "My father is a firefighter."'
      },
      {
        id: 2,
        question: 'Onasi haqida gapirganda "is" ishlatildimi yoki "are"?',
        options: ['Are', 'Is', 'Am', 'Be'],
        correctAnswer: 'Is',
        explanation: 'Onasi (ayol kishi - she) uchun to\'g\'ri shakl: "My mother is a dancer."'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'We ___ a happy family.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'are',
        hint: '"We" (Biz) olmoshiga har doim "are" mos keladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: '___ they doctors? No, they are not.',
        options: ['Am', 'Is', 'Are', 'Be'],
        correctAnswer: 'Are',
        hint: '"They" uchun so\'roq shaklida "Are they...?" ko\'rinishida bo\'ladi.'
      }
    ]
  },
  {
    id: 'lesson_7',
    title: '7-bo\'lim: This/These - That/Those (Ko\'rsatkich olmoshlari)',
    topic: 'Demonstratives (Ko\'rsatkich olmoshlari)',
    grammarOverview: 'Yaqindagi bitta narsaga: This, ko\'p narsaga: These. Uzoqdagi bitta narsaga: That, ko\'p narsaga: Those ishlatiladi.',
    story: {
      title: 'Looking at Things Near and Far',
      content: 'Look! This is my hat and these are my boots. I like them! Now, look over there! That is a tiger and those are zebras. Can you see? This is a yellow skirt in my hand, but that is a red dress on the wall. Those are beautiful birds in the sky!'
    },
    vocabulary: [
      {
        word: 'boots',
        partOfSpeech: 'noun',
        translation: 'etiklar',
        definition: 'Shoes that cover your feet and lower legs.',
        example: 'These are my boots.'
      },
      {
        word: 'tiger',
        partOfSpeech: 'noun',
        translation: 'yo\'lbars',
        definition: 'A large wild cat with orange and black stripes.',
        example: 'That is a tiger.'
      },
      {
        word: 'skirt',
        partOfSpeech: 'noun',
        translation: 'yubka',
        definition: 'A piece of clothing that hangs from the waist.',
        example: 'This is a yellow skirt in my hand.'
      },
      {
        word: 'wall',
        partOfSpeech: 'noun',
        translation: 'devor',
        definition: 'The side of a room.',
        example: 'That is a red dress on the wall.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Bola qo\'lidagi yubka (skirt) haqida gapirganda qaysi so\'zni ishlatdi?',
        options: ['These', 'That', 'This (chunki yaqin va bitta)', 'Those'],
        correctAnswer: 'This (chunki yaqin va bitta)',
        explanation: 'Qo\'lidagi (yaqin) va bitta yubka uchun "This" ishlatiladi: "This is a yellow skirt in my hand."'
      },
      {
        id: 2,
        question: 'Uzoqdagi zebralarni ko\'rsatish uchun nima deyilishi kerak?',
        options: ['This is a zebra', 'Those are zebras (chunki uzoq va ko\'p)', 'These are zebras', 'That is zebras'],
        correctAnswer: 'Those are zebras (chunki uzoq va ko\'p)',
        explanation: 'Uzoqda turingan ko\'p zebralarni ko\'rsatib "those are zebras" deyilgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'Look at ___ high white cloud far away in the sky!',
        options: ['this', 'that', 'these', 'those'],
        correctAnswer: 'that',
        hint: 'Uzoqdagi bitta bulut uchun "that" mos keladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'I have got ___ shiny yellow rings right here in my hand.',
        options: ['this', 'that', 'these', 'those'],
        correctAnswer: 'these',
        hint: 'Yaqindagi va ko\'p bo\'lgan uzuklar uchun "these" mos keladi.'
      }
    ]
  },
  {
    id: 'lesson_8',
    title: '8-bo\'lim: \'Have / Have got\' (Egalik fe\'li)',
    topic: 'Have got / Has got',
    grammarOverview: 'Egalikni bildirish uchun "have got" (I, We, You, They) yoki "has got" (He, She, It) ishlatiladi. Negativida: "haven\'t got" yoki "hasn\'t got" deyiladi.',
    story: {
      title: 'All the Treasures We Have Got',
      content: 'I have got a new bike. It is blue. My sister has got long hair and big eyes. She is very pretty. We have got a computer and a radio in our house. My dog has got a small nose and a big mouth. I haven\'t got a car, but I have a fast yo-yo!'
    },
    vocabulary: [
      {
        word: 'computer',
        partOfSpeech: 'noun',
        translation: 'kompyuter',
        definition: 'An electronic machine used for work or play.',
        example: 'We have got a computer.'
      },
      {
        word: 'pretty',
        partOfSpeech: 'adjective',
        translation: 'chiroyli, suluv',
        definition: 'Beautiful or very nice to see.',
        example: 'She is very pretty.'
      },
      {
        word: 'mouth',
        partOfSpeech: 'noun',
        translation: 'og\'iz',
        definition: 'The part of the face used for eating and speaking.',
        example: 'My dog has got a big mouth.'
      },
      {
        word: 'yo-yo',
        partOfSpeech: 'noun',
        translation: 'yo-yo o\'yinchoq',
        definition: 'A toy that goes up and down on a string.',
        example: 'I have a fast yo-yo.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Qizchaning tashqi ko\'rinishi (sochi va ko\'zlari) qanday ekan?',
        options: [
          'Kalta soch va kichik ko\'zlar',
          'Uzun soch va katta ko\'zlar (She is very pretty)',
          'Sariq soch va qora ko\'zlar',
          'Qisqa soch va ko\'k ko\'zlar'
        ],
        correctAnswer: 'Uzun soch va katta ko\'zlar (She is very pretty)',
        explanation: 'Matnda: "My sister has got long hair and big eyes." deb yozilgan.'
      },
      {
        id: 2,
        question: 'Bolada mashina bormi?',
        options: [
          'Ha, bolada mashina bor (He has a car)',
          'Yo\'q, u mashina olmagan, lekin unda tezyurar yo-yo bor (haven\'t got a car)',
          'Ha, uning katta yuk mashinasi bor',
          'Bilmayman'
        ],
        correctAnswer: 'Yo\'q, u mashina olmagan, lekin unda tezyurar yo-yo bor (haven\'t got a car)',
        explanation: 'Matnda: "I haven\'t got a car, but I have a fast yo-yo!" deb aytilgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'Jenny ___ a long golden key.',
        options: ['have got', 'has got', 'having got', 'is got'],
        correctAnswer: 'has got',
        hint: '"Jenny" (She) uchun "has got" ishlatiladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'They ___ any pencils in their bags.',
        options: ['hasn\'t got', 'haven\'t got', 'not got', 'no got'],
        correctAnswer: 'haven\'t got',
        hint: '"They" uchun inkor shakli "haven\'t got" hisoblanadi.'
      }
    ]
  },
  {
    id: 'lesson_9',
    title: '9-bo\'lim: There is / There are (Bor/Mavjud)',
    topic: 'There is / There are',
    grammarOverview: '"There is" (birlik uchun) va "There are" (ko\'plik uchun) biror joyda narsalarning borligini bildiradi. So\'roq shakli: Is there...? / Are there...?',
    story: {
      title: 'Inside My Room and Garden',
      content: 'In my room, there is a big bed. There are two chairs and a desk. Look! There is a ball on the floor. In the garden, there are many trees and flowers. There is a small cat under the chair. There are birds in the sky.'
    },
    vocabulary: [
      {
        word: 'desk',
        partOfSpeech: 'noun',
        translation: 'yozuv stoli',
        definition: 'A table used for studying or writing.',
        example: 'There are two chairs and a desk.'
      },
      {
        word: 'floor',
        partOfSpeech: 'noun',
        translation: 'pol',
        definition: 'The flat surface that you stand on inside a room.',
        example: 'There is a ball on the floor.'
      },
      {
        word: 'trees',
        partOfSpeech: 'noun',
        translation: 'daraxtlar',
        definition: 'Tall plants with wooden trunks and leaves.',
        example: 'There are many trees and flowers.'
      },
      {
        word: 'garden',
        partOfSpeech: 'noun',
        translation: 'bog\'',
        definition: 'A green space outside a house.',
        example: 'In the garden, there are many trees.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Xonada nechta stul bor ekan?',
        options: ['Bitta stul (One)', 'Ikkita stul (Two)', 'Uchta stul (Three)', 'Stul yo\'q'],
        correctAnswer: 'Ikkita stul (Two)',
        explanation: 'Matnda: "There are two chairs and a desk." deb aniq ko\'rsatilgan.'
      },
      {
        id: 2,
        question: 'Mushukcha qayerda turibdi?',
        options: [
          'Stol ustida (on the desk)',
          'Stul tagida (under the chair)',
          'Eshik ortida (behind the door)',
          'Osmonda (in the sky)'
        ],
        correctAnswer: 'Stul tagida (under the chair)',
        explanation: 'Matnda: "There is a small cat under the chair." deb yozilga.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: '___ many bright stars in the sky tonight.',
        options: ['There is', 'There are', 'Is there', 'Are there'],
        correctAnswer: 'There are',
        hint: '"Stars" ko\'plikda bo\'lganligi uchun "There are" bo\'ladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: '___ a little green caterpillar on that leaf?',
        options: ['There is', 'There are', 'Is there', 'Are there'],
        correctAnswer: 'Is there',
        hint: 'Suroq shaklida va bitta hashorat bo\'lgani uchun "Is there...?" ishlatiladi.'
      }
    ]
  },
  {
    id: 'lesson_10',
    title: '10-bo\'lim: \'Can\' (Qobiliyat)',
    topic: 'Can / Can\'t',
    grammarOverview: '"Can" qobiliyatni (biror ishni qila olishni), "can\'t / cannot" esa qila olmaslikni bildiradi. Masalan: A bird can fly. A fish cannot fly.',
    story: {
      title: 'Amazing Animal Talents',
      content: 'I love animals! A fish can swim, but it can\'t fly. A kangaroo can jump very high. Look at the bird! It can fly in the sky. I can clap my hands and I can dance. Can you sing? Yes, I can. But I can\'t fly like a bird. Splash! The dolphin can swim too!'
    },
    vocabulary: [
      {
        word: 'swim',
        partOfSpeech: 'verb',
        translation: 'suzmoq',
        definition: 'To move through water.',
        example: 'A fish can swim.'
      },
      {
        word: 'jump',
        partOfSpeech: 'verb',
        translation: 'sakramoq',
        definition: 'To push yourself into the air using your feet.',
        example: 'A kangaroo can jump very high.'
      },
      {
        word: 'clap',
        partOfSpeech: 'verb',
        translation: 'qarsak chalmoq',
        definition: 'To hit your hands together to make a sound.',
        example: 'I can clap my hands.'
      },
      {
        word: 'dolphin',
        partOfSpeech: 'noun',
        translation: 'delfin',
        definition: 'A friendly and smart sea animal.',
        example: 'The dolphin can swim too!'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Baliq nima qila oladi-yu, nima qila olmaydi?',
        options: [
          'Suza oladi lekin ucha olmaydi (Can swim but can\'t fly)',
          'Yugura oladi lekin suza olmaydi',
          'Sakra oladi va rasm chiza oladi',
          'Gapira oladi lekin suza olmaydi'
        ],
        correctAnswer: 'Suza oladi lekin ucha olmaydi (Can swim but can\'t fly)',
        explanation: 'Matnda: "A fish can swim, but it can\'t fly." deb aniq yozilgan.'
      },
      {
        id: 2,
        question: 'Bola qo\'llari bilan nima qila olishini aytdi?',
        options: [
          'Rasm chiza oladi',
          'O\'yinchoq yasay oladi',
          'Qarsak chala oladi (can clap my hands)',
          'Daraxtga chiqa oladi'
        ],
        correctAnswer: 'Qarsak chala oladi (can clap my hands)',
        explanation: 'U: "I can clap my hands and I can dance." deb aytgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'A little puppy ___ fly like a bird.',
        options: ['can', 'can\'t', 'is', 'are'],
        correctAnswer: 'can\'t',
        hint: 'Kuchukchalar ucha olmaydi.'
      },
      {
        id: 2,
        type: 'choice',
        question: '___ you jump high like a kangaroo?',
        options: ['Are', 'Is', 'Can', 'Have'],
        correctAnswer: 'Can',
        hint: 'Qobiliyat so\'rash uchun gap boshida "Can" ishlatiladi.'
      }
    ]
  },
  {
    id: 'lesson_11',
    title: '11-bo\'lim: Possessives (Egalik olmoshlari va \'s)',
    topic: 'Possessives (\'s and Possessive Pronouns)',
    grammarOverview: 'Egalik olmoshlari kimningdir narsasini bildiradi: My (mening), Your (sening), His (uning - o\'g\'il bola), Her (uning - qiz bola), Its (uning - jonsiz/hayvon), Our (bizning), Their (ularning). Bo\'g\'lovchi "\'s" esa biror shaxsga qarashlilikni bildiradi: Jenny\'s sister (Jennining singlisi).',
    story: {
      title: 'Our Family Members\' Things',
      content: 'This is Jenny\'s sister. Her name is Sarah. Look at my dog. Its name is Spot. This is Alex\'s bike. It is his favorite toy. This is Marcie\'s computer. Our family is very happy. Their cat is very small.'
    },
    vocabulary: [
      {
        word: 'sister',
        partOfSpeech: 'noun',
        translation: 'singil, opa',
        definition: 'A girl or woman with the same parents.',
        example: 'This is Jenny\'s sister.'
      },
      {
        word: 'favorite',
        partOfSpeech: 'adjective',
        translation: 'sevimli',
        definition: 'The one you like best.',
        example: 'It is his favorite toy.'
      },
      {
        word: 'small',
        partOfSpeech: 'adjective',
        translation: 'kichkina, mittigina',
        definition: 'Little in size.',
        example: 'Their cat is very small.'
      },
      {
        word: 'family',
        partOfSpeech: 'noun',
        translation: 'oila',
        definition: 'A group of people related to each other.',
        example: 'Our family is very happy.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Jennining singlisining ismi nima?',
        options: ['Jenny', 'Sarah (Jennining singlisi)', 'Marcie', 'Linda'],
        correctAnswer: 'Sarah (Jennining singlisi)',
        explanation: 'Matnda ochiq-oydin yozilgan: "This is Jenny\'s sister. Her name is Sarah."'
      },
      {
        id: 2,
        question: 'Alexning velosipedi haqida gapirganda qaysi egalik olmoshi (his/her) ishlatildi?',
        options: ['Her', 'His (chunki Alex o\'g\'il bola)', 'Its', 'Our'],
        correctAnswer: 'His (chunki Alex o\'g\'il bola)',
        explanation: '"This is Alex\'s bike. It is his favorite toy." deyilgan. O\'g\'il bolaga nisbatan "his" qo\'llaniladi.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'This is Lilly___ clever map of stars.',
        options: ['\'s', 's\'', 'is', 'are'],
        correctAnswer: '\'s',
        hint: 'Lillining xaritasi egaligini bildirish uchun "\'s" qo\'shish lozim.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'The dog Spot waves ___ fluffy tail.',
        options: ['his', 'her', 'its', 'their'],
        correctAnswer: 'its',
        hint: 'Hayvon/it uchun egalik olmoshi "its" bo\'ladi.'
      }
    ]
  },
  {
    id: 'lesson_12',
    title: '12-bo\'lim: The Imperative (Buyruq mayli)',
    topic: 'The Imperative (Buyruq gaplar)',
    grammarOverview: 'Buyruq yoki iltimos gaplarda fe\'l egasiz to\'g\'ridan-to\'g\'ri birinchi bo\'lib boshlanadi. Masalan: Sit down (O\'tir), Open your books (Kitoblaringizni oching). Inkor buyruq uchun "Don\'t" ishlatiladi: Don\'t run (Yugurma).',
    story: {
      title: 'Rules in the Teacher’s Classroom',
      content: 'Welcome to the classroom! Please, sit down. Open your book and read. Listen to the teacher. Don\'t run in the class! Don\'t eat your jam here. Be quiet and write your name. Study hard, children!'
    },
    vocabulary: [
      {
        word: 'quiet',
        partOfSpeech: 'adjective',
        translation: 'tinch, sokin',
        definition: 'Making very little or no noise.',
        example: 'Be quiet and write your name.'
      },
      {
        word: 'read',
        partOfSpeech: 'verb',
        translation: 'o\'qimoq',
        definition: 'To look at written words and understand them.',
        example: 'Open your book and read.'
      },
      {
        word: 'write',
        partOfSpeech: 'verb',
        translation: 'yozmoq',
        definition: 'To make letters or words on paper.',
        example: 'Write your name.'
      },
      {
        word: 'classroom',
        partOfSpeech: 'noun',
        translation: 'sinfxona',
        definition: 'A room where children learn.',
        example: 'Welcome to the classroom!'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Sinfda nima qilish taqiqlangan (don\'t)?',
        options: [
          'O\'qish va yozish turlari',
          'Tinch o\'tirish',
          'Yugurish va murabbo yeyish (don\'t run and don\'t eat jam)',
          'O\'qituvchini eshitish'
        ],
        correctAnswer: 'Yugurish va murabbo yeyish (don\'t run and don\'t eat jam)',
        explanation: 'Keltirilgan taqiqlar: "Don\'t run in the class! Don\'t eat your jam here."'
      },
      {
        id: 2,
        question: 'Kitob bilan bog\'liq qanday buyruq berildi?',
        options: [
          'Kitobni berib yubor (Give the book)',
          'Uni qutiga sol (Put in box)',
          'Kitobingni och va o\'qi (Open your book and read)',
          'Uni yirtma (Don\'t tear)'
        ],
        correctAnswer: 'Kitobingni och va o\'qi (Open your book and read)',
        explanation: 'Matnda: "Open your book and read." (Kitobingizni oching va o\'qing) deb buyurilgan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: '___ eat chocolate in the library, please!',
        options: ['Not', 'No', 'Don\'t', 'Doesn\'t'],
        correctAnswer: 'Don\'t',
        hint: 'Inkor buyruq yaratishda gap doim "Don\'t" bilan boshlanadi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Please, ___ quietly and write your name.',
        options: ['sitting', 'sits', 'sit', 'to sit'],
        correctAnswer: 'sit',
        hint: 'Sodda buyruq maylidagi fe\'l qo\'shimchalarsiz keladi.'
      }
    ]
  },
  {
    id: 'lesson_13',
    title: '13-bo\'lim: Present Continuous (Hozirgi davomiy zamon)',
    topic: 'Present Continuous',
    grammarOverview: 'Ayni vaqtda yuz berayotgan harakatlarni ifodalash uchun Present Continuous ishlatiladi. Formula: am/is/are + fe\'l + -ing (Masalan: are playing, is eating, am reading).',
    story: {
      title: 'A Busy Moving Afternoon in the Park',
      content: 'It is a beautiful day! The sun is shining. The children are playing in the park. Look! I am reading a book now. My friend is eating an apple. We are having fun. The birds are singing. Everything is moving!'
    },
    vocabulary: [
      {
        word: 'shining',
        partOfSpeech: 'verb (continuous)',
        translation: 'porlayotgan',
        definition: 'Giving out bright light.',
        example: 'The sun is shining.'
      },
      {
        word: 'playing',
        partOfSpeech: 'verb (continuous)',
        translation: 'o\'ynayotgan',
        definition: 'Doing things for fun or play.',
        example: 'The children are playing.'
      },
      {
        word: 'singing',
        partOfSpeech: 'verb (continuous)',
        translation: 'kuylayotgan',
        definition: 'Making musical sounds with the voice.',
        example: 'The birds are singing.'
      },
      {
        word: 'moving',
        partOfSpeech: 'verb (continuous)',
        translation: 'harakatlanayotgan',
        definition: 'Changing place or position.',
        example: 'Everything is moving!'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Hozirgi vaqtda quyosh nima qilyapti?',
        options: [
          'Bulut ortiga yashirinyapti darsda',
          'Porlamoqda (The sun is shining)',
          'Yomg\'ir po\'p qilmoqda',
          'Oftob qoraymoqda'
        ],
        correctAnswer: 'Porlamoqda (The sun is shining)',
        explanation: 'Matnda birinchi gaplarda: "The sun is shining." deb aytilgan.'
      },
      {
        id: 2,
        question: 'Do\'sti nima yeyapti?',
        options: ['Olma yeyapti (eating an apple)', 'Banan yeyapti', 'Anor yeyapti', 'Apelsin yeyapti'],
        correctAnswer: 'Olma yeyapti (eating an apple)',
        explanation: 'Paragrafda yozilgan: "My friend is eating an apple."'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'Look! The little birds ___ some sweet songs in the cage.',
        options: ['is singing', 'are singing', 'sings', 'singing'],
        correctAnswer: 'are singing',
        hint: '"Birds" ko\'plikda bo\'lgani uchun "are singing" ishlatiladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'At this moment, I ___ a book about wild zebras.',
        options: ['is reading', 'am reading', 'are reading', 'reads'],
        correctAnswer: 'am reading',
        hint: '"I" olmoshidan keyin to be shakli "am" + fe\'l-ing keladi.'
      }
    ]
  },
  {
    id: 'lesson_14',
    title: '14-bo\'lim: Present Simple (Hozirgi oddiy zamon)',
    topic: 'Present Simple (Hozirgi oddiy zamon)',
    grammarOverview: 'Doimiy odatlar yoki haqiqatlarni ifodalash uchun Present Simple ishlatiladi. 3-shaxs birlikda (He, She, It) fe\'l oxiriga "-s" yoki "-es" qo\'shimchasi qo\'shiladi (He likes, She goes). Oddiy gaplarda: I get up, we play.',
    story: {
      title: 'Our Clean Daily Schedule',
      content: 'Every day I get up at seven o\'clock. I like apples for breakfast. My sister likes bananas. She goes to school at eight o\'clock. In the afternoon, we play with a ball. At night, we sleep in our beds.'
    },
    vocabulary: [
      {
        word: 'breakfast',
        partOfSpeech: 'noun',
        translation: 'nonushta',
        definition: 'The first meal of the day, eaten in the morning.',
        example: 'I like apples for breakfast.'
      },
      {
        word: 'afternoon',
        partOfSpeech: 'noun',
        translation: 'tushdan keyin',
        definition: 'The time between midday and evening.',
        example: 'In the afternoon, we play with a ball.'
      },
      {
        word: 'school',
        partOfSpeech: 'noun',
        translation: 'maktab',
        definition: 'A place where pupils learn.',
        example: 'She goes to school at eight o\'clock.'
      },
      {
        word: 'sleep',
        partOfSpeech: 'verb',
        translation: 'uxlamoq',
        definition: 'To rest in bed at night.',
        example: 'At night, we sleep in our beds.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Bola har kuni soat nechada uyg\'onadi?',
        options: ['Soat sakkizda (8:00)', 'Soat oltida (6:00)', 'Soat yettida (7:00 / seven o\'clock)', 'Soat to\'qqizda'],
        correctAnswer: 'Soat yettida (7:00 / seven o\'clock)',
        explanation: 'Matnda yozilgan: "Every day I get up at seven o\'clock."'
      },
      {
        id: 2,
        question: 'U nonushtaga nima yeyishni yaxshi ko\'radi?',
        options: ['Banan (bananas)', 'Olma (apples)', 'Tuxum va non', 'Kasha'],
        correctAnswer: 'Olma (apples)',
        explanation: 'Bola aytdi: "I like apples for breakfast."'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'My sister ___ sweet bananas for dessert.',
        options: ['like', 'likes', 'liking', 'to like'],
        correctAnswer: 'likes',
        hint: '"My sister" (She) bo\'lgani uchun fe\'lga "-s" qo\'shiladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'We ___ school at eight o\'clock every day.',
        options: ['go', 'goes', 'going', 'gone'],
        correctAnswer: 'go',
        hint: '"We" (Biz) bilan Present Simpleda oddiy ko\'rinishdagi fe\'l "go" keladi.'
      }
    ]
  },
  {
    id: 'lesson_15',
    title: '15-bo\'lim: Prepositions of Place (O\'rin-joy predloglari)',
    topic: 'Prepositions of Place',
    grammarOverview: 'Narsalarning qayerda ekanligini ko\'rsatish uchun: on (ustida), in (ichida), under (tagida), behind (orqasida), next to (yonida) predloglari ishlatiladi.',
    story: {
      title: 'Searching for My Schoolbag and Toys',
      content: 'Where is my schoolbag? It is on the desk. My ball is in the box. Look! The cat is under the chair. My shoes are behind the door. My doll is next to the bed. Everything is in its place!'
    },
    vocabulary: [
      {
        word: 'schoolbag',
        partOfSpeech: 'noun',
        translation: 'maktab sumkasi',
        definition: 'A bag used for carrying books and supplies.',
        example: 'Where is my schoolbag?'
      },
      {
        word: 'box',
        partOfSpeech: 'noun',
        translation: 'quti, quticha',
        definition: 'A hard container with flat sides.',
        example: 'My ball is in the box.'
      },
      {
        word: 'shoes',
        partOfSpeech: 'noun',
        translation: 'poyabzal',
        definition: 'Coverings worn on your feet.',
        example: 'My shoes are behind the door.'
      },
      {
        word: 'door',
        partOfSpeech: 'noun',
        translation: 'eshik',
        definition: 'A flat wooden thing that slides or opens.',
        example: 'My shoes are behind the door.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Maktab sumkasi qayerda ekan?',
        options: [
          'Quti ichida (in the box)',
          'Stol ustida (on the desk)',
          'Krovat yonida (next to the bed)',
          'Eshik orqasida'
        ],
        correctAnswer: 'Stol ustida (on the desk)',
        explanation: 'Matnda yozilgan: "Where is my schoolbag? It is on the desk."'
      },
      {
        id: 2,
        question: 'To\'p qayerda turibdi?',
        options: ['Krovat ostida', 'Quti ichida (in the box)', 'Stol tagida', 'Yostiq ostida'],
        correctAnswer: 'Quti ichida (in the box)',
        explanation: 'Bola aytadi: "My ball is in the box."'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'The shiny ball is ___ the big cardboard box (qutining ichida).',
        options: ['on', 'in', 'under', 'next to'],
        correctAnswer: 'in',
        hint: '"Ichida" predlogi "in" deb ataladi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'The cute grey shoes are ___ the wooden door (eshikning orqasida).',
        options: ['under', 'behind', 'on', 'next to'],
        correctAnswer: 'behind',
        hint: '"Orqasida" predlogi "behind" bo\'lib tarjima qilinadi.'
      }
    ]
  },
  {
    id: 'lesson_16',
    title: '16-bo\'lim: Prepositions of Time (Vaqt predloglari)',
    topic: 'Prepositions of Time',
    grammarOverview: 'Vaqtni ifodalashda: haftaning kunlari oldidan "on" (on Monday, on Sunday); kun qismlari oldidan "in" (in the morning, in the afternoon); va muayyan soatlar uchun "at" (at eight o\'clock, at night) ishlatiladi.',
    story: {
      title: 'The Busy Week of a Fast Student',
      content: 'I am very busy! On Monday, I go to school. In the morning, I have breakfast at eight o\'clock. In the afternoon, I play with my friends. On Sundays, I stay at home with my family. At night, I see the moon.'
    },
    vocabulary: [
      {
        word: 'busy',
        partOfSpeech: 'adjective',
        translation: 'band, vaqtsiz',
        definition: 'Having a lot to do.',
        example: 'I am very busy!'
      },
      {
        word: 'stay',
        partOfSpeech: 'verb',
        translation: 'qolmoq',
        definition: 'To remain in a place.',
        example: 'On Sundays, I stay at home with my family.'
      },
      {
        word: 'morning',
        partOfSpeech: 'noun',
        translation: 'ertalab, tong',
        definition: 'The early part of the day, before noon.',
        example: 'In the morning, I have breakfast.'
      },
      {
        word: 'moon',
        partOfSpeech: 'noun',
        translation: 'oy',
        definition: 'The round silver light in the night sky.',
        example: 'At night, I see the moon.'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Bola soat nechada nonushta qiladi?',
        options: [
          'Soat yettida (at seven o\'clock)',
          'Soat sakkizda (at eight o\'clock)',
          'Soat to\'qqizda',
          'U umuman nonushta qilmaydi'
        ],
        correctAnswer: 'Soat sakkizda (at eight o\'clock)',
        explanation: 'Hikoyada: "In the morning, I have breakfast at eight o\'clock." deb yozilgan.'
      },
      {
        id: 2,
        question: 'U haftaning qaysi kunida uyda qoladi?',
        options: [
          'Yakshanba kunlari (On Sundays)',
          'Dushanba kuni (On Monday)',
          'Shanba kunida',
          'Hech qachon'
        ],
        correctAnswer: 'Yakshanba kunlari (On Sundays)',
        explanation: 'U: "On Sundays, I stay at home with my family." degan.'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: 'We go to our English lesson ___ Monday.',
        options: ['at', 'in', 'on', 'to'],
        correctAnswer: 'on',
        hint: 'Hafta kunlari uchun doim "on" predlogi qo\'llanadi.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'I can see bright stars ___ night.',
        options: ['at', 'in', 'on', 'to'],
        correctAnswer: 'at',
        hint: '"Night" so\'zi oldidan doim "at" qo\'yiladi: "at night".'
      }
    ]
  },
  {
    id: 'lesson_17',
    title: '17-bo\'lim: Who - What (Savol so\'zlari)',
    topic: 'Who / What Question Words',
    grammarOverview: 'Odamlar haqida so\'rash uchun "Who" (Kim?) ishlatiladi. Masalan: Who is she? She is my teacher. Jonsiz narsalar, jonivorlar yoki sohalar haqida so\'rash uchun esa "What" (Nima?) ishlatiladi. Masalan: What is this? It is a red pen.',
    story: {
      title: 'Our School Surprise Box',
      content: 'Who is he? He is Mr. Jones, my teacher. What is this? It is a surprise box. Who are they? They are my friends, Tom and Mary. What is in the box? It is a red yo-yo! Who is she? She is Jenny.'
    },
    vocabulary: [
      {
        word: 'surprise',
        partOfSpeech: 'noun',
        translation: 'ajablanarli, kutilmagan sovg\'a',
        definition: 'An unexpected event or gift.',
        example: 'It is a surprise box.'
      },
      {
        word: 'teacher',
        partOfSpeech: 'noun',
        translation: 'o\'qituvchi',
        definition: 'A person who helps students learn.',
        example: 'He is Mr. Jones, my teacher.'
      },
      {
        word: 'friend',
        partOfSpeech: 'noun',
        translation: 'do\'st, o\'rtoq',
        definition: 'A person whom you know and like.',
        example: 'They are my friends.'
      },
      {
        word: 'box',
        partOfSpeech: 'noun',
        translation: 'quticha',
        definition: 'A container.',
        example: 'What is inside the box?'
      }
    ],
    readingComprehension: [
      {
        id: 1,
        question: 'Jones janobi (Mr. Jones) kim ekan?',
        options: [
          'U uning amakisi',
          'U o\'quvchining o\'qituvchisi (He is Mr. Jones, my teacher)',
          'U maktab direktori',
          'U qo\'shnisi'
        ],
        correctAnswer: 'U o\'quvchining o\'qituvchisi (He is Mr. Jones, my teacher)',
        explanation: 'Hikoyadagi birinchi gap o\'qituvchisini tanishtiradi: "He is Mr. Jones, my teacher."'
      },
      {
        id: 2,
        question: 'Qutining (box) ichida nima bor?',
        options: [
          'Koptok (a ball)',
          'Yangi kitob',
          'Qizil rangli yo-yo o\'yinchiq (a red yo-yo)',
          'Shirinliklar'
        ],
        correctAnswer: 'Qizil rangli yo-yo o\'yinchiq (a red yo-yo)',
        explanation: 'Hikoyada aytiladi: "What is in the box? It is a red yo-yo!"'
      }
    ],
    grammarExercises: [
      {
        id: 1,
        type: 'choice',
        question: '___ is that beautiful student near Linda?',
        options: ['What', 'Who', 'Where', 'When'],
        correctAnswer: 'Who',
        hint: '"Student" odam bo\'lgani uchun "Who" (Kim) deb so\'raymiz.'
      },
      {
        id: 2,
        type: 'choice',
        question: '___ is that red object on the table?',
        options: ['What', 'Who', 'Where', 'When'],
        correctAnswer: 'What',
        hint: 'Narsa (qizil ob\'yekt) haqida so\'rayotganimiz sabab "What" (Nima) ishlatiladi.'
      }
    ]
  }
];
