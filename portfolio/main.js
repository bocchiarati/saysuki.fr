document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('competenceType');
    const ul = document.getElementById('competenceList');

    const getCompetences = (type) => {
        switch (type) {
            case 'generales': return LISTE_GENERALES;
            case 'specifiques': return LISTE_SPECIFIQUE;
            case 'techniques': return LISTE_TECHNIQUE;
            default: return [];
        }
    };

    const renderStars = (note) => {
        let html = '';
        const full = Math.floor(note / 2);
        const half = note % 2 >= 1 ? 1 : 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= full) {
                // Étoile pleine
                html += `
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.176c.969 
                        0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.966c.3.922-.755 
                        1.688-1.54 1.118L10 13.348l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966-3.38-2.455c-.784-.57-.38-1.81.588-1.81h4.176l1.286-3.967z" />
                </svg>`;
            } else if (i === full + 1 && half) {
                // Étoile à moitié pleine
                html += `
                <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <defs>
                        <linearGradient id="half">
                            <stop offset="50%" stop-color="currentColor"/>
                            <stop offset="50%" stop-color="transparent"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 
                        0l1.286 3.967h4.176c.969 0 1.371 1.24.588 
                        1.81l-3.38 2.455 1.287 3.966c.3.922-.755 
                        1.688-1.54 1.118L10 13.348l-3.38 
                        2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966-3.38-2.455c-.784-.57-.38-1.81.588-1.81h4.176l1.286-3.967z"/>
                </svg>`;
            } else {
                // Étoile vide
                html += `
                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.176c.969 
                        0 1.371 1.24.588 1.81l-3.38 2.455 1.287 
                        3.966c.3.922-.755 1.688-1.54 
                        1.118L10 13.348l-3.38 
                        2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966-3.38-2.455c-.784-.57-.38-1.81.588-1.81h4.176l1.286-3.967z" />
                </svg>`;
            }
        }

        return html;
    };


    const render = (competences) => {
        ul.innerHTML = '';
        if (competences.length === 0) {
            ul.innerHTML = '<li class="text-center text-gray-500 text-lg">Aucune compétence disponible pour l\'instant.</li>';
            return;
        }

        competences.forEach(c => {
            const li = document.createElement('li');
            li.className = 'toggle-retour bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow';
            li.innerHTML = `
                <div class="text-xl font-semibold text-gray-800 mb-3">${c.nom}</div>
                <div class="text-gray-600 text-base mb-4">${c.description}</div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        ${renderStars(c.note)}
                        <span class="ml-2 text-sm text-gray-600">(${c.note}/10)</span>
                    </div>
                    <p class="close cursor-pointer">➡ Justification</p>
                    <p class="open hidden cursor-pointer">⬇ ️Justification</p>
                </div>
                <div class="retour-content mt-2 hidden text-sm text-gray-700">
                    <strong>Retour d’expérience :</strong> ${c.retour}
                </div>
            `;
            ul.appendChild(li);
        });

        document.querySelectorAll('.toggle-retour').forEach(header => {
            header.addEventListener('click', () => {
                const retour = header.querySelector('.retour-content');
                const open = header.querySelector('.open');
                const close = header.querySelector('.close');
                retour.classList.toggle('hidden');
                open.classList.toggle('hidden');
                close.classList.toggle('hidden');
            });
        });
    };

    select.addEventListener('change', () => render(getCompetences(select.value)));
    render(getCompetences(select.value)); // render on load
});
