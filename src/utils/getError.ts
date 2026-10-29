import { ApiError } from '@promoinstance/sdk';

export const getError = (e: unknown): string | undefined => {
    if (e instanceof ApiError) {
        let errorText = e.message;

        if (e.details?.length) {
            errorText = e.details.map((d) => d.issue).join(', ');
        }

        if (!errorText) {
            errorText = 'Неизвестная ошибка';
        }

        return errorText;
    }
};
