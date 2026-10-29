import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    authUser: StoreT['authUser'];
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
