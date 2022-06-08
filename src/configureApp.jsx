import React from "react";
import * as msTeams from '@microsoft/teams-js';

export default () => {

    msTeams.settings.registerOnSaveHandler(e => {
        msTeams.settings.setSettings({
            contentUrl: window.location.origin,
            entityId: window.location.origin
        });
        e.notifySuccess();
    });
    
    msTeams.settings.setValidityState(true);

    return (
        <>
            <h1>CONFIGURE: Welcome to Nano Vite Teams App!</h1>
            <p>Hard to get more minimal than this React app.</p>
        </>
    )
};
