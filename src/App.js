import React, {useState, useEffect} from 'react';
import useUsers from './use-users';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import useUser from './useUser';

const App = () => {
	const [show, setShow] = useState('');
	const {users} = useUsers('https://jsonplaceholder.typicode.com/users');
	//const {posts} = useUser('https://jsonplaceholder.typicode.com/posts');

	return (
		<form>
			<div className="container p-5">
				<select
					className="custom-select"
					onChange={(event) => {
						const selectedUser = event.target.value;
						setShow(selectedUser);
					}}
				>
					{users.map((user) => (
						<option key={user.id}>{user.name}</option>
					))}
				</select>
			</div>
			<div className="show">{show}</div>
		</form>
	);
};

export default App;
