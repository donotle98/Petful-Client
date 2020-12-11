import config from "../config";
const PetfulServices = {
    getAdopters() {
        return fetch(`${config.API_ENDPOINT}/people`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    addAdopter(name) {
        return fetch(`http://localhost:8080/people`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(name),
        }).then((res) => res.json());
    },
    getDogs() {
        return fetch(`${config.API_ENDPOINT}/pets/dogs`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    getCats() {
        return fetch(`${config.API_ENDPOINT}/pets/cats`).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    adoptPet(id, typeOfPet) {
        const type = typeOfPet.toLowerCase();
        return fetch(`${config.API_ENDPOINT}/${type}/${id}`, {
            method: "DELETE",
        });
    },
};
export default PetfulServices;
