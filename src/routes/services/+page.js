export const load = async ({ fetch }) => {
	const res = await fetch('/data/services.json');

	if (res.ok) {
		return await res.json();
	}

	const { message } = await res.json();
	
	return {
		error: new Error(message)
	};
};
