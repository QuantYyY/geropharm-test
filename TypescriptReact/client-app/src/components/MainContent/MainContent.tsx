import React, { FC } from "react";
import './MainContent.scss';

import ContentCards from "./ContentCards";
import { useAppDispatch } from "../../hook";
import { setQueryOptions } from "../../store/postsSlice";

const MainContent: FC = () => {

    const dispatch = useAppDispatch();

    window.addEventListener('DOMContentLoaded', () => {
        const resizeHandler = () => {
            const div = document.querySelector('.mainContent') as HTMLElement;
            const sizeWidth = div.offsetWidth - parseFloat(getComputedStyle(div).paddingLeft) - parseFloat(getComputedStyle(div).paddingRight);
            const sizeHeight = div.offsetHeight - parseFloat(getComputedStyle(div).paddingTop) - parseFloat(getComputedStyle(div).paddingBottom);
            const number = parseInt(String(sizeWidth / 182)) * parseInt(String(sizeHeight / 132))

            dispatch(setQueryOptions({
                numberCards: number,
                heightCount: parseInt(String(sizeHeight / 132)),
                widthCount: parseInt(String(sizeWidth / 182)),
            }));
        };

        resizeHandler();
        window.addEventListener('resize', resizeHandler);
    });

    return (
        <>
            <div className="mainContent">
                <ContentCards />
            </div>
        </>
    );
}

export default MainContent;