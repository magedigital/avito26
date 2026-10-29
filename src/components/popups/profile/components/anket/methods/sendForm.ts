import { promo } from '@/src/index.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { getError } from '@/src/utils/getError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    await this.asyncSetState({ error: undefined, loadingKey: 'send' });

    try {
        await promo.profile.updateProfile({
            first_name: form.first_name,
            last_name: form.last_name,
            phone: form.phone ? ['+', form.phone?.replace(/\D/gi, '')].join('') : undefined,
            email: form.email,
            payload: {
                avito_id: form.avito_id,
                category: form.category,
            },
        });
        await checkAuth({});
        await setStep({ step: 'complete' });
    } catch (e) {
        await this.asyncSetState({ error: getError(e) });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
