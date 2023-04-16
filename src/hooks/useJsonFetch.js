/**
 * const states = ['data','loading','error'];
 * const url = 'http://localhost:7070/';
 * const opts = { method: 'GET'}
 * const [data, isLoading, hasError] = useJsonFetch(url, opts);
 */

import { useState, useEffect } from 'react';

const useJsonFetch = (url, opts) => {

	const [data, setData] = useState(null);
	const [hasError, setError] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(()=> {

	setLoading(true);
		fetch(url, {...opts})
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					setError(response.status);
					throw new Error(`Ошибка загрузки: ${response.status}(${response.statusText})`);
				}
				return response.json();
			})
			.then((response) => {
				setData(response);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message);
				setLoading(false);
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [data, isLoading, hasError];
}

export default useJsonFetch;