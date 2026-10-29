import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Editor from '@/src/components/editor/Editor.tsx';
import Phone from '@/src/services/phone/Phone.service.ts';

import init from './methods/init.ts';

import CompleteBlockI from './types.ts';

class CompleteBlock
    extends Editor<CompleteBlockI['props'], CompleteBlockI['state']>
    implements CompleteBlockI
{
    parent: CompleteBlockI['parent'];

    constructor(props: CompleteBlockI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        const { tgUrl } = this.state;
        const { authUser, setStep } = this.props;

        if (!authUser) {
            return;
        }

        return (
            <div ref={this.parent} className="popup__block _COL">
                <h4 className="popup__blockTitle _success">Успешная регистрация!</h4>
                <p className="popup__blockText">
                    Перейдите в Telegram-бот. Вводить данные повторно не потребуется. Ссылка на бот
                    содержит ваш уникальный идентификатор, никому его не передавайте.
                </p>
                <div className="popup__blockAnket">
                    <div className="popup__blockAnketField">
                        <span>Участник</span>
                        <p>
                            {[authUser.first_name, authUser.last_name].filter((t) => t).join(' ')}
                        </p>
                    </div>
                    <div className="popup__blockAnketField">
                        <span>Почта</span>
                        <p>{authUser.email}</p>
                    </div>
                    <div className="popup__blockAnketField">
                        <span>Телефон</span>
                        <p>{new Phone().format(authUser.phone)}</p>
                    </div>
                    <div className="popup__blockAnketField">
                        <span>Avito ID</span>
                        <p>{authUser.payload?.avito_id as string}</p>
                    </div>
                    <div className="popup__blockAnketField">
                        <span>Вид услуги</span>
                        <p>{authUser.payload?.category as string}</p>
                    </div>
                </div>
                <div className="popup__blockButton">
                    <Button className="_purple" href={tgUrl}>
                        Перейти в Telegram-бот
                    </Button>
                </div>
                <div className="popup__blockButton">
                    <Button
                        className="_purpleEmpty"
                        onClick={() => {
                            setStep({ step: 'anket' });
                        }}
                    >
                        Редактировать анкету
                    </Button>
                </div>
            </div>
        );
    }
}

export default CompleteBlock;
