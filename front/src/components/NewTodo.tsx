import React, {useRef} from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enterdText = textInputRef.current!.value;
        props.onAddTodo(enterdText);
    };
    return(
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo内容</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Todo追加</button>
        </form>
    )
}

export default NewTodo