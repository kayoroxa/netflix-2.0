import Home from '../../templates/Home'
import { _Data } from '../../utils/types/_type_data'

const data: _Data = {
  categories: [
    {
      title: 'workana & home office',
      items: [
        {
          title: '',
          id: 'zxLDJ0ocZBA',
          description: '',
          img: 'https://img.youtube.com/vi/zxLDJ0ocZBA/mqdefault.jpg',
        },
        {
          title: '',
          id: 'rOSVc0qeRno',
          description: '',
          img: `https://img.youtube.com/vi/${'rOSVc0qeRno'}/mqdefault.jpg`,
        },
        {
          title: '',
          id: '2XSqfzD7iEc',
          description: '',
          img: `https://img.youtube.com/vi/${'2XSqfzD7iEc'}/mqdefault.jpg`,
        },
        {
          title: '',
          id: 'tJ-AKjkZJXg',
          description: '',
          img: `https://img.youtube.com/vi/${'tJ-AKjkZJXg'}/mqdefault.jpg`,
        },
      ],
    },
    {
      title: 'binary',
      items: [
        {
          title: '',
          id: 'Eum14ixguOw',
          description: '',
          img: `https://img.youtube.com/vi/${'Eum14ixguOw'}/mqdefault.jpg`,
        },
        {
          title: '',
          id: 'RdVhgxn_uYQ',
          description: '',
          img: `https://img.youtube.com/vi/${'RdVhgxn_uYQ'}/mqdefault.jpg`,
        },
      ],
    },
    {
      title: 'programing',
      items: [
        {
          title: '',
          id: 'O-6kbagEmKA',
          description: '',
          img: `https://img.youtube.com/vi/${'O-6kbagEmKA'}/mqdefault.jpg`,
        },
        {
          title: '',
          id: 'qkLRozfca50',
          description: '',
          img: `https://img.youtube.com/vi/${'qkLRozfca50'}/mqdefault.jpg`,
        },
      ],
    },
    {
      title: 'kiwify vs hotmart',
      items: [
        {
          title: '',
          id: 'yyJrpdjFexY',
          description: '',
          img: `https://img.youtube.com/vi/${'yyJrpdjFexY'}/mqdefault.jpg`,
        },
        {
          title: '',
          id: 'G1SYc7Cyonk',
          description: '',
          img: `https://img.youtube.com/vi/${'G1SYc7Cyonk'}/mqdefault.jpg`,
        },
        {
          title: '',
          id: 'AYjEs0xnsmc',
          description: '',
          img: `https://img.youtube.com/vi/${'AYjEs0xnsmc'}/mqdefault.jpg`,
        },
      ],
    },
    // {
    //   title: 'Aventura',
    //   items: items,
    // },
  ],
}

export default function Index() {
  return (
    <Home
      data={data}
      showInfo={false}
      posterData={{
        img: 'https://images.moviemeter.nl/tmdb/t/p/original//ylawpj3jvLESk7JGh4QvlzD9EmH.jpg',
        id: 'dtD3FVJ37Rk',
        title: "The Queen's Gambit",
      }}
    />
  )
}
