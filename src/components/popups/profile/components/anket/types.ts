import EditorI from '@/src/components/editor/types';
import { StoreT } from '@/src/store/store';

import ProfileI from '../../types';

type PropsT = {
    setStep: ProfileI['setStep'];
    authUser: StoreT['authUser'];
    onRender: () => Promise<void>;
};

type StateT = {
    error?: string;
    categories?: CategoryT[];
    form?: Partial<Record<string, string>>;
};

export type CategoryT = { code: string; name: string };

interface AnketBlockI extends EditorI<PropsT, StateT> {
    sendForm(this: AnketBlockI): Promise<void>;
}

export default AnketBlockI;
