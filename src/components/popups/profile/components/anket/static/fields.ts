import { FieldT } from '@/src/components/field/types';

export const anketFields: Record<string, FieldT> = {
    first_name: {
        type: 'input',
        support: 'Имя',
        input: { support: 'Ваше имя' },
    },
    last_name: {
        type: 'input',
        support: 'Фамилия',
        input: { support: 'Ваша фамилия' },
    },
    phone: {
        type: 'input',
        support: 'Номер мобильного телефона',
        input: { support: '+7 (900) 000-00-00', reg: 'phone' },
    },
    avito_id: {
        type: 'input',
        support: 'Avito ID',
        input: { support: 'Только цифры', regExp: /\D/gi },
    },
};
