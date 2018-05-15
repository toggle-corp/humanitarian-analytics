import { FgRestBuilder } from '../../../vendor/react-store/utils/rest';
import {
    createParamsForGet,
    createUrlForChapter,
} from '../../../rest';


export default class ChapterRequest {
    constructor(props) {
        this.props = props;
    }

    success = (response) => {
        this.props.setChapter(response);
    }

    failure = (response) => {
        console.error(response);
    }

    fatal = () => {
        console.error('Failed to retrieve chapter');
    }

    create = () => {
        const request = new FgRestBuilder()
            .url(createUrlForChapter(this.props.chapterId))
            .params(createParamsForGet)
            .preLoad(() => this.props.setState({ chapterLoading: true }))
            .postLoad(() => this.props.setState({ chapterLoading: false }))
            .success(this.success)
            .failure(this.failure)
            .fatal(this.fatal)
            .build();
        return request;
    }
}

