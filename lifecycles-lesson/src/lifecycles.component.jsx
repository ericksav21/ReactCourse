import React from 'react';

class Lifecycles extends React.Component {
    constructor() {
        super();
        console.log('constructor!');
    }

    componentDidMount() {
        console.log('ComponentDidMount!');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate!');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate ', nextProps);
        return this.props.text !== nextProps.text;
    }

    render() {
        console.log('render!');
        return (
            <div className='lifecycles'>
                <h3>LIFECYCLES COMPONENT</h3>
                {this.props.text}
            </div>
        );
    }
}

export default Lifecycles;