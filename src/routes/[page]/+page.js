export const load = async ({ url, params, session, fetch, stuff }) => {
	const res = await fetch(`/data/${params.page}.json`);

	if (res.ok) {
		return await res.json();
	}

	const { message } = await res.json();

	return {
		error: new Error(message)
	};
};