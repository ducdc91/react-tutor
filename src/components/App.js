import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
//import Lession3 from './Lession3';
import CoverLetter from './CoverLetter';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/fontawesome-free/css/all.css';
import '../assets/css/resume.css';
// TODO: question: lam sao de nhung js libs vao
/*import '../assets/jquery/jquery.min';
import '../assets/bootstrap/js/bootstrap.bundle.min';
import '../assets/jquery-easing/jquery.easing.min';
import '../assets/js/resume';*/

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <CoverLetter />
            </div>
        );
    }
}

export default App;
