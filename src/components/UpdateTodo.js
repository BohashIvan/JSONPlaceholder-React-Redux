import { useState } from 'react';
import { Input, Button, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { updateTodoTitle } from '../redux/thunk/todos.thunk';

const UpdateTodo = ({ id, title }) => {
	const [value, setValue] = useState(title);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleClick = () => {
		if (value.length) {
			dispatch(updateTodoTitle(id, value));
		}
	};

	return (
		<Row justify="space-between">
			<Input
				style={{ width: '81%' }}
				onChange={handleChange}
				placeholder="New title..."
				type="text"
				value={value}
			/>
			<Button type="primary" onClick={handleClick}>
				Update
			</Button>
		</Row>
	);
};

export default UpdateTodo;
