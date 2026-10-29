import I from '../types.ts';

const setStep: I['setStep'] = async function (this: I, { step, ...props }) {
    await this.asyncSetState({ step, ...props });
};

export default setStep;
