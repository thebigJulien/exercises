// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
// Import any additional modules you want to include below \/
import View from '../scripts/view.js';
import Client from '../scripts/apiCall.js';
// \/ All of your javascript should go here \/

let inputData = document.querySelector('input');
const movie = new View();
async function mySave() {
    console.log(inputData.value);
    const same=localStorage.getItem(inputData.value);
    if (same===''|| same ===undefined || same ===null) {
        localStorage.setItem(inputData.value, inputData.value);
        const clientData = new Client();
        const savedData = await clientData.getMovieData(inputData.value);
        movie.displayMovieOnPage(savedData);
    } else {
        alert("Not today Satan");
    }
}
function myReset() {
    movie.removeDisplay()
    localStorage.clear();
}
let resetto = document.querySelector(".btn-reset").addEventListener("click", myReset);
let savvo = document.querySelector(".btn-save").addEventListener("click", mySave);