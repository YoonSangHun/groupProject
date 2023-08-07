export async function fetchData() {
    const response = await fetch('https://g39725izal.execute-api.eu-north-1.amazonaws.com/stage1/corp');
    const data = await response.json();
    return data;
}
