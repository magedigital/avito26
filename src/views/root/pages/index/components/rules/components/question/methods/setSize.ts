import I from '../types.ts';

const setSize: I['setSize'] = function () {
    const innerNode = this.parent.current!.querySelector<HTMLElement>(
        '.indexRules__faqQuestionInner',
    );

    if (!innerNode) {
        return;
    }

    this.height = innerNode.offsetHeight;
};

export default setSize;
