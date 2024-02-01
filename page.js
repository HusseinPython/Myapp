"use client"

import { Component } from 'react'
import './globals.css'
import './dark.css'
import Task from './task'

class Home extends Component {

  state = {
    tasks : [{id: 37, note: "note", task:"first task", type: 0}]
  }


  componentDidUpdate(){
    console.log(this.state.tasks)
  }

  handleMode = () => {
    const ele = document.getElementsByClassName('mode')[0].classList;
    const icon = document.getElementsByTagName('img')
    const classList = Array(ele).join()
    const body = document.getElementsByTagName('body')[0].classList;
    body.toggle('dark')
    if( classList.indexOf('sun') >= 0 ){
      ele.replace('sun', 'moon')
      icon[0].attributes.src.nodeValue = "./img/moon.svg"
    }else{
      ele.replace('moon', 'sun')
      icon[0].attributes.src.nodeValue = "./img/sun.svg"
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const id = parseInt( Math.random() * 100 )
    const task = e.target[0].value
    const tasks = this.state.tasks
    if( task ){
      let newTask = {id: id, task:task, type: 0, note : "note"}
      tasks.push(newTask)
      this.setState({
        tasks : tasks
      })
      e.target[0].value = ''
    }
  }


  add = (e) => {
    const ele = document.getElementsByClassName('add-task')[0].classList;
    const input = document.getElementsByTagName('input')[0].value
    if(input){
      ele.toggle('none')
    }
  }

  close = (e) => {
    const ele = document.getElementsByClassName('add-task')[0].classList;
    ele.toggle('none')
  }

  render(){
    return(
      <>
        <div className='box-to-do'>
          <div className='title'>
            <div>todo</div>
            <div className='mode sun' onClick={this.handleMode}><img src="./img/sun.svg"></img></div>
          </div>
          <div className='input-feild'>
            <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Add A new Task'/>
              <button onClick={this.add}>Add Task</button>
            </form>
          </div>
          <div className='task-box'>
            <Task tasks={this.state.tasks}/>
          </div>
        </div>
        <div className='add-task none'>
          <div className='message'>
            <div onClick={this.close} className='close'><img src='./img/delete.svg'></img></div>
            <div className='text-message'>
              <div className='icon'><img src='./img/plus-circle.svg'/></div>
              <div className='title-message'>task has been added successfully</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home