import EditorI from '@/src/components/editor/types';

import ProfileI from '../../types';

type PropsT = {
    email: string | undefined;
    setStep: ProfileI['setStep'];
    onRender: () => Promise<void>;
};

type StateT = {
    email?: string;
    code?: string;
    error?: string;
    sendDate?: number;
};

interface CodeBlockI extends EditorI<PropsT, StateT> {
    sendForm(this: CodeBlockI): Promise<void>;
    reg(this: CodeBlockI): Promise<void>;
}

export default CodeBlockI;
