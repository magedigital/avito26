import { promo } from '@/src/index.tsx';
import { getError } from '@/src/utils/getError.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { mainContent, onRender } = this.props;

    try {
        const { link_token } = await promo.chatBot.telegramLink();
        const url = `https://t.me/${mainContent?.botUserName}?start=${link_token}`;
        await this.asyncSetState({ tgUrl: url });
        await onRender();
    } catch (e) {
        await this.asyncSetState({ tgError: getError(e) });
    }
};

export default init;
