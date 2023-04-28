import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const getRandomTrack = async () => {
  const response = await window.fetch('http://localhost:5000/getRandomTrackNoSpotify')
  return await response.json()
}

function App() {
  const [lyrics, setLyrics] = useState('')

  const handleGetLyrics = async event => {
    const lyricContainer = await getRandomTrack()

    setLyrics(lyricContainer.lyric)
  }

  return (
    <div className="App">
      <header className="App-header">
        {lyrics ? (
          lyrics
        ) : (
          <>
            <svg
              className="App-logo"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="250px"
              height="250px"
            >
              {/* Outer star */}
              <path
                d="M50,5L36.775,31.797L7.202,36.094L28.601,56.953L23.55,86.406L50,72.5L76.45,86.406L71.398,56.953L92.797,36.094L63.225,31.797L50,5ZM66.164,51.582L63.34,54.334L64.007,58.22L66.49,72.695L53.49,65.862L50,64.027L46.51,65.862L33.511,72.696L35.994,58.221L36.661,54.335L33.837,51.583L23.32,41.331L37.854,39.219L41.756,38.652L43.501,35.116L50.001,21.946L56.501,35.116L58.246,38.652L62.148,39.219L76.682,41.331L66.164,51.582Z"
                fill="currentColor"
                stroke="white"
              ></path>
              {/* Inner star */}
              <path
                d="M50,34.35L45.401,43.67L35.116,45.164L42.559,52.418L40.802,62.661L50,57.825L59.198,62.661L57.441,52.418L64.884,45.164L54.599,43.67Z"
                fill="currentColor"
                stroke="white"
              ></path>
            </svg>

            {lyrics}
            <p>✭ ⋆☆ﾟweb app made by lydia worku ✭ ⋆☆ﾟ</p>
            <p>
              ˚　　　　 ੈ✧˳·˖✶✦　　　.　　. 　 ˚　.　　　　　 . ✦　　　 　˚　　　　 . ★⋆. ੈ✧˳·˖✶
               ˚　.˚　　　　✦　　　. ੈ✧˳·˖✶ 　　*　　 　　✦ ੈ✧˳·˖✶　　　.　　.　　　✦　˚
              　　　　 ˚　.˚　　　　✦　　　.　　. 　 ˚　.　　　　 　　 　　　　 ੈ✧˳·˖✶
            </p>

            <p>to get your lyrics of the day: </p>

            <a
              className="App-link"
              href="http://127.0.0.1:5000/getRandomTrack"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <button className="clickherebutton">click here! </button>
            </a>

            <button onClick={handleGetLyrics}>Click here!</button>
          </>
        )}

        {<div></div>}
      </header>
    </div>
  )
}

export default App
