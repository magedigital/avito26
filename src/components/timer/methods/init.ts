import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { timer = 5_000 } = this.props;

    this.intervals.timer = setInterval(() => {
        this.forceUpdate();
    }, timer);
};

export default init;
