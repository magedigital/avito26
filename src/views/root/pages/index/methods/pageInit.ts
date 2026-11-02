import { promo } from '@/src/index.tsx';
import getLocation from '@/src/utils/getLocation.ts';
import scrollToBlock from '@/src/utils/scrollToBlock.ts';

import { QuestionT } from '../components/rules/components/question/types.ts';

import I from '../types.ts';

const pageInit: I['pageInit'] = async function (this: I) {
    const { search } = getLocation();

    if (typeof search.ancor === 'string') {
        const scrollNode = this.parent
            .current!.closest('.page')!
            .querySelector<HTMLElement>('.page__scroll');
        const blockNode = document.querySelector<HTMLElement>(`[data-ancor="${search.ancor}"]`);

        if (scrollNode && blockNode) {
            scrollToBlock({ blockNode, scrollNode, duration: 0 });
        }
    }

    try {
        const r = await promo.resources.getResources(['faq']);
        const data = r.faq?.value as { items: any[] };
        const questions = data.items as QuestionT[];

        await this.asyncSetState({ questions });
    } catch (e) {}
};

export default pageInit;
