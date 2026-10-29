import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

import { QuestionT } from './components/question/types';

type PropsT = {
    questions: QuestionT[];
    authUser: StoreT['authUser'];
};

type StateT = {};

interface RulesI extends DefaultI<PropsT, StateT> {}

export default RulesI;
