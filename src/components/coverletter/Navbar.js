import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{this.props.candidate.name}</span>
                    <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={this.props.candidate.avatar}
                                 alt=""/>
                        </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {this.state.menu.map((link, i) => {
                            return (
                                <li className="nav-item">
                                    <a className={link.classes} href={link.href}>{link.label}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        );
    }

    setMenu() {
        let newMenu = {
            label: "Awards",
            href: "#awards",
            classes: "nav-link js-scroll-trigger awards test-class"
        };
        let menu = this.props.menu;
        menu.push(newMenu);
        console.log(menu);
        this.setState({menu: menu})
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        this.setMenu();
        console.log('Component DID MOUNT!')
        console.log(this.state.menu);
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!');

        console.log(this.state.menu);
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
        console.log(this.state.menu);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
        console.log(this.state.menu);
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!');
        console.log(this.state.menu);
    }
}

export default Navbar;