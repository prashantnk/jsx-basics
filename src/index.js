// ctrl + ` for hide or show terminal
import React from 'react';
import ReactDOM from 'react-dom';
const getButtonStyle = () => {
    const style = { backgroundColor: 'grey', color: 'white', display: 'block' };
    // js object
    return style;
}
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}
const App = () => {
    const labelText = 'Enter Name :';
    const buttonText = { text: 'Click me !' };
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >
            <div >
                <div>
                    Current Time : {getCurrentTime()}
                </div>
                <label htmlFor="name" className="label" >
                    {labelText}
                </label>
                <input id="name" />
                <button style={getButtonStyle()}>
                    {buttonText.text}
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);