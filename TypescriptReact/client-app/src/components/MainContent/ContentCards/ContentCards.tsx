import React, { FC } from 'react';
import './ContentCards.scss';

import { Grid, GridItem } from '@consta/uikit/Grid';
import { Card } from '@consta/uikit/Card';

interface ContentCardsProps {
    numberCards: number;
}

const ContentCards: FC<ContentCardsProps> = ({numberCards}) => {

    let array = [];
    for (let i = 0; i < numberCards; i++) {
        array.push(
            <>
                <GridItem>
                    <Card style={{ width: '150px', height: '100px' }}>
                        Это карточка, в которой ничего нет, кроме текста. Здесь может быть что угодно.
                    </Card>
                </GridItem>
            </>
        )
    }

    return (
        <>
            <Grid
                cols="5"
                className='contentCards'
                xAlign='center'
                yAlign='center'
                rowGap='l'
            >
                {array}
            </Grid>
        </>
    );
}

export default ContentCards;