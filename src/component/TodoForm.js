import { useState } from "react"
import { useDispatch } from "react-redux"
import ActionType from "../state/GlobalActionType";

export const ToDosForm = () => {
    const [todo, setTodo] = useState();
    const [desc, setDesc] = useState();
    const dispatch = useDispatch();

    const handleTodo = (event) => {
        setTodo(event.target.value)
    }

    const handleDesc = (event) => {
        setDesc( event.target.value)
    }

    const handleSubmit = (event) => {
        dispatch({type: ActionType.ADD, payload: {todo, desc}})
        event.preventDefault()
    }

    return(
        <div className="container">
        TODOS FORM
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">To Do</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter ToDo"
              value={todo || ''}
              onChange={handleTodo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Desc</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Desc"
              value={desc || ''}
              onChange={handleDesc}
            />
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
}