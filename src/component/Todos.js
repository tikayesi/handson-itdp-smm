import { useSelector } from "react-redux"

export const Todos = () => {
    const todos = useSelector((state) => state.todos)
    return(
        <>
        TODOS
        <br/>
        <button>Add Todos</button>
        <table>
            <thead>
                <tr>
                    <td>No</td>
                    <td>To Do</td>
                    <td>Desc</td>
                </tr>
            </thead>
            <tbody>
            {todos.map((toDo, i) => {
            return(
            <tr key={i}>
                <td>{i+1}</td>
                <td>{toDo.todo}</td>
                <td>{toDo.desc}</td>
            </tr>
            )
        })}
            </tbody>
        </table>
        </>
    )
}