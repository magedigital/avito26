import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import init from './methods/init.ts';

import TimerI from './types.ts';

class Timer extends Default<TimerI['props'], TimerI['state']> implements TimerI {
    parent: TimerI['parent'];

    constructor(props: TimerI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        const { date, render } = this.props;
        return render(date);
    }
}

export default Timer;
