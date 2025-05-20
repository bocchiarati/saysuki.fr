export function flashMessage(type, message = "") {
    const flashDiv = document.createElement('div');
    flashDiv.innerText = message;
    flashDiv.className = `fixed top-4 left-[42%] p-10 rounded shadow transform transition-opacity duration-500 border ${
        type === 'success' ? 'bg-green-200 border-green-800 text-green-800' : 'bg-red-500 border-red-800 text-red-800'
    }`;
    document.body.appendChild(flashDiv);
    // Le flash message disparaît après 3 secondes
    setTimeout(() => {
        flashDiv.remove();
    }, 3000);
}