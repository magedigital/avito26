import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { email } = this.props;

    await this.initTarget({
        data: { email },
        targetName: 'form',
    });
};

export default init;
