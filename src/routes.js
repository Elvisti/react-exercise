import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Main from './components/Main';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Main} />
        </Switch>
    )
}

export default Routes;