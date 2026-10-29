import { StoreT } from '../../../store/store';

const pages = {
    index: {
        links: ['', undefined],
        isPublic: true,
    },
} as const;

type PageT = {
    links: readonly (string | undefined)[];
} & Partial<{
    level: number;
    parentName: PageNamesT;
    isPopup: boolean;
    content: string;
    group: string;
    className: string;
    isPublic: boolean;
    mainPage: string | ((data: StoreT) => string);
    check: (s: StoreT) => { pageName: PageNamesT; callback?: () => void } | undefined;
    withId: boolean;
    forBot: boolean;
}>;

type PageNamesT = keyof typeof pages;

export default pages;

export type { PageT, PageNamesT };
