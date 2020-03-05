import { UserAgentApplication } from "msal";


export const GRAPH_SCOPES = {
    OPENID: "openid",
    PROFILE: "profile",
    USER_READ: "User.Read"
};

export const GRAPH_REQUESTS = {
    LOGIN: {
        scopes: [
            GRAPH_SCOPES.OPENID,
            GRAPH_SCOPES.PROFILE,
            GRAPH_SCOPES.USER_READ
        ]
    }
};

export const msalApp = new UserAgentApplication({
    auth: {
        clientId: "245e9392-c666-4d51-8f8a-bfd9e55b2456",
        authority: "https://login.microsoftonline.com/common",
        validateAuthority: true,
        postLogoutRedirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "sessionStorage"
    },
    system: {
        navigateFrameWait: 0,
        logger: {
            error: console.error,
            errorPii: console.error,
            info: console.log,
            infoPii: console.log,
            verbose: console.log,
            verbosePii: console.log,
            warning: console.warn,
            warningPii: console.warn
        }
    }
});