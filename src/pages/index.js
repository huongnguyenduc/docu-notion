import {Octokit} from '@octokit/core';
import React from 'react';

const Index = () => {
const [loading, setLoading] = React.useState(false);
    const handleInvokeBuild = async () => {
    setLoading(true);
    try {
        const octokit = new Octokit({
            auth: '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'
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