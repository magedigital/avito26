import { promo } from '@/src/index.tsx';
import Phone from '@/src/services/phone/Phone.service.ts';

import I, { CategoryT } from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { authUser, onRender } = this.props;

    await this.initTarget({
        data: {
            first_name: authUser?.first_name,
            last_name: authUser?.last_name,
            phone: authUser?.phone ? new Phone().format(authUser.phone) : undefined,
            email: authUser?.email,
            avito_id: authUser?.payload?.avito_id,
            category: authUser?.payload?.category,
        },
        targetName: 'form',
    });

    try {
        const r = await promo.resources.getDictionary<CategoryT>('dict_categories', { limit: 100 });
        await this.asyncSetState({ categories: r.items });
        await onRender();
    } catch (e) {}
};

export default init;
