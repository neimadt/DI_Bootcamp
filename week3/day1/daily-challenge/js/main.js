const planetsArray = [
    { name: 'Earth', moons: 1 },
    { name: 'Mars', moons: 0 },
    { name: 'Venus', moons: 12 },
];

console.log(planetsArray);

const addPlanetToDOM = (index, name, numberOfMoons) => {

    const planetElement = document.createElement('div');
    planetElement.innerHTML = `<b>${name}</b>`;
    planetElement.classList.add('planet');
    planetElement.classList.add(`color-${index + 1}`);


    const sectionElement = document.querySelector('.listPlanets');
    sectionElement.appendChild(planetElement);
};

let i = 0;
for (const planet of planetsArray) {
    addPlanetToDOM(i, planet.name, planet.moons);
    i += 1;
}
