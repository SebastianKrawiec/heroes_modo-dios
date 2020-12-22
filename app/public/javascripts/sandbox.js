const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");
const padre = document.querySelector(".padre-heroes");

const filterHeroes = (term) => {

    Array.from(padre.children)
        .filter((div) => !div.textContent.toLocaleLowerCase().includes(term) )
        .forEach((div) => div.classList.add("filtered") );

    Array.from(padre.children)
        .filter((div) =>  div.textContent.toLocaleLowerCase().includes(term) )
        .forEach((div) => div.classList.remove("filtered") )
}

input.addEventListener("keyup", () => {
    const term = input.value.trim();
    filterHeroes(term);
});