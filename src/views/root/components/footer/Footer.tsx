import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import StringService from '@/src/services/string/String.service.ts';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import FooterI from './types.ts';

class Footer extends Default<FooterI['props'], FooterI['state']> implements FooterI {
    parent: FooterI['parent'];

    constructor(props: FooterI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { mainContent, className, mode } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('footer _SECTION', className, this.setClass(mode))}
            >
                <div className="footer__inner _INNER">
                    <img
                        className="footer__logo"
                        src={require('@/src/media/loga-au.svg').default}
                    />
                    <div className="footer__nav _ROW _ROW_CENTER">
                        <a
                            href={mainContent?.docs?.rules}
                            target="_blank"
                            rel="noreferrer"
                            className="footer__navLink _CLICK"
                        >
                            Правила акции
                        </a>
                        <a
                            href={mainContent?.docs?.policy}
                            target="_blank"
                            rel="noreferrer"
                            className="footer__navLink _CLICK"
                        >
                            Политика конфиденциальности
                        </a>
                        <a
                            href={mainContent?.docs?.personal}
                            target="_blank"
                            rel="noreferrer"
                            className="footer__navLink _CLICK"
                        >
                            Обработка персональных данных
                        </a>
                    </div>
                    <p
                        className="footer__text"
                        dangerouslySetInnerHTML={{
                            __html: new StringService().setSpaces(mainContent?.footerDisclaimer),
                        }}
                    ></p>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Footer, mapStore);
