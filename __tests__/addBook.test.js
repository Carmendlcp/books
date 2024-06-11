const { addBook } = require("../controllers/bookController");

describe("addBook function", () => {
  // Prueba para verificar que la función addBook se ejecute correctamente
  it("should add a new book to the database", async () => {
    // Mockear la solicitud y la respuesta
    const req = {
      body: {
        title: "Test Book",
        author: "Test Author",
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    // Llamar a la función addBook
    await addBook(req, res);

    // Verificar que se haya llamado a la función json con el nuevo libro
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Test Book",
        author: "Test Author",
      })
    );
  }, 10000);
});
