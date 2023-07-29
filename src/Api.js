export async function fetchData() {
    const response = await fetch('https://sa9un75pf2.execute-api.eu-north-1.amazonaws.com/test1');
    const data = await response.json();
    return data;
}
