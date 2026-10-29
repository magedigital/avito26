import { promo } from '@/src/index.tsx';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { mainContent } = this.props;

    try {
        const { link_token } = await promo.chatBot.telegramLink();
        const url = `https://t.me/${mainContent?.botUserName}?start=${link_token}`;
        await this.asyncSetState({ tgUrl: url });
    } catch (e) {}
};

export default init;
