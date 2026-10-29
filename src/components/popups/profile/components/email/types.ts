import EditorI from '@/src/components/editor/types';
import { StoreT } from '@/src/store/store';

import ProfileI from '../../types';

type PropsT = {
    setStep: ProfileI['setStep'];
    email: string | undefined;
    onRender: () => Promise<void>;
    mainContent: StoreT['mainContent'];
};

type StateT = {
    form?: Partial<{ email: string; agreement: boolean }>;
    error?: string;
};

interface EmailBlockI extends EditorI<PropsT, StateT> {
    sendForm(this: EmailBlockI): Promise<void>;
}

export default EmailBlockI;
