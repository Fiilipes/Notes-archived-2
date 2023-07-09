import React, {useEffect, useRef} from 'react';
import BoxBox from "./BoxBox";

function Box({name}: { name: string }) {

    const ref = useRef(null);

    useEffect(() => {
        let startX = 0;
        let startY = 0;

        const element = ref.current as HTMLElement;

        function handleMouseDown(event: MouseEvent) {
            console.log("mousedown");
            console.log(element.textContent);

            // console log the position of the click relative to the element
            console.log(event.clientX);
            console.log(event.clientY);

            startX = event.clientX;
            startY = event.clientY;

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        function handleMouseMove(event: MouseEvent) {
            const diffX = event.clientX - startX;
            const diffY = event.clientY - startY;

            const left = parseInt(element.style.left || '0') + diffX;
            const top = parseInt(element.style.top || '0') + diffY;

            element.style.left = `${left}px`;
            element.style.top = `${top}px`;

            startX = event.clientX;
            startY = event.clientY;
        }

        function handleMouseUp(event: MouseEvent) {
            console.log("drop");
            console.log(element.textContent);
            console.log(event.clientX);
            console.log(event.clientY);

            console.log("difference");
            console.log(event.clientX - startX);
            console.log(event.clientY - startY);

            const diffX = event.clientX - startX;
            const diffY = event.clientY - startY;

            const left = parseInt(element.style.left || '0') + diffX;
            const top = parseInt(element.style.top || '0') + diffY;

            element.style.left = `${left}px`;
            element.style.top = `${top}px`;

            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        element.addEventListener('mousedown', handleMouseDown);

        return () => {
            element.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);


    return (
        <div ref={ref} className={"box"} style={
            {
                position: "absolute",
                // left and top are relative to parent
                // random left 50 to 500 px
                left: Math.floor(Math.random() * 450) + 50 + "px",
                top: Math.floor(Math.random() * 450) + 50 + "px",
                padding: ".1vw",
                width: "60px",
                height: "60px",
                borderWidth: "2px",
                borderColor: "blue",
                borderStyle: "solid",
                userSelect: "none",


            }
        }>

            {/*<div ref={boxDiv} className={"boxDiv"}>*/}

            {/*    /!*small boxes on border to resize*!/*/}

            {/*    /!*<BoxBox direction={"nw"}/>*!/*/}
            {/*    /!*<BoxBox direction={"n"}/>*!/*/}
            {/*    /!*<BoxBox direction={"ne"}/>*!/*/}
            {/*    /!*<BoxBox direction={"e"}/>*!/*/}
            {/*    /!*<BoxBox direction={"se"}/>*!/*/}
            {/*    /!*<BoxBox direction={"s"}/>*!/*/}
            {/*    /!*<BoxBox direction={"sw"}/>*!/*/}
            {/*    /!*<BoxBox direction={"w"}/>*!/*/}

            {/*</div>*/}

            <div contentEditable={true} className={"w-fit outline-none p-[0.1vw] m-[0.1vw] absolute"} style={
                {
                    zIndex: 1000,
                    maxWidth: "100%",
                }
            }>
                {name}
            </div>
        </div>
    );
}

export default Box;