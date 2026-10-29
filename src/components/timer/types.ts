import DefaultI from '@/src/components/default/types';

type PropsT = {
    date: number;
    render: (d: number) => React.ReactNode;
    timer?: number;
};

type StateT = {};

interface TimerI extends DefaultI<PropsT, StateT> {}

export default TimerI;
