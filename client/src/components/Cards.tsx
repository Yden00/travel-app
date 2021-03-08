import React, { CSSProperties, useReducer } from 'react';
import './cards.css'
import arrow from '../assets/arrow_right_alt-white-18dp.svg'
import { Link } from 'react-router-dom'
import slides from '../countries'
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
      }as CSSProperties}>
      <div className="country-info">
        <span className="country-title">{slide.title}</span>
        <pre className="country-description">{slide.description}</pre>
        <Link to={slide.title.replace(/\s/g, '')}><button className="explore-btn">Explore <img src={arrow} alt="arrow" /></button></Link>
      </div>
    </li>);
}

function Cards() {
  const [state, setState] = useReducer(slideReducer, initialState)

  return (
    <main className="country-cards">
      <div className="cards-wrapper">
        <ul className="Cards">
          {slides.map((slide, i) => {
            let offset = state.slideIndex - i
            return <Slide key={i} slide={slide} offset={offset} />
          })}
        </ul>
        <div className="cards-buttons">
          <button onClick={() => setState({ type: 'PREV' })}></button>
          <button onClick={() => setState({ type: 'NEXT' })}></button>
        </div>
      </div>
    </main>
  );
}
export default Cards;
