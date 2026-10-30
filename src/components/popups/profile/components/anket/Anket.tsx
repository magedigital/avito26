import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Editor from '@/src/components/editor/Editor.tsx';
import Error from '@/src/components/error/Error.tsx';
import Field from '@/src/components/field/Field.tsx';

import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import AnketBlockI from './types.ts';

import { anketFields } from './static/fields.ts';

class AnketBlock extends Editor<AnketBlockI['props'], AnketBlockI['state']> implements AnketBlockI {
    parent: AnketBlockI['parent'];

    constructor(props: AnketBlockI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;
    sendForm = sendForm;

    render() {
        const { form, categories, loadingKey, error } = this.state;
        const { onRender } = this.props;

        return (
            <div ref={this.parent} className="popup__block _COL">
                <h4 className="popup__blockTitle">Анкета участника</h4>
                <p className="popup__blockText">
                    Данные можно заменить до начала выполнения заданий.
                </p>
                {form && (
                    <div className="popup__blockFields">
                        {Object.keys(anketFields).map((n) => {
                            const thisField = anketFields[n];

                            return (
                                <div className="popup__blockField _short" key={n}>
                                    <Field
                                        name={n}
                                        type={thisField.type}
                                        support={thisField.support}
                                        input={thisField.input}
                                        value={form?.[n] ?? ''}
                                        setValue={async (d) => {
                                            await this.setValue({
                                                data: { [n]: d.value },
                                                targetName: 'form',
                                            });
                                        }}
                                        info={
                                            n === 'avito_id'
                                                ? {
                                                      text: 'Где найти Avito ID?',
                                                      href: 'https://support.avito.ru/sections/1790?articleId=9592',
                                                  }
                                                : undefined
                                        }
                                    />
                                </div>
                            );
                        })}

                        <div className="popup__blockField">
                            <Field
                                name="category"
                                type="select"
                                support="Выбор услуги"
                                select={{
                                    list: (categories ?? []).map((c) => ({
                                        id: c.code,
                                        title: c.name,
                                    })),
                                }}
                                value={form?.category ?? ''}
                                setValue={async (d) => {
                                    await this.setValue({
                                        data: { category: d.value },
                                        targetName: 'form',
                                    });
                                }}
                                info={{ text: 'Можно выбрать только 1 вид деятельности' }}
                            />
                        </div>
                    </div>
                )}

                <div className="popup__blockButton">
                    <Button
                        className="_purple"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Сохранить анкету
                    </Button>
                </div>
                <div className="popup__blockFoot">
                    <a
                        href="https://www.avito.ru/legal/rules/privacy-policy"
                        rel="noreferrer"
                        target="_blank"
                        className="popup__blockFootLink _CLICK"
                    >
                        Политика конфиденциальности
                    </a>
                </div>
                <Error error={error} className="popup__blockError" callback={onRender} />
            </div>
        );
    }
}

export default AnketBlock;
