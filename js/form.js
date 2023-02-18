const nameInput = document.querySelector('input[type="text"]');
const movieInputs = document.querySelectorAll('input[name="movie"]');
const submitButton = document.querySelector('button[type="button"]');
const resetButton = document.querySelector('button[type="reset"]');

function showMoviePreference(nameInput, movieInputs) {
    const name = nameInput.value;
    const movies = [...movieInputs].filter(input => input.checked);
    const numberOfMovies = movies.length;

    alert(`${name}님, 저와 ${numberOfMovies}개의 취향이 같으시네요!`);
}

function resetForm(nameInput, movieInputs) {
    nameInput.value = '';
    for (const input of movieInputs) {
        input.checked = false;
    }
}

submitButton.addEventListener('click', () => {
    showMoviePreference(nameInput, movieInputs);
});

resetButton.addEventListener('click', () => {
    resetForm(nameInput, movieInputs);
});