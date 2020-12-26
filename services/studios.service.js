let studios = [
  { id: 1, name: "Studio One" },
  { id: 2, name: "Studio Two" },
  { id: 3, name: "Studio Three" },

  { id: 4, name: "Studio Four" }
];
function createStudio(studioData = {}) {
  console.log(studioData);
  const newStudio = {
    ...studioData,
    id: studios.length + 1,
    lastUpdate: new Date()
  };
  studios = [...studios, newStudio];
  return newStudio;
}

function getAllStudios() {
  return new Array(...studios);
}

function findStudio(id) {
  return studios.find((i) => +i.id === +id);
}

function updateStudio(studio, studioData = {}) {
  const updatedStudio = { ...studio, ...studioData, lastUpdate: new Date() };
  studios = [...studios.filter((i) => i.id !== studio.id), updatedStudio];
  return updatedStudio;
}

function deleteStudio(studio) {
  studios = studios.filter((i) => i.id !== studio.id);
}

module.exports = {
  createStudio,
  getAllStudios,
  findStudio,
  updateStudio,
  deleteStudio
};
