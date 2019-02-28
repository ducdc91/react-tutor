import React, {Component} from 'react';
// TODO: question: cach nhung image dung nhat
import avatar from '../assets/images/avatar.JPEG';

import Navbar from './coverletter/Navbar';

class CoverLetter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <cover-letter>
                <Navbar candidate={this.props.candidate} menu={this.props.menu} />
            </cover-letter>
        );
    }
}

// Set default value of props
CoverLetter.defaultProps = {
    title: "Cover Letter",
    candidate: {
        name: "Duc Dang Chung",
        yearOld: 28,
        job: "Senior Full stack PHP Developer",
        company: "Shopstack",
        avatar: avatar
    },
    //TODO: get warning "Each child in a list should have a unique "key" prop."
    menu: [
        {
            label: "About",
            href: "#about",
            classes: "nav-link js-scroll-trigger about test-class"
        },
        {
            label: "Experience",
            href: "#experience",
            classes: "nav-link js-scroll-trigger experience test-class"
        },
        {
            label: "Education",
            href: "#education",
            classes: "nav-link js-scroll-trigger"
        },
        {
            label: "Skills",
            href: "#skills",
            classes: "nav-link js-scroll-trigger"
        },
        {
            label: "Interests",
            href: "#interests",
            classes: "nav-link js-scroll-trigger"
        }
    ]


};

export default CoverLetter;