import { FgRestBuilder } from '../../../vendor/react-store/utils/rest';
import {
    createParamsForGet,
    urlForChapterList,
} from '../../../rest';


export default class ChapterListRequest {
    constructor(props) {
        this.props = props;
    }

    success = (response) => {
        this.props.setChapterList(response.results);
    }

    failure = (response) => {
        console.error(response);
    }

    fatal = () => {
        console.error('Failed to retrieve chapter list');
    }

    create = () => {
        const request = new FgRestBuilder()
            .url(urlForChapterList)
            .params(createParamsForGet)
            .preLoad(() => this.props.setState({ chapterListLoading: true }))
            .postLoad(() => this.props.setState({ chapterListLoading: false }))
            .success(this.success)
            .failure(this.failure)
            .fatal(this.fatal)
            .build();
        return request;
    }
}

