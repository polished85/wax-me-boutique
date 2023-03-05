export const load = async ({ url, params, session, fetch, stuff }) => {
	var pageName 
	if(typeof params.service !== 'undefined'){
		pageName = params.service
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
			global: data,
			pageName: pageName
		}
	}

	const { message } = await res.json();

	return {
		error: new Error(message)
	};
};
