import {Octokit} from '@octokit/core';
import React from 'react';
import siteConfig from '@generated/docusaurus.config';

const Index = () => {
    const [loading, setLoading] = React.useState(false);
    const handleInvokeBuild = async () => {
        setLoading(true);
        try {
            const octokit = new Octokit({
                auth: `${siteConfig.customFields.REACT_APP_PAS}`
            });

            const result = await octokit.request('POST /repos/huongnguyenduc/docu-notion/actions/workflows/release.yml/dispatches', {
                ref: 'main',
            });
            setLoading(false);
            console.log("result", result);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div>
            <h1>Index</h1>
            <button onClick={() => handleInvokeBuild()}>Invoke Build</button>
            {loading && <div>loading...</div>}
        </div>
    )
}

export default Index;
