import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { email } = this.props;

    await this.asyncSetState({ email });
};

export default init;
