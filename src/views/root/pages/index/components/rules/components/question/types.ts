import DefaultI from '@/src/components/default/types';

type PropsT = {
    isShow?: boolean;
    question: QuestionT;
};

type StateT = {
    isShow?: boolean;
};

export type QuestionT = {
    name: string;
    description: string;
};

interface QuestionI extends DefaultI<PropsT, StateT> {
    height?: number;

    setSize(this: QuestionI): void;
}

export default QuestionI;
