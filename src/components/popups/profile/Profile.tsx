import React from 'react';

import Popup from '@/src/components/popup/Popup.tsx';
import { enums } from '@/src/global/enums.ts';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import init from './methods/init.ts';
import setStep from './methods/setStep.ts';

import ProfileI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderSteps from './renders/renderSteps.tsx';

class Profile extends Popup<ProfileI['props'], ProfileI['state']> implements ProfileI {
    parent: ProfileI['parent'];

    constructor(props: ProfileI['props']) {
        super(props);

        const { authUser } = this.props;

        let step: ProfileI['state']['step'] = 'email';
        const regEmail = localStorage.getItem(enums.REG_EMAIL) ?? undefined;
        const email = authUser?.email ?? regEmail;

        if (authUser) {
            if (authUser.status === 'ANKET_REQUIRED') {
                step = 'anket';
            } else {
                step = 'complete';
            }
        } else if (regEmail) {
            step = 'code';
        }

        this.state = {
            step,
            email,
        };

        this.parent = React.createRef();
    }

    name = 'profilePopup' as const;

    init = init;
    setStep = setStep;

    renderContent = renderContent;
    renderHead = renderHead;
    renderSteps = renderSteps;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    profilePopup: s.profilePopup,
    device: s.device,
    authUser: s.authUser,
    mainContent: s.mainContent,
});

export default WithStore(Profile, mapStore);
