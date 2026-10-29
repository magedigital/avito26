import React from 'react';

import Icon from '@/src/components/icon/Icon.tsx';
import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

import { profileSteps } from '../static/steps.ts';

const renderHead: I['renderHead'] = function () {
    const { step } = this.state;
    const stepIndex = Object.keys(profileSteps).indexOf(step);

    return (
        <div className={this.getClass('popup__head _FULL_W', step === 'complete' && '_hidden')}>
            <div className={this.getClass('popup__headSteps')}>
                {(Object.keys(profileSteps) as (keyof typeof profileSteps)[])
                    .filter((k) => k !== 'complete')
                    .map((k, i) => (
                        <div className="popup__headStepsItem" key={k}>
                            <div className="popup__headStep">
                                <div
                                    className="popup__headStepBar"
                                    style={
                                        i <= stepIndex ? { background: profileSteps[k].fill } : {}
                                    }
                                />
                                <p
                                    className="popup__headStepTitle"
                                    style={i <= stepIndex ? { color: profileSteps[k].fill } : {}}
                                >
                                    {profileSteps[k].title}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <Icon
                className="popup__headClose _CLICK"
                name="popup-close"
                onClick={() => {
                    appStore.getState().closePopup({ name: 'profilePopup' });
                }}
            />
        </div>
    );
};

export default renderHead;
