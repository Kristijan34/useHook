import React, {useState, useEffect} from 'react';

const useUser = (props) => {
	const [posts, setPosts] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((posts) => setPosts({posts}))
			.catch((error) => setError({error}))
			.finally(() => setLoaded(true));
	}, [setPosts]);

	if (!loaded) {
		return <p>Posts are loading...</p>;
	}

	if (error) {
		return <p>{error.message || 'Failed to load'}</p>;
	}

	return (
		<ul>
			{posts && posts.map((post) => <li key={post.id}>{post.body}</li>)}
		</ul>
	);
};
export default useUser;
