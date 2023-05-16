import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Modal } from '@consta/uikit/Modal';

import { useAppSelector } from '../../../../hook';

const CardWithModal: FC = () => {

    const store = useAppSelector(store => store.posts);

    const [isModalOpenArray, setIsModalOpenArray] = React.useState<boolean[]>(Array(store.posts.length).fill(false));

    const openModal = (index: number) => {
        const updatedIsModalOpenArray = [...isModalOpenArray];
        updatedIsModalOpenArray[index] = true;
        setIsModalOpenArray(updatedIsModalOpenArray);
    };

    const closeModal = (index: number) => {
        const updatedIsModalOpenArray = [...isModalOpenArray];
        updatedIsModalOpenArray[index] = false;
        setIsModalOpenArray(updatedIsModalOpenArray);
    };

    return (
        <>
            {store.posts.slice(0, store.options.numberCards).map((item, index) => (
                <div className="grid-item" key={uuidv4()} >
                    <Card
                        style={{ width: '150px', height: '100px', padding: 5 }}
                        onClick={() => openModal(index)}
                    >
                        <Text size='xs' align='center' className='cardTitle'>
                            {item.title}
                        </Text>
                        <Modal
                            isOpen={isModalOpenArray[index]}
                            onClickOutside={(e) => closeModal(index)}
                            onEsc={() => closeModal(index)}
                        >
                            <div className='modalWindow'>
                                <Text as="p" size="m" view="primary">
                                    {item.post}
                                </Text>
                                <Text as="p" size="m" view="secondary">
                                    {item.author}
                                </Text>
                            </div>
                        </Modal>
                    </Card>
                </div>
            ))}

        </>
    )
}

export default CardWithModal;