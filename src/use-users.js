import React, {useState, useEffect} from 'react';

const useUsers = () => {
	const [users, setUsers] = useState([]);
	// const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	// return {data, isLoading};
	return {users};
};
export default useUsers;
