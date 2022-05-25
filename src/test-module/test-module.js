import React from "react";

class TestModule extends React.Component{
    render() {
        return (
            <div>
                <div>This is running in <b>{process.env.NODE_ENV}</b> df</div>
                <div>{process.env.REACT_APP_TEST_SECRET}</div>
            </div>
            
        );
    }
}

export default TestModule;