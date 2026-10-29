import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.setSize();
    this.forceUpdate();
};

export default init;
