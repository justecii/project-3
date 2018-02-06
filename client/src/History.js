import React, { Component } from 'react';
import Inventory from './Inventory';
import axios from 'axios';
import { Button, Row } from "react-materialize";

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wyms: [],
            toView: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
            console.log(this.props.user.id)
            console.log(this.state)
            axios.post('/watson/list', {
                user: this.props.user.id
            }).then(result => {
                this.setState({ wyms: result.data })
                console.log(this.state.wyms)
            })
        }
        //Get Individual wym props
    onClick(e) {
        axios.post('/watson/wym', {
            user: this.props.user.id,
            id: e.target.value
        }).then(result => {
            this.setState({ toView: result.data[0].content })
            console.log(this.state.toView)
                // console.log(result.data.data.content)
        })
    }

    render() {
        let wymsList = this.state.wyms.map((item, index) => ( <
            Row > { /* <li className="inline" key={index}>{item.title}</li> */ } <
            Button className = "inline fullWidth"
            key = { index }
            onClick = {
                (e) => this.onClick(e) }
            value = { item._id } > < i class = "material-icons" > add_circle < /i>{item.title}</Button >
            <
            /Row>
        ));
        return ( <
            div > { wymsList } <
            Inventory content = { this.state.toView }
            /> <
            /div>
        );
    }
}

export default History;