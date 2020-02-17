import { Cancion } from './cancion';
import { FilterPipe } from './filter.pipe';

export const CANCIONES: Cancion[] = [
  { id: 1, name: 'Smells Like Teen Spirit', artista: 'Nirvana', album: 'Official Live at Reading', year: 1992, genero: 'Grunge', track: './assets/smells-like-teen-spirit.mp3', cover:'./assets/nevermind.jpg' },
  { id: 2, name: 'I Can´t Get No', artista: 'The Rolling Stones', album: 'Satisfaction', year: 1965, genero: 'Rock',  track: './assets/satisfaction.mp3', cover:'./assets/satisfaction.jpg' },
  { id: 3, name: 'Bohemian Rhapsody', artista: 'Queen', album: 'A Night at the Opera', year: 1975, genero: 'Rock Opera', track: './assets/bohemian.mp3', cover:'./assets/bohemian.jpg'},
  { id: 4, name: 'Billie Jean', artista: 'Michael Jackson', album: 'Thriller', year: 1983, genero: 'Disco Funky', track: './assets/billie-jean.mp3', cover:'./assets/billyjean.jpg'  },
  { id: 5, name: 'Money for Nothing', artista: 'Dire Straits', album: 'Brothers in Arms', year: 1985, genero: 'Hard Rock', track: './assets/money-for-nothing.mp3', cover:'./assets/money.jpg'},
  { id: 6, name: 'Up Town Funk', artista: 'Mark Ronson y Bruno Mars', album: 'Uptown Special', year: 2015, genero: 'Pop Funk', track: './assets/uptownfunk.mp3', cover:'./assets/uptown-funk.jpg' },
  { id: 7, name: 'Call me Maybe', artista: 'Carly Rae Jepsen', album: 'Curiosity', year: 2012, genero: 'Dance Pop', track: './assets/callmemaybe.mp3', cover:'./assets/callmemaybe.jpg'},
  { id: 8, name: 'Thriller', artista: 'Michael Jackson', album: 'Thriller', year: 1983, genero: 'Disco Funky', track: './assets/thriller.mp3', cover:'./assets/thriller.jpg' },
  { id: 9, name: 'Stairway to Heaven', artista: 'Led Zeppelin', album: 'Led Zeppelin IV', year: 1971, genero:'Rock', track: './assets/stairway-to-heaven.mp3', cover:'./assets/stairwaytoheaven.jpg'},
  { id: 10, name: 'Firework', artista: 'Katy Perry', album: 'Teenage Dream', year: 2010, genero:'Dance Pop', track: './assets/firework.mp3', cover:'./assets/firework.jpg'}
];
