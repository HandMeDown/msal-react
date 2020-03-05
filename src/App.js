import React from "react";
import PropTypes from "prop-types";
import AuthProvider from "./AuthProvider";

import "./App.css";

const Json = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

class App extends React.Component {
    static propTypes = {
        account: PropTypes.object,
        error: PropTypes.string,
       // graphProfile: PropTypes.object,
        onSignIn: PropTypes.func.isRequired,
        onSignOut: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
                <section>
                    <h1>
                        Microsoft Authentication Library - React Test App
                    </h1>
                    {!this.props.account ? (
                        <button onClick={this.props.onSignIn}>Sign In</button>
                    ) : (
                      <>
                      <button onClick={this.props.onSignOut}>
                          Sign Out
                      </button>
                      </>
                    )}
                    {this.props.error && (
                        <p className="error">Error: {this.props.error}</p>
                    )}
                </section>
                <section className="data">
                  {this.props.account && (
                      <div className="data-account">
                          <h2>Session Account Data</h2>
                          <Json data={this.props.account} />
                      </div>
                  )}
                  </section>
          </div>
        )
  }
 }
//export default AuthProvider(App);
export default AuthProvider(App);