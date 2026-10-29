import I from '../types.ts';

const changeHandler: I['changeHandler'] = async function (e) {
    const { onChange, regName, regExp } = this.props;
    let resultValue = e.target.value;
    let curPos;

    if (regName) {
        const regsData = this.regsHandler({ value: resultValue });

        resultValue = regsData.value;
        curPos = regsData.curPos;
    } else if (regExp) {
        resultValue = resultValue.replace(regExp, '');
    }

    await onChange({ value: resultValue });

    if (typeof curPos === 'number') {
        this.setCursorPositions(curPos, curPos);
    }

    this.savedValue = resultValue;
};

export default changeHandler;
