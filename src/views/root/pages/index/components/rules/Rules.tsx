import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Default from '@/src/components/default/Default.tsx';
import { appStore } from '@/src/store/store.tsx';

import Question from './components/question/Question.tsx';

import RulesI from './types.ts';

class Rules extends Default<RulesI['props'], RulesI['state']> implements RulesI {
    parent: RulesI['parent'];

    constructor(props: RulesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { questions, authUser } = this.props;

        return (
            <div ref={this.parent} className="indexRules _SECTION" data-ancor="rules">
                <div className="indexRules__top"></div>
                <div className="indexRules__inner _INNER">
                    <h3 className="indexRules__title _TITLE">Как присоединиться</h3>
                    <div className="indexRules__cards">
                        <div className="indexRules__cardsItem">
                            <div className="indexRules__card _COL">
                                <h4 className="indexRules__cardTitle">Зарегистрируйтесь</h4>
                                <p className="indexRules__cardText">
                                    Подтвердите почту кодом и&nbsp;заполните анкету, указав
                                    свой&nbsp;Avito ID и вид услуг.
                                </p>
                                <img
                                    className="indexRules__cardThumb"
                                    src={require('@/src/media/step-1.png')}
                                />
                            </div>
                        </div>
                        <div className="indexRules__cardsItem">
                            <div className="indexRules__card _COL">
                                <h4 className="indexRules__cardTitle">Перейдите в бот</h4>
                                <p className="indexRules__cardText">
                                    Откройте Telegram-бот из&nbsp;личного кабинета.{' '}
                                    <br className="_DESKTOP" />
                                    Получайте в&nbsp;нём задания и&nbsp;смотрите результаты.
                                </p>
                                <img
                                    className="indexRules__cardThumb"
                                    src={require('@/src/media/step-2.png')}
                                />
                            </div>
                        </div>
                        <div className="indexRules__cardsItem">
                            <div className="indexRules__card _COL">
                                <h4 className="indexRules__cardTitle">Выполняйте задания</h4>
                                <p className="indexRules__cardText">
                                    Выполняйте действия <br />
                                    на Авито. За&nbsp;выполнение и&nbsp;перевыполнение получайте
                                    баллы по&nbsp;условиям своего маршрута.
                                </p>
                                <img
                                    className="indexRules__cardThumb"
                                    src={require('@/src/media/step-3.png')}
                                />
                            </div>
                        </div>
                        <div className="indexRules__cardsItem">
                            <div className="indexRules__card _COL">
                                <h4 className="indexRules__cardTitle">Следите за рейтингом</h4>
                                <p className="indexRules__cardText">
                                    Проверяйте баллы и своё место в&nbsp;боте. Рейтинг обновляется
                                    ежедневно до&nbsp;12:00 по&nbsp;московскому времени.
                                </p>
                                <img
                                    className="indexRules__cardThumb"
                                    src={require('@/src/media/step-4.png')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="indexRules__button">
                        <Button
                            className="_main"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'profilePopup' });
                            }}
                        >
                            Начать восхождение
                        </Button>
                    </div>
                    <div className="indexRules__faq" data-ancor="faq">
                        <h4 className="indexRules__faqTitle _TITLE">Перед восхождением</h4>
                        <p className="indexRules__faqText _TEXT">
                            Не нашли ответ? Задайте вопрос в Telegram-боте.
                        </p>
                        <div className="indexRules__faqQuestions">
                            {questions.map((question, i) => (
                                <div className="indexRules__faqQuestionsItem" key={i}>
                                    <Question question={question} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="indexRules__offer" data-ancor="winners">
                        <h3 className="indexRules__offerTitle _TITLE">Готовы к своей вершине?</h3>
                        <div className="indexRules__offerBanner">
                            <div className="indexRules__offerBannerInner">
                                <div className="indexRules__offerBannerContent _COL">
                                    <h4 className="indexRules__offerBannerTitle">
                                        Победители будут объявлены 21.12.2026
                                    </h4>
                                    <p className="indexRules__offerBannerText">
                                        Присоединяйтесь к конкурсу, выполняйте задания
                                        и&nbsp;поборитесь за денежный приз на своём маршруте.
                                    </p>
                                    <div className="indexRules__offerBannerButton">
                                        <Button
                                            className="_main"
                                            onClick={() => {
                                                appStore
                                                    .getState()
                                                    .setPopup({ name: 'profilePopup' });
                                            }}
                                        >
                                            {authUser ? 'К заданиям' : 'Зарегистрироваться'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rules;
