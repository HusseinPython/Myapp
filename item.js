import { Component } from "react"

class Item extends Component{
    state = { id: this.props.data.id, note: this.props.data.note, task:this.props.data.task, type: this.props.data.type }
    handleCheck = (e) => {
        e.target.parentNode.classList.toggle('checked')
        this.setState({ id: this.props.data.id, note: this.props.data.note, task:this.props.data.task, type: 1 })
    }
    render(){
        const {data} = this.props
        return(
            <div key={data.id} className="task">
                <div  onClick={this.handleCheck} className="checkbox">
                    <img className="img-check" src="./img/check.svg" />
                </div>
                <div className="task-title">{data.task}</div>
                <div className="delete">
                    <img src="./img/trash-2.svg" />
                </div>
            </div>
        )
    }
}

export default Item