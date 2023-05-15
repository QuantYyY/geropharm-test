import React, { FC, useEffect, useState } from "react";
import './MainContent.scss';

import ContentCards from "./ContentCards";

const MainContent: FC = () => {

    const [number, setNumber] = useState(0);

    window.addEventListener('resize', () => {
        const div = document.querySelector('.mainContent') as HTMLElement;
        const sizeWidth = div.offsetWidth - parseFloat(getComputedStyle(div).paddingLeft) - parseFloat(getComputedStyle(div).paddingRight);
        const sizeHeight = div.offsetHeight - parseFloat(getComputedStyle(div).paddingTop) - parseFloat(getComputedStyle(div).paddingBottom);
        setNumber(parseInt(String(sizeWidth / 182)) * parseInt(String(sizeHeight / 132)));
    });

    return (
        <>
            <div className="mainContent">
                <ContentCards numberCards={number} />
            </div>
        </>
    );
}

export default MainContent;