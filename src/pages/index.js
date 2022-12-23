import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Octokit} from '@octokit/core';
import React from 'react';

const Index = () => {
    const {siteConfig} = useDocusaurusContext();
const [loading, setLoading] = React.useState(false);
    const handleInvokeBuild = async () => {
    setLoading(true);
    try {
        const octokit = new Octokit({
            auth: siteConfig.REACT_APP_PAS
        });

        const result = await octokit.request('POST /repos/huongnguyenduc/docu-notion/actions/workflows/43724788/dispatches', {
            owner: 'huongnguyenduc',
            repo: 'docu-notion',
            workflow_id: '43724788',
            ref: 'main',
            // inputs: {
            //     name: 'Mona the Octocat',
            //     home: 'San Francisco, CA'
            // }
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
