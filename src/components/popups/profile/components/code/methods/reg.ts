import { enums } from '@/src/global/enums.ts';
import { promo } from '@/src/index.tsx';
import { getError } from '@/src/utils/getError.ts';

import I from '../types.ts';

const reg: I['reg'] = async function () {
    const { email } = this.props;

    if (!email) {
        return;
    }

    await this.asyncSetState({ error: undefined, loadingKey: 'reg' });

    try {
        await promo.auth.register(email);
        localStorage.setItem(enums.CODE_DATE, (new Date().getTime() + 60_000).toString());
        await this.asyncSetState({
            sendDate: new Date().getTime() + 60_000,
        });
    } catch (e) {
        await this.asyncSetState({ error: getError(e) });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default reg;
