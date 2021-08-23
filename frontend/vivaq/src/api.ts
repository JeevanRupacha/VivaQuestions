
const API_URL = "http://localhost:9000";

// fetch subject list 
export const getSubjectList = async ({ }) => {
	
	let url = `${API_URL}/subjects`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

// fetch Questions list 
export const getQuestions = async ({queryKey} : any) => {
	const subjectId = queryKey[1]
	let url = `${API_URL}/questions/?subjectId=${subjectId}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};


// fetch Answers list 
export const getAnswers = async ({queryKey } : any) => {
	
  const questionId = queryKey[1]
	let url = `${API_URL}/answers/?questionId=${questionId}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const addAnswer = async (answer :any) => {


	let url = `${API_URL}/answers/`;

	return await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(answer),
	});
};


export const addQuestion = async (question :any) => {


	let url = `${API_URL}/questions/`;

	return await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(question),
	});
};


export const addSubject = async (subject :any) => {


	let url = `${API_URL}/subjects/`;

	return await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(subject),
	});
};