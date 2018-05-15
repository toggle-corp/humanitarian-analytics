import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chapter from './views/Chapter';
import Navbar from './components/Navbar';


const ChapterWrapper = ({ match }) => (
    <Chapter chapterId={match.params.chapterId} />
);

ChapterWrapper.propTypes = {
    match: PropTypes.shape({ params: PropTypes.object }).isRequired,
};


export default class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Chapter} />
                    <Route path="/chapters/:chapterId" component={ChapterWrapper} />
                </div>
            </Router>
        );
    }
}
