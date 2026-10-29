import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import CodeInputs from '@/src/components/codeInputs/CodeInputs.tsx';
import Editor from '@/src/components/editor/Editor.tsx';
import Error from '@/src/components/error/Error.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';
import Timer from '@/src/components/timer/Timer.tsx';
import { enums } from '@/src/global/enums.ts';
import { fillNumber } from '@/src/utils/fillNumber.ts';

import init from './methods/init.ts';
import reg from './methods/reg.ts';
import sendForm from './methods/sendForm.ts';

import CodeBlockI from './types.ts';

class CodeBlock extends Editor<CodeBlockI['props'], CodeBlockI['state']> implements CodeBlockI {
    parent: CodeBlockI['parent'];

    constructor(props: CodeBlockI['props']) {
        super(props);

        let sendDate: number | undefined;

        const localDate = localStorage.getItem(enums.CODE_DATE);

        if (localDate && !Number.isNaN(+localDate)) {
            sendDate = +localDate;
        }

        this.state = {
            sendDate,
        };

        this.parent = React.createRef();
    }

    init = init;

    sendForm = sendForm;
    reg = reg;

    render() {
        const { email, error, loadingKey, sendDate } = this.state;
        const { onRender, setStep } = this.props;

        return (
            <div ref={this.parent} className="popup__block _COL">
                <h4 className="popup__blockTitle">Введите код из&nbsp;письма</h4>
                <p className="popup__blockText">
                    Отправили 6-значный код на <span className="_NOWRAP">{email}</span>
                </p>
                <div className="popup__blockCode">
                    <CodeInputs
                        length={6}
                        callback={(code) => {
                            this.setState({ code });
                        }}
                        disabled={!!loadingKey}
                    />
                </div>
                <div className="popup__blockButton">
                    <Button
                        className="_purple"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Отправить код
                    </Button>
                </div>
                <Error error={error} className="popup__blockError" callback={onRender} />
                <div className="popup__blockFoot _COL">
                    <Timer
                        timer={500}
                        render={(d) => {
                            const isTimer = d && new Date().getTime() < d;
                            const diff = (d - new Date().getTime()) / 1_000;
                            const minutes = Math.floor(diff / 60);
                            const seconds = Math.round(diff % 60);

                            return (
                                <div
                                    className={this.getClass(
                                        'popup__blockFootLink',
                                        !isTimer && '_CLICK',
                                    )}
                                    onClick={() => {
                                        if (!isTimer && !loadingKey) {
                                            this.reg();
                                        }
                                    }}
                                >
                                    {isTimer
                                        ? `Отправить код повторно через ${fillNumber(minutes, 2, '0')}:${fillNumber(seconds, 2, '0')}`
                                        : 'Отправить код повторно'}
                                    <LoaderBlock
                                        className="popup__blockFootLinkLoader"
                                        isShow={loadingKey === 'reg'}
                                        loaderClassName="_main"
                                    />
                                </div>
                            );
                        }}
                        date={sendDate ?? 0}
                    />
                    <div
                        className="popup__blockFootLink _CLICK"
                        onClick={() => {
                            localStorage.removeItem(enums.REG_EMAIL);
                            localStorage.removeItem(enums.CODE_DATE);
                            setStep({ step: 'email', email: '' });
                        }}
                    >
                        Изменить почту
                    </div>
                </div>
            </div>
        );
    }
}

export default CodeBlock;
