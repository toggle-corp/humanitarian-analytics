import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../../vendor/react-store/components/Action/Button';

import Modal from '../../vendor/react-store/components/View/Modal';
import ModalBody from '../../vendor/react-store/components/View/Modal/Body';
import ModalHeader from '../../vendor/react-store/components/View/Modal/Header';

import NavDrawer from '../../components/NavDrawer';

import ChapterRequest from './requests/ChapterRequest';
import ChapterListRequest from './requests/ChapterListRequest';
import ChapterListView from '../../components/ChapterListView';
import styles from './styles.scss';


const propTypes = {
    chapterId: PropTypes.string,
};

const defaultProps = {
    chapterId: undefined,
};


const calcNavItems = chapter => [
    { id: 'overview', label: 'Overview' },
    ...chapter.sections.map(s => ({
        id: `section-${s.id}`,
        label: s.title,
    })),
];


export default class Chapter extends React.PureComponent {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    constructor(props) {
        super(props);

        this.state = {
            chapterLoading: true,
            chapterListLoading: true,
            chapter: undefined,
            chapterList: [],
            navDrawerExpanded: false,
            showChapterListModal: false,
        };
    }

    componentDidMount() {
        this.startChapterListRequest();
        this.startChapterRequest(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.chapterId !== this.props.chapterId) {
            this.startChapterRequest(nextProps);
            this.setState({ showChapterListModal: false });
        }
    }

    componentWillUnmount() {
        if (this.chapterListRequest) {
            this.chapterListRequest.stop();
        }
        if (this.chapterRequest) {
            this.chapterRequest.stop();
        }
    }

    handleNavButtonClick = () => {
        this.setState({
            navDrawerExpanded: !this.state.navDrawerExpanded,
        });
    }

    handleChapterSelectButton = () => {
        this.setState({
            showChapterListModal: true,
        });
    }

    handleChapterListCloseButton = () => {
        this.setState({
            showChapterListModal: false,
        });
    }

    startChapterListRequest = () => {
        if (this.chapterListRequest) {
            this.chapterListRequest.stop();
        }

        this.chapterListRequest = new ChapterListRequest({
            setState: v => this.setState(v),
            setChapterList: chapterList => this.setState({ chapterList }),
        }).create();

        this.chapterListRequest.start();
    }

    startChapterRequest = ({ chapterId }) => {
        if (this.chapterRequest) {
            this.chapterRequest.stop();
        }

        if (!chapterId) {
            this.setState({
                chapterLoading: false,
                chapter: undefined,
            });
            return;
        }

        this.chapterRequest = new ChapterRequest({
            chapterId,
            setState: v => this.setState(v),
            setChapter: chapter => this.setState({ chapter }),
        }).create();

        this.chapterRequest.start();
    }

    renderQuote = quote => (
        <figure key={quote.id}>
            <blockquote>
                {quote.quote}
            </blockquote>
            <figcaption>
                {quote.author}
            </figcaption>
        </figure>
    )

    renderListItem = item => (
        <li key={item.id}>
            {item.text}
        </li>
    )

    renderSection = section => (
        <section
            key={section.id}
            id={`section-${section.id}`}
        >
            <h3> {section.title} </h3>
            <p>
                {section.details}
            </p>
        </section>
    )

    renderHeader = () => {
        const { chapter } = this.state;

        return (
            <header>
                {chapter && (
                    <div className={styles.headerLeft}>
                        <Button
                            className={styles.navButton}
                            onClick={this.handleNavButtonClick}
                            iconName="fa fa-bars"
                            transparent
                        />
                        <h2> {chapter.title} </h2>
                    </div>
                )}
                <Button
                    onClick={this.handleChapterSelectButton}
                    transparent
                >
                    Switch chapter
                </Button>
            </header>
        );
    }

    renderContent = () => {
        const {
            chapter,
            navDrawerExpanded,
        } = this.state;
        if (!chapter) {
            return null;
        }

        return (
            <main>
                <NavDrawer
                    defaultItem="overview"
                    items={calcNavItems(chapter)}
                    expanded={navDrawerExpanded}
                />
                <article>
                    <section id="overview">
                        <h3> Overview </h3>
                        <p>
                            {chapter.overview}
                        </p>
                    </section>
                    {chapter.sections.map(this.renderSection)}
                </article>
                <aside>
                    <div className={styles.keyPoints}>
                        <h3> Key points </h3>
                        <ul>
                            {chapter.keyPoints.map(this.renderListItem)}
                        </ul>
                    </div>
                    <div className={styles.quotes}>
                        <h3> Quotes </h3>
                        {chapter.quotes.map(this.renderQuote)}
                    </div>
                </aside>
            </main>
        );
    }

    renderChapterListModal = () => {
        const { chapterList, showChapterListModal } = this.state;

        if (!showChapterListModal) {
            return null;
        }

        return (
            <Modal>
                <ModalHeader
                    title="Select a chapter"
                    rightComponent={
                        <Button
                            onClick={this.handleChapterListCloseButton}
                            iconName="ion-close"
                            transparent
                        />
                    }
                />
                <ModalBody>
                    <ChapterListView chapters={chapterList} />
                </ModalBody>
            </Modal>
        );
    }

    render() {
        const {
            chapterListLoading,
            chapterLoading,
            chapterList,
            chapter,
        } = this.state;

        if (chapterLoading || chapterListLoading) {
            return <div> Loading </div>;
        }

        if (chapterList && !chapter && chapterList.length > 0) {
            return <Redirect to={`/chapters/${chapterList[0].id}/`} />;
        }

        const Header = this.renderHeader;
        const Content = this.renderContent;
        const ChapterListModal = this.renderChapterListModal;

        return (
            <div className={styles.chapter}>
                <Header />
                <Content />
                <ChapterListModal />
            </div>
        );
    }
}
