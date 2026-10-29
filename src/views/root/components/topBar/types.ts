import DefaultI from '@/src/components/default/types';
import PageI from '@/src/components/page/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    mode?: 'popup' | 'inner' | 'menu';
    setMenuState: PageI['setMenuState'];
    pageCloseHandler?: () => void;
    authUser: StoreT['authUser'];
};

type StateT = {};

interface TopBarI extends DefaultI<PropsT, StateT> {
    renderNav(this: TopBarI): React.ReactNode;
}

export default TopBarI;
