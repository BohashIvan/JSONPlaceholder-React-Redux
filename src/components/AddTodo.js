import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Input, Button, Row, Typography} from "antd";
import { addTodoItem } from '../redux/thunk/todos.thunk';

const {Text} = Typography;

const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	
	const addTodoHandler = (event) => {
		setValue(event.target.value);
	}

	const addNewTodo = () => {
		if(value.length) {
			dispatch(addTodoItem(value));
			setValue('');
		}
	};

	return (
			<Row align='middle' justify='start' style={{margin: '30px 0'}}>
					<Text>Add Todo:</Text>
					<Input 
						allowClear
						placeholder='Add todo name'
						style={{width: '50%', margin: '0 20px'}} 
						value={value}
						onChange={addTodoHandler}
					/>
					<Button type='primary' onClick={addNewTodo}>Add</Button>
			</Row>
	);
};

export default AddTodo;
