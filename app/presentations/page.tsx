"use client"
import React, { useEffect, useRef, useState } from 'react';
import Box from "./(components)/Box";

export default function Presentations() {

    const ref = useRef(null);


    return (
        <div className={"px-[8vw] pt-[4vw] mx-auto"}>
            <div ref={ref} className={"container"} style={
                {
                    position: "relative",
                }
            }>

                <Box name={"first"} />
                <Box name={"second"} />

            </div>
        </div>
    )
}
