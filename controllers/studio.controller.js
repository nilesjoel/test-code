const service = require("../services/studios.service");

function findStudio(req, res, next, id) {
  const studio = service.findStudio(id);
  if (!studio) {
    return res.status(404).json({
      message: "invalid studio",
      errors: { id: "is unknown" }
    });
  }
  req.studio = studio;
  next();
}

function createStudio(req, res, next) {
  const newStudio = service.createStudio();
  return res.json({ studio: newStudio });
}

function getAllStudios(req, res, next) {
  return res.json({ studios: service.getAllStudios() });
}

function getOneStudio(req, res, next) {
  return res.json({ studio: req.studio });
}

function updateStudio(req, res, next) {
  // enable this code, if update data is required in req.body
  /*
	if (!req.body.studio) {
		return res.status(400).json({
			message: 'invalid studio data',
			errors: { studio: 'is missing' },
		});
	}
	*/
  return res.json({
    studio: service.updateStudio(req.studio, req.body.studio || {})
  });
}

function deleteStudio(req, res, next) {
  service.deleteStudio(req.studio);
  return res.json({ studio: req.studio });
}

module.exports = {
  findStudio,
  createStudio,
  getAllStudios,
  getOneStudio,
  updateStudio,
  deleteStudio
};
