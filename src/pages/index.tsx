import Home from '../templates/Home'
import { _Data } from '../utils/types/_type_data'

const items = [
  ...Array(6)
    .fill(0)
    .map(() => ({
      title: 'Viuva negra',
      id: 'tJId02udLgI',
      description: 'Very good movie',
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
    })),
  ...Array(6)
    .fill(0)
    .map(() => ({
      title: 'Black Widow',
      id: 'uvZImlL51Io',
      description: 'Very cool',
      img: 'https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg',
    })),
]

const data: _Data = {
  categories: [
    {
      title: 'Ação',
      items: items,
    },
    {
      title: 'Aventura',
      items: items,
    },
    {
      title: 'Comédia',
      items: items,
    },
  ],
}

export default function Index() {
  return (
    <Home
      data={data}
      posterData={{
        img: 'https://images.moviemeter.nl/tmdb/t/p/original//ylawpj3jvLESk7JGh4QvlzD9EmH.jpg',
        id: 'dtD3FVJ37Rk',
        title: "The Queen's Gambit",
      }}
    />
  )
}
