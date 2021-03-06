import React, { useReducer, useRef } from 'react';
import './cards.css'
import arrow from '../../assets/arrow_right_alt-white-18dp.svg'
const slides = [
  {
    title: 'Switzerland',
    description: 'Heart-racing Alpine pursuits and urban culture.',
    image: 'https://img3.goodfon.ru/original/1920x1080/4/43/zermatt-valley-switzerland.jpg',

  },
  {
    title: 'Indonesia',
    description: 'Explore The magic of Indonesia',
    image: 'https://images.wallpaperscraft.ru/image/indoneziya_ostrov_yava_vulkan_bromo_holmy_vysota_goluboe_rozovoe_nebo_oblaka_90613_1920x1080.jpg',
  },
  {
    title: 'New Zealand',
    description: 'Adventure is never far away',
    image: 'https://cdn.hipwallpaper.com/i/35/72/fcT04X.jpg',

  },
  {
    title: 'Iceland',
    description: 'Let your dreams come true',
    image: 'https://img1.goodfon.ru/original/1920x1080/e/ff/more-gory-doma-islandiya.jpg',

  },
  {
    title: 'Thailand',
    description: 'Sun and beaches all year around',
    image: 'https://wallpaperaccess.com/full/150582.jpg',

  },
  {
    title: 'India',
    description: 'Home of tigers elephants and monkeys ',
    image: 'https://media.cntraveller.in/wp-content/uploads/2020/03/Kerala-Coronavirus-measures_Periyar.jpg',

  },
  {
    title: 'Germany',
    description: 'Fairy tale about medieval fortresses with moats',
    image: 'https://wallpaperaccess.com/full/138772.jpg',

  },
  {
    title: 'France',
    description: 'The mountains are calling',
    image: 'https://wallpaperaccess.com/full/431155.jpg',
  }
]

const initialState = {
  slideIndex: 0
}

const slideReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    }
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex: state.slideIndex === 0
        ? slides.length - 1
        : state.slideIndex - 1
    }
  }
}

function Slide({ slide, offset }) {
  return (
    <li
      className="slide"
      style={{
        backgroundImage: `url('${slide.image}')`,
        '--offset': offset,
      }}>
      <div className="country-info">
        <span className="country-title">{slide.title}</span>
        <pre className="country-description">{slide.description}</pre>
        <button className="explore-btn">Explore <img src={arrow} alt="arrow" /></button>
      </div>
    </li>);
}

function Cards() {
  const [state, dispatch] = useReducer(slideReducer, initialState)
  return (
    <div className="cards-wrapper">
      <ul className="Cards">
        {slides.map((slide, i) => {
          let offset = state.slideIndex - i
          return <Slide slide={slide} offset={offset} />
        })}
      </ul>
      <div className="cards-buttons">
        <button onClick={() => dispatch({ type: 'PREV' })}></button>
        <button onClick={() => dispatch({ type: 'NEXT' })}></button>
      </div>
    </div>
  );
}
export default Cards;
