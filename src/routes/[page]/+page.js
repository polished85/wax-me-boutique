export const load = async ({ url, params, session, fetch, stuff }) => {

	var pages = [
		'faq',
		'policies',
		'privacy'
	]
	if(pages.indexOf(params.page) !== -1){
		const res = await fetch(`/data/${params.page}.json`);
		if (res.ok) {
			return await res.json();
		} else {
			const { message } = await res.json();
			return {
				error: new Error(message)
			};
		}
	} else {
		throw error(404, 'Not found');
	}
};
