module.exports = (req, res, next) => {
  const date = new Date();
  const day = date.getDay(); // 0 (dim) à 6 (sam)
  const hour = date.getHours(); // 0 à 23

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // pendant les heures de travail
  } else {
    res.send(
      "<h1>Nous sommes fermés !<br> Horaires : lundi à vendredi, de 9h à 17h.</h1>"
    );
  }
};
