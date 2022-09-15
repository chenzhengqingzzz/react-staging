import { nanoid } from 'nanoid';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {
       id: nanoid(),
       name: name,
       age: age,
    }
    this.props.jiaYiRen(personObj)
  }

  render() {
    return (
      <div>
        <h2>我是Person组件,上方求和为:{this.props.he}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.yiduiren.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

//映射状态
const mapStateToProps = (state) => {
    return {
      yiduiren: state.rens,
      he: state.he
    }
}

//映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
      jiaYiRen: (personObj) => {
        dispatch(createAddPersonAction(personObj))
      }
    }
}

const PersonContainer = connect(mapStateToProps, mapDispatchToProps)(Person)
export default PersonContainer