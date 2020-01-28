import React from 'react';
import Header from '../Header';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Header />
            <Link to="/users">{user}</Link>

        </div>
    )
}

export default Home;