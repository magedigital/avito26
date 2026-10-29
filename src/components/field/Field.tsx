import { debounce } from 'throttle-debounce';

import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import getAddresses from './methods/getAddresses.ts';

import FieldI from './types.ts';

import renderField from './renders/renderField.tsx';

class Field extends Default<FieldI['props'], FieldI['state']> implements FieldI {
    parent: FieldI['parent'];
    getAddressesInc: FieldI['getAddressesInc'];

    constructor(props: FieldI['props']) {
        super(props);
        this.state = {};

        this.getAddressesInc = debounce(300, this.getAddresses.bind(this));

        this.parent = React.createRef();
    }

    getAddresses = getAddresses;

    renderField = renderField;

    render() {
        const { className, support, input, type, info } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass(
                    'field _COL',
                    className,
                    input?.isArea && '_area',
                    this.setClass(type),
                )}
            >
                {type !== 'checkbox' && (
                    <p
                        className="field__support"
                        dangerouslySetInnerHTML={{ __html: `${support}` }}
                    ></p>
                )}
                <div className="field__box">{this.renderField()}</div>
                {info && info.href && (
                    <a
                        href={info.href}
                        className="field__info _CLICK"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {info.text}
                    </a>
                )}
                {info && !info.href && <p className="field__info">{info.text}</p>}
            </div>
        );
    }
}

export default Field;
