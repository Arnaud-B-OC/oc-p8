const HOST = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:80/api' : '/api';

export function request(endpoint: string) {
    return new Promise<any>((resolve, reject) => {
        fetch(HOST + endpoint).then((data) => {
            if (data.status.toString().startsWith('2')) return data.json();
            else if (data.status.toString().startsWith('3')) return data.json();
            else reject();
        }).then(resolve)
        .catch(console.error);
    });
}

export function requestPost(endpoint: string, data: any) {
    return new Promise<any>((resolve, reject) => {
        fetch(HOST + endpoint, { method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(data) }).then((data) => {
            if (data.status.toString().startsWith('2')) return data.json();
            else if (data.status.toString().startsWith('3')) return data.json();
            else reject();
        }).then(resolve)
        .catch(console.error);
    });
}
