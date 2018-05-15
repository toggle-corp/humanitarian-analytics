import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';


const propTypes = {
    chapters: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
    chapters: [],
};

export default class ChapterListView extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    renderChapter = chapter => (
        <Link
            className={styles.chapter}
            key={chapter.id}
            to={`/chapters/${chapter.id}/`}
        >
            {chapter.title}
        </Link>
    )

    render() {
        const { chapters } = this.props;

        if (!chapters) {
            return 'Loading';
        }

        return (
            <div className={styles.chapterList}>
                { chapters.map(this.renderChapter) }
            </div>
        );
    }
}
