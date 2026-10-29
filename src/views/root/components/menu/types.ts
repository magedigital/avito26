import DefaultI from '@/src/components/default/types';
import PageI from '@/src/components/page/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    setState: PageI['setMenuState'];
    authUser: StoreT['authUser'];
};

type StateT = {};

interface MenuI extends DefaultI<PropsT, StateT> {
    renderTop(this: MenuI): React.ReactNode;
    renderNav(this: MenuI): React.ReactNode;
}

export default MenuI;
