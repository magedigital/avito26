import PopupI from '@/src/components/popup/types';
import { StoreT } from '@/src/store/store';

import { profileSteps } from './static/steps';

type PropsT = {
    profilePopup: StoreT['profilePopup'];
    device: StoreT['device'];
    authUser: StoreT['authUser'];
    mainContent: StoreT['mainContent'];
};

type StateT = {
    step: keyof typeof profileSteps;
} & Partial<{
    renderedKey: string;
    email: string;
}>;

interface ProfileI extends PopupI<PropsT, StateT> {
    setStep(d: { step: keyof typeof profileSteps } & Partial<{ email: string }>): Promise<void>;

    renderHead(this: ProfileI): React.ReactNode;
    renderSteps(this: ProfileI): React.ReactNode;
}

export default ProfileI;
