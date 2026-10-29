import DefaultI from '@/src/components/default/types';

import { QuestionT } from './components/question/types';

type PropsT = {
    questions: QuestionT[];
};

type StateT = {};

interface RulesI extends DefaultI<PropsT, StateT> {}

export default RulesI;
