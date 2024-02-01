"use client"

import { Component } from "react";
import Item from './item'
class Task extends Component{


    render(){
        const {tasks} = this.props;
        const task = tasks.map( x => {
            return(
                <Item key={Math.random()} data={x} />
            )
        } )
        return(
            <>
                {task}
            </>
        )
    }
}

export default Task