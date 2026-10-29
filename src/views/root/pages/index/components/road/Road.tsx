import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Default from '@/src/components/default/Default.tsx';
import { appStore } from '@/src/store/store.tsx';

import RoadI from './types.ts';

class Road extends Default<RoadI['props'], RoadI['state']> implements RoadI {
    parent: RoadI['parent'];

    constructor(props: RoadI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { authUser } = this.props;

        return (
            <div ref={this.parent} className="indexRoad _SECTION">
                <div className="indexRoad__inner _INNER">
                    <h3 className="indexRoad__title _TITLE">
                        Свой маршрут. <br className="_MOBILE" />
                        Своя вершина
                    </h3>
                    <p className="indexRoad__text _TEXT">
                        Авито определит ваш маршрут по виду услуг, активности и объёму расходов
                        на&nbsp;сервисе. <br className="_DESKTOP" />
                        Вы соревнуетесь лично с&nbsp;исполнителями своего направления — участниками
                        того же маршрута.
                    </p>
                    <div className="indexRoad__cards">
                        <div className="indexRoad__cardsItem">
                            <div className="indexRoad__card">
                                <div className="indexRoad__cardInner _COL">
                                    <h4 className="indexRoad__cardTitle">Грузоперевозки</h4>
                                    <div className="indexRoad__cardOptions _COL">
                                        <div className="indexRoad__cardOption">Базовый маршрут</div>
                                        <div className="indexRoad__cardOption">
                                            Экспертный маршрут
                                        </div>
                                    </div>
                                    <img
                                        src={require('@/src/media/auto-1.png')}
                                        className="indexRoad__cardThumb"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="indexRoad__cardsItem">
                            <div className="indexRoad__card">
                                <div className="indexRoad__cardInner _COL">
                                    <h4 className="indexRoad__cardTitle">Пассажирские перевозки</h4>
                                    <div className="indexRoad__cardOptions _COL">
                                        <div className="indexRoad__cardOption">Базовый маршрут</div>
                                        <div className="indexRoad__cardOption">
                                            Экспертный маршрут
                                        </div>
                                    </div>
                                    <img
                                        src={require('@/src/media/auto-2.png')}
                                        className="indexRoad__cardThumb"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="indexRoad__cardsItem">
                            <div className="indexRoad__card">
                                <div className="indexRoad__cardInner _COL">
                                    <h4 className="indexRoad__cardTitle">Эвакуаторы</h4>
                                    <div className="indexRoad__cardOptions _COL">
                                        <div className="indexRoad__cardOption">Базовый маршрут</div>
                                        <div className="indexRoad__cardOption">
                                            Экспертный маршрут
                                        </div>
                                    </div>
                                    <img
                                        src={require('@/src/media/auto-3.png')}
                                        className="indexRoad__cardThumb"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="indexRoad__info">
                        На каждом маршруте — отдельный рейтинг и свои пороги заданий. Каждый
                        участник набирает баллы индивидуально и&nbsp;проходит только один маршрут.
                    </p>
                    <div className="indexRoad__button">
                        <Button
                            className="_main"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'profilePopup' });
                            }}
                        >
                            {authUser ? 'К заданиям' : 'Зарегистрироваться'}
                        </Button>
                    </div>
                    <div className="indexRoad__instruction">
                        <h3 className="indexRoad__instructionTitle _TITLE">
                            Ваш маршрут к&nbsp;вершине
                        </h3>
                        <p className="indexRoad__instructionText">2 ноября - 21 декабря 2026г</p>
                        <div className="indexRoad__instructionContent">
                            <div className="indexRoad__instructionContentBlock">
                                <p className="indexRoad__instructionContentBlockText _TEXT">
                                    Со старта и до завершения конкурса вам доступны два постоянных
                                    задания: получайте новые отзывы и выполняйте задание по расходам
                                    на продвижение. Отзывы учитываются за весь конкурс, расходы —
                                    отдельно за каждую неделю.
                                </p>
                                <p className="indexRoad__instructionContentBlockText _TEXT">
                                    Дополнительно еженедельно открывается новое задание. Условия,
                                    сроки и баллы смотрите в&nbsp;Telegram-боте.
                                </p>
                            </div>
                            <div className="indexRoad__instructionContentBlock _info">
                                <p className="indexRoad__instructionContentBlockTitle">
                                    Что предстоит делать
                                </p>
                                <div className="indexRoad__instructionContentBlockOptions">
                                    <div className="indexRoad__instructionContentBlockOption">
                                        <b>Пробовать инструменты Авито:</b> подписку и выделение
                                        объявлений.
                                    </div>
                                    <div className="indexRoad__instructionContentBlockOption">
                                        <b>Общаться с клиентами:</b> отвечать на сообщения в чатах
                                        и&nbsp;получать новые отзывы.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="indexRoad__info">
                        Часть заданий связана с использованием платных услуг Авито. Пороги
                        выполнения задания зависят от вашего маршрута. <br />
                        Точные условия каждого задания доступны в правилах конкурса.
                    </div>
                </div>
            </div>
        );
    }
}

export default Road;
