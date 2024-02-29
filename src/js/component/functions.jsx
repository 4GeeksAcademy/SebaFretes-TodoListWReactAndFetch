import React from "react";

const FunctionsApi = () => {
    const getList = async () => {
		try {
			const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/sebafretes')
			const data = await response.json()
			console.log(data);
			setList(data);
		} catch {
			createUser()
		}
	}

    const AddTask = async (e) => {
		if (e.key === 'Enter') {
			try {
				const response = await fetch('https://playground.4geeks.com/apis/fake/todos/user/sebafretes', {
					method: "PUT",
					body: JSON.stringify([...list, todo]),
					headers: {
						"Content-Type": "application/json"
					}
				})
				if (response.ok) {
					getList();
					setTodo({
						label: '',
						done: false,
					})
				}
				// const data = await response.json()
				// console.log(data);
			} catch (error) {
				console.log(error);
			}
		}
	}

    


    return {
        getList,

    }
}
