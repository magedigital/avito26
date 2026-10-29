import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import keysCallback from './methods/keysCallback.ts';

import MenuI from './types.ts';

import renderNav from './renders/renderNav.tsx';
import renderTop from './renders/renderTop.tsx';

class Menu extends Default<MenuI['props'], MenuI['state']> implements MenuI {
    parent: MenuI['parent'];

    constructor(props: MenuI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    keysCallback = keysCallback;

    renderTop = renderTop;
    renderNav = renderNav;

    render() {
        return (
            <div ref={this.parent} className="menu">
                {this.renderTop()}
                <div className="menu__wrapper _SECTION">
                    <div className="menu__inner _INNER">{this.renderNav()}</div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    authUser: s.authUser,
});

export default WithStore(Menu, mapStore);
