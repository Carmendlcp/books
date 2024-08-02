// Tengo que investigar más y formarme en los test.

// const { addBook } = require("../controllers/bookController");

// describe("addBook function", () => {
//   // Prueba para verificar que la función addBook se ejecute correctamente
//   it("should add a new book to the database", async () => {
//     console.log("Test started");

//     // Mockear la solicitud y la respuesta
//     const req = {
//       body: {
//         title: "Test Book",
//         author: "Test Author",
//       },
//     };
//     const res = {
//       json: jest.fn(),
//       status: jest.fn(),
//     };

//     console.log("Mocks created");

//     // Llamar a la función addBook
//     await addBook(req, res);

//     console.log("addBook function called");

//     // Verificar que se haya llamado a la función json con el nuevo libro
//     expect(res.json).toHaveBeenCalledWith(
//       expect.objectContaining({
//         title: "Test Book",
//         author: "Test Author",
//       })
//     );

//     console.log("Test completed");
//   }, 10000);
// });
