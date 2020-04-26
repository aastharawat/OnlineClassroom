import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import StreamPage from './Profile/Stream';
const Route = () => {
    return(
        <Router>
            <Route path="/hello">
                <StreamPage/>
            </Route>
        </Router>
    )
}