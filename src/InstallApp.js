import React, { useEffect, useState } from "react";


const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    const [showInstallMessage, setShowInstallMessage] = useState(false);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };

        window.addEventListener("beforeinstallprompt", handler);
    
        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    // Detects if device is on iOS 
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        // console.log("isIOS");
        return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
    
    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
        setShowInstallMessage(true);
    }

    if (!supportsPWA) {
        return null;
    }

    
    return (
        <>
        <button
        className="link-button"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
        >
        Install
        </button>
        {showInstallMessage &&
        (<>
        Install from your home screen
        </>)}
        </>
        
    );
};

export default InstallPWA;