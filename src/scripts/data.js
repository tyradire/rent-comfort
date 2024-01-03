const apartmentsList = [
  // MSC
    {
      id: 1,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.768,37.604],
      address: 'Пл. Ленина 1',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 2,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.778,37.595],
      address: 'Пл. Ленина 2',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 3,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.744,37.589],
      address: 'Пл. Ленина 3',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 4,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.757,37.650],
      address: 'Пл. Ленина 4',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 5,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.770,37.603],
      address: 'Пл. Ленина 5',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 6,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.746,37.589],
      address: 'Пл. Ленина 6',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 7,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.733,37.619],
      address: 'Пл. Ленина 7',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 8,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.767,37.572],
      address: 'Пл. Ленина 8',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 9,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.750,37.675],
      address: 'Пл. Ленина 9',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 10,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.737,37.635],
      address: 'Пл. Ленина 10',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 11,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.756,37.563],
      address: 'Пл. Ленина 11',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 12,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.730,37.583],
      address: 'Пл. Ленина 12',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 13,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.779,37.611],
      address: 'Пл. Ленина 13',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 14,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.788,37.596],
      address: 'Пл. Ленина 14',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 15,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.763,37.572],
      address: 'Пл. Ленина 15',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 16,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.755,37.637],
      address: 'Пл. Ленина 16',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 17,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.775,37.628],
      address: 'Пл. Ленина 17',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 18,
      city: 'Москва',
      cityCode: 'MSC',
      coords: [55.749,37.589],
      address: 'Пл. Ленина 18',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },

    // SPB
    {
      id: 19,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.988,30.343],
      address: 'Пл. Ленина 19',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 20,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.951,30.238],
      address: 'Пл. Ленина 20',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 21,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.928,30.328],
      address: 'Пл. Ленина 21',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 22,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.914,30.278],
      address: 'Пл. Ленина 22',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 23,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.958,30.293],
      address: 'Пл. Ленина 23',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 24,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.943,30.271],
      address: 'Пл. Ленина 24',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 25,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.928,30.311],
      address: 'Пл. Ленина 25',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 26,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.942,30.356],
      address: 'Пл. Ленина 26',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 27,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.961,30.321],
      address: 'Пл. Ленина 27',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 28,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.973,30.302],
      address: 'Пл. Ленина 28',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 29,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.973,30.265],
      address: 'Пл. Ленина 29',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 30,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.970,30.265],
      address: 'Пл. Ленина 31',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 31,
      city: 'Санкт-Петербург',
      cityCode: 'SPB',
      coords: [59.989,30.252],
      address: 'Пл. Ленина 32',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },

    {
      id: 32,
      city: 'Новосибирск',
      cityCode: 'NSK',
      coords: [55.029,82.926],
      address: 'Пл. Ленина 33',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 33,
      city: 'Новосибирск',
      cityCode: 'NSK',
      coords: [55.046,82.983],
      address: 'Пл. Ленина 34',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 34,
      city: 'Новосибирск',
      cityCode: 'NSK',
      coords: [55.019,82.957],
      address: 'Пл. Ленина 35',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 35,
      city: 'Новосибирск',
      cityCode: 'NSK',
      coords: [55.061,82.921],
      address: 'Пл. Ленина 36',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 36,
      city: 'Новосибирск',
      cityCode: 'NSK',
      coords: [54.992,82.859],
      address: 'Пл. Ленина 37',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 37,
      city: 'Новосибирск',
      cityCode: 'NSK',
      coords: [54.965,82.883],
      address: 'Пл. Ленина 38',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },

    {
      id: 38,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.867,60.601],
      address: 'Пл. Ленина 39',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 39,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.850,60.608],
      address: 'Пл. Ленина 40',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 40,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.829,60.587],
      address: 'Пл. Ленина 41',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 41,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.823,60.597],
      address: 'Пл. Ленина 42',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 42,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.832,60.625],
      address: 'Пл. Ленина 43',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 43,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.834,60.572],
      address: 'Пл. Ленина 44',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 44,
      city: 'Екатеринбург',
      cityCode: 'EKB',
      coords: [56.893,60.623],
      address: 'Пл. Ленина 45',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },

    {
      id: 45,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.788,49.156],
      address: 'Пл. Ленина 46',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 46,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.790,49.147],
      address: 'Пл. Ленина 47',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 47,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.784,49.132],
      address: 'Пл. Ленина 48',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 48,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.790,49.119],
      address: 'Пл. Ленина 49',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 49,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.793,49.116],
      address: 'Пл. Ленина 50',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 50,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.794,49.099],
      address: 'Пл. Ленина 51',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 51,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.819,49.080],
      address: 'Пл. Ленина 52',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 52,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.825,49.100],
      address: 'Пл. Ленина 53',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 53,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.830,49.135],
      address: 'Пл. Ленина 54',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 54,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.835,49.075],
      address: 'Пл. Ленина 55',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 55,
      city: 'Казань',
      cityCode: 'KAZ',
      coords: [55.821,49.149],
      address: 'Пл. Ленина 56',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },

    {
      id: 56,
      city: 'Нижний Новгород',
      cityCode: 'NNG',
      coords: [56.323,44.021],
      address: 'Пл. Ленина 57',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 57,
      city: 'Нижний Новгород',
      cityCode: 'NNG',
      coords: [56.328,43.937],
      address: 'Пл. Ленина 58',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 58,
      city: 'Нижний Новгород',
      cityCode: 'NNG',
      coords: [56.310,43.938],
      address: 'Пл. Ленина 59',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 59,
      city: 'Нижний Новгород',
      cityCode: 'NNG',
      coords: [56.312,43.995],
      address: 'Пл. Ленина 60',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },

    {
      id: 60,
      city: 'Челябинск',
      cityCode: 'CHB',
      coords: [55.227,61.407],
      address: 'Пл. Ленина 61',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 61,
      city: 'Челябинск',
      cityCode: 'CHB',
      coords: [55.188,61.424],
      address: 'Пл. Ленина 62',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 62,
      city: 'Челябинск',
      cityCode: 'CHB',
      coords: [55.177,61.431],
      address: 'Пл. Ленина 63',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 63,
      city: 'Челябинск',
      cityCode: 'CHB',
      coords: [55.178,61.373],
      address: 'Пл. Ленина 64',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 64,
      city: 'Челябинск',
      cityCode: 'CHB',
      coords: [55.159,61.399],
      address: 'Пл. Ленина 65',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 65,
      city: 'Челябинск',
      cityCode: 'CHB',
      coords: [55.214,61.404],
      address: 'Пл. Ленина 66',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },

    {
      id: 66,
      city: 'Самара',
      cityCode: 'SAM',
      coords: [53.195,50.130],
      address: 'Пл. Ленина 67',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 67,
      city: 'Самара',
      cityCode: 'SAM',
      coords: [53.190,50.161],
      address: 'Пл. Ленина 68',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 68,
      city: 'Самара',
      cityCode: 'SAM',
      coords: [53.210,50.187],
      address: 'Пл. Ленина 69',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },

    {
      id: 69,
      city: 'Уфа',
      cityCode: 'UFA',
      coords: [54.738,55.983],
      address: 'Пл. Ленина 70',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 70,
      city: 'Уфа',
      cityCode: 'UFA',
      coords: [54.734,55.946],
      address: 'Пл. Ленина 71',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 71,
      city: 'Уфа',
      cityCode: 'UFA',
      coords: [54.726,55.962],
      address: 'Пл. Ленина 72',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 72,
      city: 'Уфа',
      cityCode: 'UFA',
      coords: [54.745,55.992],
      address: 'Пл. Ленина 73',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },

    {
      id: 73,
      city: 'Ростов-на-Дону',
      cityCode: 'RND',
      coords: [47.228,39.709],
      address: 'Пл. Ленина 74',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 74,
      city: 'Ростов-на-Дону',
      cityCode: 'RND',
      coords: [47.223,39.700],
      address: 'Пл. Ленина 75',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 75,
      city: 'Ростов-на-Дону',
      cityCode: 'RND',
      coords: [47.221,39.676],
      address: 'Пл. Ленина 76',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 76,
      city: 'Ростов-на-Дону',
      cityCode: 'RND',
      coords: [47.227,39.677],
      address: 'Пл. Ленина 77',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 77,
      city: 'Ростов-на-Дону',
      cityCode: 'RND',
      coords: [47.218,39.656],
      address: 'Пл. Ленина 78',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },

    {
      id: 78,
      city: 'Омск',
      cityCode: 'OMS',
      coords: [54.993,73.374],
      address: 'Пл. Ленина 79',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 79,
      city: 'Омск',
      cityCode: 'OMS',
      coords: [54.997,73.360],
      address: 'Пл. Ленина 80',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 80,
      city: 'Омск',
      cityCode: 'OMS',
      coords: [54.987,73.366],
      address: 'Пл. Ленина 81',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },

    {
      id: 81,
      city: 'Красноярск',
      cityCode: 'KRK',
      coords: [56.014,92.859],
      address: 'Пл. Ленина 82',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 82,
      city: 'Красноярск',
      cityCode: 'KRK',
      coords: [56.024,92.874],
      address: 'Пл. Ленина 83',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },

    {
      id: 83,
      city: 'Воронеж',
      cityCode: 'VRN',
      coords: [51.683,39.180],
      address: 'Пл. Ленина 84',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },
    {
      id: 84,
      city: 'Воронеж',
      cityCode: 'VRN',
      coords: [51.690,39.191],
      address: 'Пл. Ленина 85',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-4.webp'
    },
    {
      id: 85,
      city: 'Воронеж',
      cityCode: 'VRN',
      coords: [51.689,39.212],
      address: 'Пл. Ленина 86',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-1.webp'
    },
    {
      id: 86,
      city: 'Воронеж',
      cityCode: 'VRN',
      coords: [51.666,39.199],
      address: 'Пл. Ленина 87',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-2.webp'
    },
    {
      id: 87,
      city: 'Воронеж',
      cityCode: 'VRN',
      coords: [51.661,39.190],
      address: 'Пл. Ленина 88',
      phone: '+791234567890',
      tags: ['2-комн.', 'wi-fi', 'лифт', '3-эт', 'парковка'],
      photo: './images/apartments-photo-3.webp'
    },    
]