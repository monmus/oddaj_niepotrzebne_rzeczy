import React, { Component } from 'react';
import LoggedViewHeader from "./LoggedViewHeader";
import LoggedViewForm_1 from "./LoggedViewForm1"
import Form2 from "./LoggedViewForm2"

class LoggedView extends Component {
    state = {
        step: 1
    }

    handleOnNext = (step, data) => {
        this.setState(prevState => ({
            ...prevState,
            ...data,
            step
        }))
    }


renderSwitch(step) {
    switch (step) {
            case 1:
                return <LoggedViewForm_1 onNext={this.handleOnNext} />
            case 2:
                return <Form2 />
            default:
                return <div />
        }
}
    
    render() {
        const { step } = this.state;
        return(
            <>
                <LoggedViewHeader />
                {this.renderSwitch(step)}
            </>
        );
    };
}

export default LoggedView



