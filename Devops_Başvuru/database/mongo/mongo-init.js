db = db.getSiblingDB("stajdb")

db.iller.insertMany([
  {
    "il": "yalova",
    "nufus": 11111111111,
    "ilceler": ["termal", "merkez"]
  },
  {
    "il": "istanbul",
    "nufus": 222222222222,
    "ilceler": ["bagcılar", "güneşli"]
  },
  {
    "il": "izmir",
    "nufus": 444444444,
    "ilceler": ["aaaaaaaaa", "bbbbbbbbb"]
  },
  {
    "il": "konya",
    "nufus": 1111111111,
    "ilceler": ["aaaaaaaaaaa", "bbbbbbbbbb"]
  },
  {
    "il": "antalya",
    "nufus": 777777777,
    "ilceler": ["aaaaaaaa", "bbbbbbbbbbb"]
  },
  {
    "il": "adana",
    "nufus": 8888888888,
    "ilceler": ["aaaaaaaa", "bbbbbbbbbbbb"]
  },
  {
    "il": "bursa",
    "nufus": 666666666666,
    "ilceler": ["aaaaaaaa", "bbbbbbbb"]
  },
  {
    "il": "mersin",
    "nufus": 999999999,
    "ilceler": ["aaaaaaaaa", "bbbbbbbbbbb"]
  },
  {
    "il": "ankara",
    "nufus": 333333333,
    "ilceler": ["cankaya", "etimesgut"]
  },
  {
    "il": "tokat",
    "nufus": 22222222222,
    "ilceler": ["aaaaaaaaa", "bbbbbbbbbbb"]
  }
])

db.ulkeler.insertMany([ 
  {    "ulke": "türkite",    "nufus": 33333333333,    "baskent": "ankara"  },  
  {    "ulke": "ingiltere",    "nufus": 5555555555,    "baskent": "londra"  }, 
  {    "ulke": "almanya",    "nufus": 22222222222,    "baskent": "berlin"  },  
  {    "ulke": "kanada",    "nufus": 9999999999,    "baskent": "ottawa"  }, 
  {    "ulke": "brezilya",    "nufus": 100000000000,    "baskent": "brasilia"  },
  {    "ulke": "rusya",    "nufus": 6666666666,    "baskent": "moskova"  },
  {    "ulke": "amerika",    "nufus": 777777777777,    "baskent": "washington"  },  
  {    "ulke": "japonya",    "nufus": 8888888888,    "baskent": "tokyo"  },  
  {    "ulke": "ispanya",    "nufus": 444444444444,    "baskent": "madrid"  }, 
  {    "ulke": "fransa",    "nufus": 1111111111111,    "baskent": "paris"  }, 
]);