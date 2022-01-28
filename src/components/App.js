import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodosList from './TodosList';
import TodoItem from './TodoItem';

const App = () => (
		<Router>
			<Routes>
				<Route path="/" element={<TodosList />} />
				<Route path="/details/:id" element={<TodoItem />} />
			</Routes>
		</Router>
);

export default App;
