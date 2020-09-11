import React, { Component } from 'react';
import './LandingPage.scss';
import background from '../../Image/background.jpg';
import avatar from '../../Image/avatar.jpg';
import ScrollToTop from "react-scroll-to-top";
import Carousel from 'react-elastic-carousel';
class LandingPage extends Component {
    state = {
        items: [
            {id: 1, title: 'item #1'},
            {id: 2, title: 'item #2'},
            {id: 3, title: 'item #3'},
            {id: 4, title: 'item #4'},
            {id: 5, title: 'item #5'}
        ]
    }
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
        const { items } = this.state;
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
                        <Carousel >
                            {items.map(item => <div key={item.id}>{item.title}</div>)}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;