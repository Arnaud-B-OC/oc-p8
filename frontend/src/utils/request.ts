const HOST = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:80/api' : '/api';

export function request(endpoint: string, data?: object) {
    return new Promise<any>((resolve, reject) => {

        fetch(HOST + endpoint, {
            method: data ? 'POST' : 'GET',
            headers: data ? {'content-type': 'application/json'} : undefined,
            body: data ? JSON.stringify(data) : undefined
        })
        .then((res) => {
            const statusCode = res.status.toString();

            if (statusCode.startsWith('2') || statusCode.startsWith('3')) {
                res.json().then(resolve).catch(console.error);
            }
            else if (statusCode.startsWith('4')) {
                res.json().then(reject).catch(console.error);
            }
            else {
                reject();
            }
        })
        .catch((err) => {
            console.error(err);
            reject({err: 'Connection Error'})
        });
    });
}
