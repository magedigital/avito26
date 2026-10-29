import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Default from '@/src/components/default/Default.tsx';
import { appStore } from '@/src/store/store.tsx';
import { onNav } from '@/src/views/root/utils/getNav.ts';

import HeaderI from './types.ts';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="indexHeader _SECTION" data-ancor="index">
                <div className="indexHeader__head _SECTION">
                    <div className="indexHeader__inner _INNER">
                        <div className="indexHeader__content _COL">
                            <h1 className="indexHeader__title">
                                К вершинам
                                <br />
                                возможностей
                            </h1>
                            <p className="indexHeader__subTitle">
                                Выполняйте задания на Авито и&nbsp;выигрывайте денежные призы
                            </p>
                            <p className="indexHeader__text">
                                Для исполнителей услуг в&nbsp;грузоперевозках, эвакуации
                                и&nbsp;пассажирских перевозках. Получайте баллы за задания
                                на&nbsp;маршруте и&nbsp;поднимайтесь к вершине рейтинга.
                            </p>
                            <div className="indexHeader__cards">
                                <div className="indexHeader__card">
                                    <div className="indexHeader__cardInner">
                                        <i className="indexHeader__cardIcon" />
                                        <p className="indexHeader__cardTitle">6</p>
                                        <p className="indexHeader__cardText">маршрутов</p>
                                    </div>
                                </div>
                                <div className="indexHeader__card">
                                    <div className="indexHeader__cardInner">
                                        <i className="indexHeader__cardIcon" />
                                        <p className="indexHeader__cardTitle">18</p>
                                        <p className="indexHeader__cardText">призовых мест</p>
                                    </div>
                                </div>
                                <div className="indexHeader__card">
                                    <div className="indexHeader__cardInner">
                                        <i className="indexHeader__cardIcon" />
                                        <p className="indexHeader__cardSupport">до</p>
                                        <p className="indexHeader__cardTitle">60 000 ₽</p>
                                        <p className="indexHeader__cardText">победителям</p>
                                    </div>
                                </div>
                            </div>
                            <div className="indexHeader__buttons">
                                <div className="indexHeader__button">
                                    <Button
                                        className="_main"
                                        onClick={() => {
                                            appStore.getState().setPopup({ name: 'profilePopup' });
                                        }}
                                    >
                                        Зарегистрироваться
                                    </Button>
                                </div>
                                <div className="indexHeader__button">
                                    <Button
                                        className="_sub"
                                        onClick={() => {
                                            onNav({
                                                parent: this.parent.current!,
                                                item: {
                                                    name: 'rules',
                                                    type: 'ancor',
                                                    ancorName: 'rules',
                                                    text: '',
                                                },
                                            });
                                        }}
                                    >
                                        Как это работает
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indexHeader__foot _SECTION" data-ancor="prizes">
                    <div className="indexHeader__inner _INNER">
                        <div className="indexHeader__prizes">
                            <h2 className="indexHeader__prizesTitle _TITLE">
                                На вершине — <br className="_MOBILE" />
                                ваша награда
                            </h2>
                            <p className="indexHeader__prizesSubTitle">
                                Три победителя на каждом из шести маршрутов.
                            </p>
                            <p className="indexHeader__prizesText _TEXT">
                                Наберите больше баллов, чем другие участники вашего маршрута, и
                                войдите в тройку лучших.
                            </p>
                            <div className="indexHeader__prizesCards">
                                <div className="indexHeader__prizesCard">
                                    <div className="indexHeader__prize">
                                        <div className="indexHeader__prizeInner _COL">
                                            <div className="indexHeader__prizeBadge">1 место</div>
                                            <p className="indexHeader__prizeTitle">60 000 ₽</p>
                                            <p className="indexHeader__prizeText">
                                                на каждом маршруте
                                            </p>
                                            <img
                                                src={require('@/src/media/prize-1.png')}
                                                className="indexHeader__prizeThumb"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="indexHeader__prizesCard">
                                    <div className="indexHeader__prize">
                                        <div className="indexHeader__prizeInner _COL">
                                            <div className="indexHeader__prizeBadge">2 место</div>
                                            <p className="indexHeader__prizeTitle">45 000 ₽</p>
                                            <p className="indexHeader__prizeText">
                                                на каждом маршруте
                                            </p>
                                            <img
                                                src={require('@/src/media/prize-2.png')}
                                                className="indexHeader__prizeThumb"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="indexHeader__prizesCard">
                                    <div className="indexHeader__prize">
                                        <div className="indexHeader__prizeInner _COL">
                                            <div className="indexHeader__prizeBadge">3 место</div>
                                            <p className="indexHeader__prizeTitle">30 000 ₽</p>
                                            <p className="indexHeader__prizeText">
                                                на каждом маршруте
                                            </p>
                                            <img
                                                src={require('@/src/media/prize-3.png')}
                                                className="indexHeader__prizeThumb"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="indexHeader__offer">
                            <div className="indexHeader__offerInner">
                                <h3 className="indexHeader__offerTitle">
                                    1 000 бонусов Авито — первым 10 участникам
                                </h3>
                                <p className="indexHeader__offerText">
                                    Выполните все шесть недельных заданий раньше остальных.{' '}
                                    <br className="_DESKTOP" />
                                    Первые 10 участников получат по 1 000 бонусов Авито.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
