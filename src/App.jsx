import { Switch, Route, Link, useLocation } from "react-router-dom";
import './App.scss'
import reactQueryLogo  from './assets/reactQueryLogo.png'
import githubLogo from './assets/githubLogo.png'
import linkedinLogo from './assets/linkedinLogo.png'
import youtubeLogo from './assets/youtubeLogo.png'
import { Home } from './pages/Home'
import { VideoGameDetail } from "./pages/VideoGameDetail";
import { VideoGamesPage } from "./pages/VideoGamesPage";


function App() {
  const location = useLocation();
  const {pathname} = location;

  return (
    <div>
      <div className='navWrapper'>
        <nav>
          <div className='navLogo'>
            <img src={reactQueryLogo} alt="" />
            <div className='reactQueryLink'>
              <a href="https://www.linkedin.com/in/henri-teinturier/" target='_blank' rel='noreferrer'>
                <h2>React Query Training</h2>
              </a>
            </div>
          </div>
          <div className='navBar'>
            <div className='navLinks'>
              <Link to="/">
                <div 
                  className={`link ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </div>
              </Link>
              <Link to="/videoGames">
                <div 
                  className={`link ${pathname === "/videoGames" ? "active" : ""}`}
                >
                  Video Games
                </div>
              </Link>
            </div>
          <div className='navLogos'>
            <div className='logoLink'>
              <a href="https://github.com/HenriTeinturier/LearnReactQueryPrepare" target='_blank' rel="noreferrer">
                <img src={githubLogo} alt="" />
              </a>
              
            </div>
            <div className='logoLink'>
              <a href="https://www.linkedin.com/in/henri-teinturier/" target='_blank' rel="noreferrer">
                <img src={linkedinLogo} alt="" />
              </a>
            </div>
            <div className='logoLink'>
              <a href="https://www.youtube.com/@henriTeinturier/featured" target='_blank' rel="noreferrer">
                <img src={youtubeLogo} alt="" />
              </a>
            </div>
          </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path={`/videoGames/:videoGameId`}>
          <VideoGameDetail />
        </Route>
        <Route path="/videoGames">
          <VideoGamesPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
