import './App.css'
import { useTransition, animated } from 'react-spring'
import Table from "./components/table/Table"
import Form from "./components/form/Form"
import InfoBuying from "./components/infoBuying/InfoBuying"
import {Route, Switch, useLocation} from "react-router-dom"

function App() {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {
            tension: 220,
            friction: 120
        }
    })

    return transitions((props, item) => (
        <div className="App">
            <animated.div style={{ ...props, position: 'absolute', width: '100%' }}>
            <Switch location={item}>
                <Route path="/form" component={Form}/>
                <Route path="/buying-information" component={InfoBuying}/>
                <Route path="/" component={Table}/>
            </Switch>
            </animated.div>
        </div>
    ))
}

export default App;
