import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};


export default class Navbar extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    getClassName() {
        const { className } = this.props;

        const classNames = [
            className,
            'navbar',
            styles.navbar,
        ];

        return classNames.join(' ');
    }


    renderItem = item => (
        <li key={item.id}>
            <a href={`#${item.id}`}>
                {item.label}
            </a>
        </li>
    )

    render() {
        return (
            <div className={this.getClassName()}>
                <h1>
                    Humanitarian Analytics
                </h1>
            </div>
        );
    }
}
