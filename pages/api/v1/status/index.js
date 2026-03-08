function status(request, response) {
  response.status(200).json({ frase: "Hello, World!" });
  response.status(200).application;
}

export default status;
