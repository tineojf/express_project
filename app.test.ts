import request from "supertest";
import app from "./src/app";

describe("GET /api/v1/songs", () => {
  it("should return 200 OK and a list of songs", async () => {
    const res = await request(app).get("/api/v1/songs");

    // Verifica el status
    expect(res.statusCode).toBe(200);

    // Verifica que la respuesta sea JSON con "ok: true"
    expect(res.body.ok).toBe(true);

    // Verifica que haya un array de resultados
    expect(Array.isArray(res.body.results)).toBe(true);

    // Opcional: verifica que el primer elemento tenga propiedades esperadas
    expect(res.body.results[0]).toHaveProperty("id");
    expect(res.body.results[0]).toHaveProperty("name");
  });
});

describe("GET /api/v1/songs", () => {
  it("should return 200 OK and a list of songs", async () => {
    const res = await request(app).get("/api/v1/songs");

    // Verifica el status
    expect(res.statusCode).toBe(200);

    // Verifica que la respuesta sea JSON con "ok: true"
    expect(res.body.ok).toBe(true);

    // Verifica que haya un array de resultados
    expect(Array.isArray(res.body.results)).toBe(true);

    // Opcional: verifica que el primer elemento tenga propiedades esperadas
    expect(res.body.results[0]).toHaveProperty("id");
    expect(res.body.results[0]).toHaveProperty("name");
  });
});


describe("PUT /api/v1/songs", () => {
  it("should return 200 OK and a list of songs", async () => {
    const res = await request(app).get("/api/v1/songs");

    // Verifica el status
    expect(res.statusCode).toBe(200);

    // Verifica que la respuesta sea JSON con "ok: true"
    expect(res.body.ok).toBe(true);

    // Verifica que haya un array de resultados
    expect(Array.isArray(res.body.results)).toBe(true);

    // Opcional: verifica que el primer elemento tenga propiedades esperadas
    expect(res.body.results[0]).toHaveProperty("id");
    expect(res.body.results[0]).toHaveProperty("name");
  });
});


describe("POST /api/v1/songs", () => {
  it("should return 200 OK and a list of songs", async () => {
    const res = await request(app).get("/api/v1/songs");

    // Verifica el status
    expect(res.statusCode).toBe(200);

    // Verifica que la respuesta sea JSON con "ok: true"
    expect(res.body.ok).toBe(true);

    // Verifica que haya un array de resultados
    expect(Array.isArray(res.body.results)).toBe(true);

    // Opcional: verifica que el primer elemento tenga propiedades esperadas
    expect(res.body.results[0]).toHaveProperty("id");
    expect(res.body.results[0]).toHaveProperty("name");
  });
});
