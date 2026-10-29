import React from 'react';

import { promo } from '@/src/index.tsx';
import { appStore } from '@/src/store/store.tsx';
import { logoutHandler } from '@/src/utils/checkAuth.ts';

import I from '../types.ts';

import { getNav, onNav } from '../../../utils/getNav.ts';

const renderNav: I['renderNav'] = function () {
    const { setState, authUser } = this.props;
    const nav = getNav();

    return (
        <div className="menu__nav _COL">
            {nav.map((i) => (
                <div
                    className={this.getClass(
                        'menu__navItem _CLICK _COL _COL_CENTER',
                        this.setClass(i.name),
                    )}
                    key={i.name}
                    onClick={() => {
                        onNav({ parent: this.parent.current!, item: i });

                        setState(false);
                    }}
                >
                    {i.text}
                </div>
            ))}
            {authUser ? (
                <div
                    className="menu__navButton _ROW _ROW_CENTER _profile"
                    onClick={async () => {
                        try {
                            await promo.auth.logout();
                            await logoutHandler();
                        } catch (e) {}
                        setState(false);
                    }}
                >
                    Выход
                </div>
            ) : (
                <div
                    className="menu__navButton _ROW _ROW_CENTER _profile"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'profilePopup' });
                        setState(false);
                    }}
                >
                    К заданиям
                </div>
            )}
        </div>
    );
};

export default renderNav;
