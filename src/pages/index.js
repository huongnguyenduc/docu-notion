import React, {Fragment, useState, useEffect} from 'react';
import siteConfig from '@generated/docusaurus.config';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Index = () => {
    const clientId = siteConfig.customFields.GOOGLE_CLIENT_ID;
    const backendApiUrl = siteConfig.customFields.BACKEND_API_URL;
    const [ profile, setProfile ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthored, setIsAuthored] = useState(false);
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    useEffect(() => {
        if (!profile && isAuthored) {
            setIsAuthored(false);
            return;
        }

        // Check if user is in notion workspace
        const checkUserAuthorized = async () => {
            const response = await fetch(`${backendApiUrl}/?email=${profile.email}`, {
                method: 'GET',
            });
            const data = await response.json();
            console.log(response);
            console.log(data);
            if (response.status === 200 && data?.isAuthorized) {
                setIsAuthored(true);
            } else if (isAuthored) {
                setIsAuthored(false);
            }
        }
        checkUserAuthorized();
    }, [profile, isAuthored]);
    const onSuccess = (res) => {
        console.log('success:', res);
        setProfile(res.profileObj);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    const logOut = () => {
        setProfile(null);
    };

    console.log("profile", profile);

    const handleBuildNotionPages = () => {
        setLoading(true);
        console.log("email", profile.email);
        fetch(`${backendApiUrl}?email=${profile.email}`, {method: 'POST'})
            .then((response) => response.json())
            .then((payload) => {
                console.log(payload)
                setLoading(false);
            }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }

    return (
        <Fragment>
            <BrowserOnly>
            <div style={{width: '100%', display: "flex", justifyContent: "center", marginTop: "72px"}}>
                <br />

                {profile ? (
                    <div>
                        <img src={profile.imageUrl} alt="user image" />
                        <h3>User Logged in</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <br />

                        <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                        <br  />
                        <div style={{marginTop: "12px"}} />
                        {
                            isAuthored ? (
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleBuildNotionPages}
                                    >
                                        Build Notion Pages
                                    </button>
                                    {loading && <div>loading...</div>}
                                </div>
                            ) : (
                                <div>
                                    <p>You are not in the Notion workspace</p>
                                    <div>Please contact team to be editor</div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                )}
            </div>
            </BrowserOnly>
        </Fragment>
    )
}

export default Index;
