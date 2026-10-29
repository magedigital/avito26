import { promo } from '@/src/index.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { getError } from '@/src/utils/getError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { code } = this.state;
    const { setStep, email } = this.props;

    if (!email) {
        return;
    }

    if (!code) {
        await this.asyncSetState({ error: 'Введите все 6 цифр' });
        return;
    }

    await this.asyncSetState({ error: undefined, loadingKey: 'send' });

    try {
        await promo.auth.verify(email, code);
        await checkAuth({});
        await setStep({ step: 'anket' });
    } catch (e) {
        await this.asyncSetState({ error: getError(e) });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
