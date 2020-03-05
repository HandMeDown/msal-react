import React, { Component } from "react";
import {
    msalApp
    // requiresInteraction,
    // fetchMsGraph,
    // isIE,
    // GRAPH_ENDPOINTS,
    // GRAPH_SCOPES
     , GRAPH_REQUESTS
} from "./auth-utils";

export default C =>
    class AuthProvider extends Component {
        constructor(props) {
            super(props);

            this.state = {
                account: null,
                error: null,
                //emailMessages: null,
                //graphProfile: null
            };
        }

        async onSignIn(redirect) {
                return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN);
            }

        async componentDidMount() {
            msalApp.handleRedirectCallback(error => {
                if (error) {
                    const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token.";
                    // setState works as long as navigateToLoginRequestUrl: false
                    this.setState({
                        error: errorMessage
                    });
                }
            });

            const account = msalApp.getAccount();

            this.setState({
                account
            });

        }

        
        onSignOut() {
            msalApp.logout();
        }

    render() {
        return (
            <C
                {...this.props}
                account={this.state.account}
                //emailMessages={this.state.emailMessages}
                error={this.state.error}
                //graphProfile={this.state.graphProfile}
                onSignIn={() => this.onSignIn()}
                onSignOut={() => this.onSignOut()}
                //onRequestEmailToken={() => this.onRequestEmailToken()}
            />
        );
    }

}
