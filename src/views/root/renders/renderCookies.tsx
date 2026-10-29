import React from 'react';

import Fade from '@/src/components/fade/Fade.tsx';

import Cookies from '../components/cookies/Cookies.tsx';

import I from '../types.ts';

const renderCookies: I['renderCookies'] = function () {
    const { isCookiesShow } = this.props;

    if (1) {
        return;
    }

    return (
        <Fade className="body__cookies" isShow={!!isCookiesShow}>
            <Cookies />
        </Fade>
    );
};

export default renderCookies;
