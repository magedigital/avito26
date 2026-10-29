import I from '../types.ts';

import { AppRouter } from '../../../index.tsx';

const close: I['close'] = async function () {
    if (typeof this.savedPrevPageUrl === 'string') {
        AppRouter.changePage({ href: this.savedPrevPageUrl, savePrevPage: false });
    } else {
        AppRouter.changePage({ pageName: 'index' });
    }
};

export default close;
