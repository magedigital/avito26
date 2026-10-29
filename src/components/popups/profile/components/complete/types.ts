import EditorI from '@/src/components/editor/types';
import { StoreT } from '@/src/store/store';

import ProfileI from '../../types';

type PropsT = {
    setStep: ProfileI['setStep'];
    onRender: () => Promise<void>;
    authUser: StoreT['authUser'];
    mainContent: StoreT['mainContent'];
};

type StateT = {
    tgUrl?: string;
};

interface CompleteBlockI extends EditorI<PropsT, StateT> {}

export default CompleteBlockI;
