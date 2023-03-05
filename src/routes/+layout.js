export const load = async ({ url, params, session, fetch, stuff }) => {
	// set active page
	var pageName 
	if(typeof params.slug !== 'undefined'){
		pageName = params.slug
	} else {
		if(url.pathname === '/'){
			pageName = 'home'
		} else {
			pageName = url.pathname.substring(1)
		}
	}

	const res = await fetch('/data/global.json');

	if (res.ok) {
		var data = await res.json();
		return {
			global: data
		}
	}

	const { message } = await res.json();

	return {
		error: new Error(message)
	};
};
