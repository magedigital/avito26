import { enums } from '@/src/global/enums';
import { PageNamesT } from '@/src/services/router/static/pages';
import { ProfileT, appStore } from '@/src/store/store';

import { CategoryT } from '../components/popups/profile/components/anket/types';

import { AppRouter, promo } from '..';

export const logoutHandler = async function (): Promise<void> {
    window.userAuthorized = false;
    appStore.getState().setAuthProcess(true);

    promo.clearToken();

    localStorage.removeItem(enums.USER);

    if (window.isBot) {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
        }

        return;
    }

    AppRouter.changePage({ pageName: 'index' });

    setTimeout(async () => {
        appStore.getState().setAuthUser(undefined);
    }, 300);
};

type ParamsT = {
    redirect?: boolean;
};

export default async function checkAuth({ redirect }: ParamsT): Promise<ProfileT | undefined> {
    const token = promo.getToken();

    if (!token) {
        if (localStorage.getItem(enums.USER)) {
            await logoutHandler();
        }

        return;
    }

    let user;

    try {
        user = (await promo.profile.getProfile()) as ProfileT;
    } catch (e) {
        await logoutHandler();

        return;
    }

    if (!user) {
        await logoutHandler();
        return;
    }

    window.profileDataPromise = new Promise((resolve) => {
        try {
            resolve();
            // authRequests.getInfo().then(() => {
            //     resolve();
            // });
        } catch (e) {
            resolve();
        }
    });

    await window.profileDataPromise;

    if (user.phone && user.phone.length === 11) {
        user.phone = user.phone.slice(1);
    }

    if (user.payload?.category && 0) {
        const r = await promo.resources.getDictionary<CategoryT>('dict_categories', {
            search: user.payload?.category as string,
        });

        console.log(r);
    }

    if (redirect) {
    }

    appStore.getState().setAuthUser(user);
    window.userAuthorized = true;
    localStorage.setItem(enums.USER, JSON.stringify(user));
    localStorage.removeItem(enums.REG_EMAIL);
    localStorage.removeItem(enums.CODE_DATE);

    let pageName: PageNamesT | undefined;
    let ids: Record<string, string> | undefined;

    if (pageName) {
        AppRouter.changePage({ pageName, ids, saveSearch: !!window.isBot });
    }

    return user;
}
