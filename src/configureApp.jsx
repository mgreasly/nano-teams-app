import React from "react";
import * as teams from '@microsoft/teams-js';

const tabs = ['index.html', 'tab.html'];

export default () => {    
    const onChange = (url) => {
        console.log(url);
        teams.app.initialize();
        teams.pages.config.registerOnSaveHandler(evt => {
            const tabUrl = window.location.protocol + '//' + window.location.host + '/' + url;
            teams.pages.config.setConfig({
                contentUrl: tabUrl,
                entityId: tabUrl
            });
            evt.notifySuccess();
        });
        teams.pages.config.setValidityState(true);
    };

    return (
        <>
            <h1>CONFIGURE: Welcome to Nano Vite Teams App!</h1>
            <p>Hard to get more minimal than this React app.</p>
            <p>Select the tab to show:</p>
            <select onChange={e => onChange(e.target.value)}>
                <option>Select tab to show...</option>
                {tabs.map((tab, index) => <option key={index}>{tab}</option>)}
            </select>
        </>
    )
};
