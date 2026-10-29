import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Editor from '@/src/components/editor/Editor.tsx';
import Error from '@/src/components/error/Error.tsx';
import Field from '@/src/components/field/Field.tsx';

import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import EmailBlockI from './types.ts';

class EmailBlock extends Editor<EmailBlockI['props'], EmailBlockI['state']> implements EmailBlockI {
    parent: EmailBlockI['parent'];

    constructor(props: EmailBlockI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;
    sendForm = sendForm;

    render() {
        const { form, error, loadingKey } = this.state;
        const { onRender, mainContent } = this.props;

        return (
            <div ref={this.parent} className="popup__block _COL">
                <h4 className="popup__blockTitle">Вход или регистрация</h4>
                <p className="popup__blockText">
                    Введите почту — отправим код подтверждения. Пароль не нужен: как и в следующий
                    раз.
                </p>
                <div className="popup__blockField">
                    <Field
                        name="email"
                        type="input"
                        support="Электронная почта"
                        input={{ support: 'name@example.ru' }}
                        value={form?.email ?? ''}
                        setValue={async (d) => {
                            await this.setValue({ data: { email: d.value }, targetName: 'form' });
                        }}
                    />
                </div>
                <div className="popup__blockField">
                    <Field
                        name="agreement"
                        type="checkbox"
                        support="Электронная почта"
                        checkbox={{
                            content: (
                                <>
                                    Соглашаюсь с{' '}
                                    <a
                                        href={mainContent?.docs?.rules}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        условиями акции
                                    </a>
                                    .{' '}
                                    <a
                                        href="https://www.avito.ru/legal/rules/privacy-policy"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Политика конфиденциальности
                                    </a>
                                    .
                                </>
                            ),
                        }}
                        value={form?.agreement ?? false}
                        setValue={async (d) => {
                            await this.setValue({
                                data: { agreement: d.value },
                                targetName: 'form',
                            });
                        }}
                    />
                </div>
                <div className="popup__blockButton">
                    <Button
                        className="_purple"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Получить код
                    </Button>
                </div>
                <Error error={error} className="popup__blockError" callback={onRender} />
            </div>
        );
    }
}

export default EmailBlock;
