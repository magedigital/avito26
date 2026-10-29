import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';

import ButtonI from './types.ts';

class Button extends Default<ButtonI['props'], ButtonI['state']> implements ButtonI {
    parent: ButtonI['parent'];

    constructor(props: ButtonI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { children, className, onClick, isLabel, loading, disabled, href } = this.props;
        let Tag: 'label' | 'div' | 'a' = isLabel ? 'label' : 'div';

        if (href) {
            Tag = 'a';
        }

        return (
            <Tag
                className={this.getClass(
                    'v2button _CLICK',
                    this.getClass(className),
                    disabled && '_disabled',
                )}
                onClick={disabled === true ? undefined : onClick}
                {...(Tag === 'a' ? { href, target: '_blank' } : {})}
            >
                <LoaderBlock isShow={loading === true} className="v2button__loader" />
                {children}
            </Tag>
        );
    }
}

export default Button;
