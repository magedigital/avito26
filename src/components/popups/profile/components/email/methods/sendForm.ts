import { enums } from '@/src/global/enums.ts';
import { promo } from '@/src/index.tsx';
import { getError } from '@/src/utils/getError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form?.agreement) {
        await this.asyncSetState({ error: 'Необходимо согласие' });
        return;
    }

    await this.asyncSetState({ error: undefined, loadingKey: 'send' });

    try {
        await promo.auth.register(form.email!);
        localStorage.setItem(enums.REG_EMAIL, form.email!);
        localStorage.setItem(enums.CODE_DATE, (new Date().getTime() + 60_000).toString());
        await setStep({ step: 'code', email: form.email });
    } catch (e) {
        await this.asyncSetState({ error: getError(e) });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
