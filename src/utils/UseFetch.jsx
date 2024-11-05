async function connection(idEmployee = '') {
    let url = '';
    if(idEmployee == ''){
       url = 'http://localhost:8080/employee'; 
    }else{
        url = `http://localhost:8080/employee/${idEmployee}`;
    }

    const response = await fetch(url)
    const data = await response.json();
    return data;
}

export default connection