import React from 'react';

import I from '../types.ts';

import Index from '../pages/index/Index.tsx';

export const rootPages = {
    index: {
        render(this: I) {
            return <Index />;
        },
    },
} as const;
