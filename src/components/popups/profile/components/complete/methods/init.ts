import { promo } from '@/src/index.tsx';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    try {
        const { link_token } = await promo.chatBot.telegramLink();
        const botUsername = 'my_promo_bot'; // из ресурса или конфигурации
        const url = `https://t.me/${botUsername}?start=${link_token}`;

        await this.asyncSetState({ tgUrl: url });
    } catch (e) {}
};

export default init;
