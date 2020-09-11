import React, { Component } from 'react';
import './LandingPage.css';
import background from '../../Image/background.jpg';
import avatar from '../../Image/avatar.jpg';
import ScrollToTop from "react-scroll-to-top";
class LandingPage extends Component {
    // constructor(props){
      // super(props);
      // this.state = {};
    // }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <div className="container">
                <img className="background-img" src={background} alt='Background'/>
                <div className="box-list-title">
                    <div className="list-item">
                        <ScrollToTop smooth />HOME
                    </div>
                    <div className="name">
                        NGÔ ANH CẢNH
                    </div>
                    <div className="role">
                        FRONT-END DEVELOPER REACTJS
                    </div>
                    <div className="circular">
                        <img src={avatar} alt='avatar' className="avatar"/>
                    </div>
                    <div className="data-aboutme">
                        <div className="title-h4">
                            ABOUT ME
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;