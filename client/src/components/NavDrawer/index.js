import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
    })),
    expanded: PropTypes.bool,
};

const defaultProps = {
    className: '',
    items: [],
    expanded: false,
};


export default class NavDrawer extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    componentWillMount() {
        if (!window.location.hash) {
            window.location.hash = '#overview';
        }
    }

    getClassName() {
        const { className, expanded } = this.props;

        const classNames = [
            className,
            'nav-drawer',
            styles.navDrawer,
        ];

        if (expanded) {
            classNames.push('expanded');
            classNames.push(styles.expanded);
        }

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
        const { items } = this.props;

        return (
            <div className={this.getClassName()}>
                <ul>
                    {items.map(this.renderItem)}
                </ul>
            </div>
        );
    }
}
