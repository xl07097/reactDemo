import React, { useEffect, useState } from "react";

import {
    encryptByDESModeCBC,
    decryptByDESModeCBC,
    encryptByDESModeEBC,
    decryptByDESModeEBC,
} from "@/utils/crypto";

function CryptoJsx(params) {
    
    let [cp, setCp] = useState('');
    useEffect(() => {
        setCp(encryptByDESModeCBC("123456"));
    }, [])

    return (
        <>
            <div>{cp}</div>
        </>
    );
}

export default CryptoJsx;
