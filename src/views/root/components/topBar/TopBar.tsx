import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import Media from '@/src/components/media/Media.tsx';
import { appStore } from '@/src/store/store.tsx';

import TopBarI from './types.ts';

import { onNav } from '../../utils/getNav.ts';
import renderNav from './renders/renderNav.tsx';

class TopBar extends Default<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderNav = renderNav;

    render() {
        const { className, mode, setMenuState } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('topBar _SECTION', className, this.setClass(mode))}
            >
                <div className="topBar__inner _INNER">
                    <img
                        className="topBar__logo _CLICK"
                        src={require('@/src/media/loga-au.svg').default}
                        onClick={() =>
                            onNav({
                                parent: this.parent.current!,
                                item: {
                                    name: 'index',
                                    type: 'ancor',
                                    text: '',
                                    ancorName: 'index',
                                },
                            })
                        }
                    />
                    <Media check={(d) => d === 'desktop'}>
                        {this.renderNav()}
                        <div
                            className="topBar__button _CLICK"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'profilePopup' });
                            }}
                        >
                            К заданиям
                        </div>
                    </Media>
                    <Media check={(d) => d === 'mobile'}>
                        {mode === 'menu' ? (
                            <Icon
                                className="topBar__icon _close"
                                name="menu-close"
                                onClick={() => {
                                    setMenuState(false);
                                }}
                            />
                        ) : (
                            <Icon
                                className="topBar__icon"
                                name="menu-open"
                                onClick={() => {
                                    setMenuState(true);
                                }}
                            />
                        )}
                    </Media>
                </div>
            </div>
        );
    }
}

export default TopBar;
