import { v4 } from 'uuid';

import React from 'react';

import List from '@/src/components/list/List.tsx';

import AnketBlock from '../components/anket/Anket.tsx';
import CodeBlock from '../components/code/Code.tsx';
import CompleteBlock from '../components/complete/Complete.tsx';
import EmailBlock from '../components/email/Email.tsx';

import I from '../types.ts';

import { profileSteps } from '../static/steps.ts';

const renderSteps: I['renderSteps'] = function () {
    const { step, email, renderedKey } = this.state;
    const { authUser, mainContent } = this.props;

    return (
        <List
            renderKey={[step, renderedKey].join('')}
            items={[{ _id: step }]}
            parentClass="popup__blocks"
            itemClass="popup__blocksItem"
            itemStyleProps={[]}
            parentStyleProps={['width']}
            parentRealStyleProps={['width']}
            render={({ item }) => ({
                item: (
                    <div className="popup__blockInner _FULL_W">
                        {item._id === 'email' && (
                            <EmailBlock
                                mainContent={mainContent}
                                email={email}
                                setStep={this.setStep.bind(this)}
                                onRender={async () =>
                                    await this.asyncSetState({ renderedKey: v4() })
                                }
                            />
                        )}
                        {item._id === 'code' && (
                            <CodeBlock
                                email={email}
                                setStep={this.setStep.bind(this)}
                                onRender={async () =>
                                    await this.asyncSetState({ renderedKey: v4() })
                                }
                            />
                        )}
                        {item._id === 'anket' && (
                            <AnketBlock
                                authUser={authUser}
                                setStep={this.setStep.bind(this)}
                                onRender={async () =>
                                    await this.asyncSetState({ renderedKey: v4() })
                                }
                            />
                        )}
                        {item._id === 'complete' && (
                            <CompleteBlock
                                mainContent={mainContent}
                                authUser={authUser}
                                setStep={this.setStep.bind(this)}
                                onRender={async () =>
                                    await this.asyncSetState({ renderedKey: v4() })
                                }
                            />
                        )}
                    </div>
                ),
            })}
            allItems={Object.keys(profileSteps)}
            currentItem={step}
            resizeWidth={true}
        />
    );
};

export default renderSteps;
