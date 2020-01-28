import React, { Component } from 'react';
import api from 'axios';

import './style.css';


class Main extends Component {
    state = {
        list: [],
    }

    componentDidMount() {
        this.showList()
    }

    showList = async () => {
        const response = await api.get('https://api.github.com/users');
        console.log(response.data);

        this.setState({ list: response.data })

    }
    // linkcontent = (url) => {

    // }



    render() {

        const { list } = this.state
        return (
            <div className="container-content">
                <h1 className="content">Content</h1>
                <div className="list">
                    {list.map(l => (
                        <figure>
                            <a href={l.html_url} target="_blank">
                                <img src={l.avatar_url} />
                                <figcaption>{l.login}</figcaption>
                            </a>
                        </figure>
                    ))}
                </div>
            </div>
        )
    }
}

export default Main;