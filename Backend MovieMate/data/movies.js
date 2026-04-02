// const movies = [
//  {
//     "title": "Avengers: Endgame",
//     "category": "trending",
//     "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
//     "video": "https://www.youtube.com/embed/TcMBFSGVi1c",
//     "rating": 8.4,
//     "year": 2019
//   },
//    {
//     "title": "The Dark Knight",
//     "category": "top_rated",
//     "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//     "video": "https://www.youtube.com/embed/EXeTwQWrcwY",
//     "rating": 9.0,
//     "year": 2008
//   },
//   {
//     "title": "Inception",
//     "category": "popular",
//     "poster": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
//     "video": "https://www.youtube.com/embed/YoHD9XEInc0",
//     "rating": 8.8,
//     "year": 2010
//   },
//   {
//     "title": "Interstellar",
//     "category": "top_rated",
//     "poster": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     "video": "https://www.youtube.com/embed/zSWdZVtXT7E",
//     "rating": 8.6,
//     "year": 2014
//   },
//   {
//     "title": "Spider-Man: No Way Home",
//     "category": "now_playing",
//     "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
//     "video": "https://www.youtube.com/embed/JfVOs4VSpmA",
//     "rating": 8.2,
//     "year": 2021
//   },
//   {
//     "title": "John Wick",
//     "category": "popular",
//     "poster": "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
//     "video": "https://www.youtube.com/embed/2AUmvWm5ZDQ",
//     "rating": 7.4,
//     "year": 2014
//   },
//   {
//     "title": "Dune",
//     "category": "upcoming",
//     "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//     "video": "https://www.youtube.com/embed/n9xhJrPXop4",
//     "rating": 8.0,
//     "year": 2021
//   },
//   {
//     "title": "Titanic",
//     "category": "popular",
//     "poster": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
//     "video": "https://www.youtube.com/embed/kVrqfYjkTdQ",
//     "rating": 7.8,
//     "year": 1997
//   },
//   {
//     "title": "Avatar",
//     "category": "trending",
//     "poster": "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
//     "video": "https://www.youtube.com/embed/5PSNL1qE6VY",
//     "rating": 7.9,
//     "year": 2009
//   },
//   {
//     "title": "Joker",
//     "category": "top_rated",
//     "poster": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//     "video": "https://www.youtube.com/embed/zAGVQLHvwOY",
//     "rating": 8.4,
//     "year": 2019
//   },
//   {
//     "title": "Fast & Furious 7",
//     "category": "popular",
//     "poster": "https://image.tmdb.org/t/p/w500/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
//     "video": "https://www.youtube.com/embed/Skpu5HaVkOc",
//     "rating": 7.1,
//     "year": 2015
//   },
//   {
//     "title": "Doctor Strange",
//     "category": "trending",
//     "poster": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
//     "video": "https://www.youtube.com/embed/HSzx-zryEgM",
//     "rating": 7.5,
//     "year": 2016
//   },
//   {
//     "title": "Black Panther",
//     "category": "now_playing",
//     "poster": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
//     "video": "https://www.youtube.com/embed/xjDjIWPwcPU",
//     "rating": 7.3,
//     "year": 2018
//   },
//   {
//     "title": "The Batman",
//     "category": "upcoming",
//     "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//     "video": "https://www.youtube.com/embed/mqqft2x_Aa4",
//     "rating": 7.9,
//     "year": 2022
//   },
//   {
//     "title": "KGF Chapter 2",
//     "category": "trending",
//     "poster": "https://image.tmdb.org/t/p/w500/xfnhf1A5qzvXbM4S6yGzZ0x8f0c.jpg",
//     "banner": "https://image.tmdb.org/t/p/original/xfnhf1A5qzvXbM4S6yGzZ0x8f0c.jpg",
//     "video": "https://www.youtube.com/embed/JKa05nyUmuQ",
//     "rating": 8.4,
//     "year": 2022
//   }
// ];

// export default movies; 
  

// const movies = [
//   {
//     title: "Avengers: Endgame",
//     category: "trending",
//     poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//     banner: "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
//     video: "https://www.youtube.com/embed/TcMBFSGVi1c?rel=0&modestbranding=1",
//     rating: 8.4,
//     year: 2019
//   },
//   {
//     title: "The Dark Knight",
//     category: "top_rated",
//     poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     banner: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//     video: "https://www.youtube.com/embed/EXeTwQWrcwY?rel=0&modestbranding=1",
//     rating: 9.0,
//     year: 2008
//   },
//   {
//     title: "Inception",
//     category: "popular",
//     poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//     banner: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
//     video: "https://www.youtube.com/embed/YoHD9XEInc0?rel=0&modestbranding=1",
//     rating: 8.8,
//     year: 2010
//   },
//   {
//     title: "Interstellar",
//     category: "top_rated",
//     poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     banner: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     video: "https://www.youtube.com/embed/zSWdZVtXT7E?rel=0&modestbranding=1",
//     rating: 8.6,
//     year: 2014
//   },
//   {
//     title: "Spider-Man: No Way Home",
//     category: "now_playing",
//     poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//     banner: "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
//     video: "https://www.youtube.com/embed/JfVOs4VSpmA?rel=0&modestbranding=1",
//     rating: 8.2,
//     year: 2021
//   }
// ];

// export default movies;

// const movies = [
//   {
//     id: 1,
//     title: "Batman Begins",
//     category: "popular",
//     poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//     trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
//   },
//   {
//     id: 2,
//     title: "Avengers Endgame",
//     category: "trending",
//     poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//     trailer: "https://www.w3schools.com/html/movie.mp4"
//   },
//   {
//     id: 3,
//     title: "Spider Man",
//     category: "upcoming",
//     poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
//     trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
//   }
// ];

// export default movies;


const movies = [
  // 🔥 TRENDING
  {
    id: 1,
    title: "Avengers: Endgame",
    category: "trending",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 2,
    title: "Joker",
    category: "trending",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    title: "Thor: Ragnarok",
    category: "trending",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 4,
    title: "Deadpool",
    category: "trending",
    poster: "https://th.bing.com/th/id/OIP.anOTcccPkp0OxmuqAiffswHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 5,
    title: "The Dark Knight",
    category: "trending",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },

  // 🔥 POPULAR
  {
    id: 6,
    title: "Batman Begins",
    category: "popular",
    poster: "https://tse1.mm.bing.net/th/id/OIP.ECwztJ0a8izvu6lYEPLT4AHaLB?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 7,
    title: "Iron Man",
    category: "popular",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 8,
    title: "Black Panther",
    category: "popular",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 9,
    title: "Captain America",
    category: "popular",
    poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 10,
    title: "Hulk",
    category: "popular",
    poster: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },

  // 🔥 UPCOMING
  {
    id: 11,
    title: "Spider-Man",
    category: "upcoming",
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 12,
    title: "Doctor Strange 2",
    category: "upcoming",
    poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 13,
    title: "Flash",
    category: "upcoming",
    poster: "https://image.tmdb.org/t/p/w500/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 14,
    title: "Aquaman 2",
    category: "upcoming",
    poster: "https://th.bing.com/th/id/OIP.YVi_Ab5Fs6g3tCizvvVJyAHaKy?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 15,
    title: "Guardians of Galaxy",
    category: "upcoming",
    poster: "https://tse1.mm.bing.net/th/id/OIP.-upFNm9v9sJGsjSCWp_BjwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

export default movies;