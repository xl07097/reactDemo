import React, { useEffect, useState } from "react";

import {
    Encrypt,
    Decrypt,
    encryptByDESModeCBC,
    decryptByDESModeCBC,
    encryptByDESModeEBC,
    decryptByDESModeEBC,
} from "@/utils/crypto";

function CryptoJsx(params) {
    
    let [cp, setCp] = useState('');
    useEffect(() => {
        // setCp(Encrypt(123456, "notesecu", "notesecu"));
        setCp(encryptByDESModeCBC("123456"));
    }, [])

    return (
        <>
            <div>{cp}</div>
        </>
    );
}

export default CryptoJsx;
