import React, { FC } from 'react';
import { useAppSelector } from '../../../hook';
import './ContentCards.scss';

import CardWithModal from './CardWithModal';

const ContentCards: FC = () => {

    const store = useAppSelector(store => store.posts);

    return (
        <>
            <div className="gridContainer"
                style={{ gridTemplateColumns: `repeat(${store.options.widthCount}, 1fr)` }}
            >
                <CardWithModal />
            </div>
        </>
    );
}

export default ContentCards;