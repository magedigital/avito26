import I from '../types.ts';

const setValue: I['setValue'] = async function ({ data, targetName, arrById }) {
    const target = this.state[targetName];

    if (!target || typeof target !== 'object' || Array.isArray(target)) {
        return;
    }

    const savedTargetName = this.getSavedTargetName(targetName);
    const resultTarget = structuredClone(target) as ObjT;
    const errors = this.state.errors;

    Object.keys(data).forEach((key) => {
        const value = data[key];
        const { target: thisTarget, key: thisKey } = this.getValue({
            key,
            targetName,
            target: resultTarget,
            arrById,
        });

        if (thisTarget && thisKey) {
            thisTarget[thisKey] = value;

            const { value: savedValue } = this.getValue({
                key,
                targetName: savedTargetName,
                arrById,
            });

            if (savedValue !== value) {
                this.changes[key] = value;
            } else {
                delete this.changes[key];
            }

            if (errors?.[thisKey]) {
                delete errors[thisKey];
            }
        }
    });

    await this.asyncSetState({
        [targetName]: resultTarget,
        isEdited: Object.keys(this.changes).length > 0,
        errors,
    });

    if (this.props.onRender) {
        await this.props.onRender();
    }
};

export default setValue;
