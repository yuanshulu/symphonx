import genMockData from '@/assets/js/mockData.js'

const useMock = 1
export default (path, body) => {
    let result
    if(useMock) {
        result = genMockData(path)
    } else {
        console.log(body)
    }
    return result
}