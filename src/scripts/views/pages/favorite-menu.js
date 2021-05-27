import FavoriteMenuIdb from "../../data/idb";
import { createCulinaryTemplate } from "../templates/templates-creator";

const SearchMenu = {
    async render() {
        return `
            <h1 class="heading-menu">Menu Favorite</h1>
            <div class="card-list"></div>
        `;
    },

    async afterRender() {
        const culinary = await FavoriteMenuIdb.getAllMenu();
        const culinaryContainer = document.querySelector(".card-list");
        culinary.forEach(menu => {
            culinaryContainer.innerHTML += createCulinaryTemplate(menu);
        })
    },
};

export default SearchMenu;