import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import StringService from '@/src/services/string/String.service.ts';

import init from './methods/init.ts';
import setSize from './methods/setSize.ts';

import QuestionI from './types.ts';

class Question extends Default<QuestionI['props'], QuestionI['state']> implements QuestionI {
    parent: QuestionI['parent'];
    height: QuestionI['height'];

    constructor(props: QuestionI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    setSize = setSize;

    render() {
        const { isShow } = this.state;
        const { question } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('indexRules__faqQuestion _CLICK', isShow && '_show')}
                onClick={() => {
                    this.setState({ isShow: !isShow });
                }}
            >
                <h3 className="indexRules__faqQuestionTitle">{question.name}</h3>
                <Icon name="faq-drop" className="indexRules__faqQuestionIcon" />
                <div
                    className="indexRules__faqQuestionContent"
                    style={{ height: isShow ? this.height : 0 }}
                >
                    <div
                        className="indexRules__faqQuestionInner"
                        dangerouslySetInnerHTML={{
                            __html: new StringService().setSpaces(question.description),
                        }}
                    ></div>
                </div>
            </div>
        );
    }
}

export default Question;
