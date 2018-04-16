export const postUser = async (data) => {	
	const { userId , title, body } = data;
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
									method: 'POST',
									body: JSON.stringify({
									  title: title,
									  body: body,
									  userId: userId
									}),
									headers: {
									  "Content-type": "application/json; charset=UTF-8"
									}
								});
		const data = await response.json();
		return data;
	} catch(e) {

	}
}

export const putUser = async (data) => {	
	const { userId , title, body, id } = data;
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
									method: 'PUT',
									body: JSON.stringify({
									  id: id,
									  title: title,
									  body: body,
									  userId: userId
									}),
									headers: {
									  "Content-type": "application/json; charset=UTF-8"
									}
								});
		const data = await response.json();
		return data;
	} catch(e) {

	}
}
