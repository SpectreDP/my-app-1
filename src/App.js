import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Profile/Users/UsersContainer';
import Login from './components/Login/Login';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile/*' element={<ProfileContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />

              {/* <Route path='/friends' 
            element={<Friends state={props.state.sidebar}/>} /> */}
            </Routes>
          </React.Suspense >
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);


let AppMain = (props) => {
  return (
    <div role={'main'}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default AppMain;


