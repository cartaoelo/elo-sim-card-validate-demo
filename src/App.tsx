import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import { HOME, VALIDATESIMCARD } from './constants/routes'

import Home from './pages/Home'
import AppContext, { AppContextDefaultValue } from './store'

import AppStyled from './styles/App.styled'
import BackgroundContainerStyled from './styles/Background'
import SimCard from './pages/SimCard'

function App() {
	return (
		<AppContext.Provider value={AppContextDefaultValue}>
			<AppStyled className="App">
				<Router>
					<Switch>
						{/* <BackgroundContainerStyled> */}
						<Route exact component={Home} path={HOME} />
						<PrivateRoute exact component={SimCard} path={VALIDATESIMCARD} />
						<Route component={() => <Redirect to={HOME} />} />
						{/* </BackgroundContainerStyled> */}
					</Switch>
				</Router>
			</AppStyled>
		</AppContext.Provider>
	)
}

export default App
