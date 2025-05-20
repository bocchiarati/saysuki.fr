import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['menu']

    connect() {
        // Ferme le menu si on clique en dehors
        document.addEventListener('click', this.closeMenu.bind(this));
    }

    disconnect() {
        document.removeEventListener('click', this.closeMenu.bind(this));
    }

    toggle(event) {
        event.stopPropagation();
        if(this.menuTarget.id === "dropdown-menu") {
            const adminMenu = document.getElementById("dropdown-admin");
            if (adminMenu) {
                adminMenu.classList.add("hidden");
            }
        }
        else{
            document.getElementById("dropdown-menu").classList.add("hidden");
        }
        this.menuTarget.classList.toggle('hidden');
    }

    closeMenu(event) {
        if (!this.element.contains(event.target)) {
            this.menuTarget.classList.add('hidden');
        }
    }
} 