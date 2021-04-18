import { getItems } from "../src/controllers/items";



describe("ItemsController suite case ->", () => {

  test("getItems must return the author sign", async () => {
    const items = await getItems("test", "5");
    expect(items?.author.name).toBe("Aaron");
  });


  test("getItems must return categories", async () => {
    const items = await getItems("test", "5");
    expect(items?.categories).toBeTruthy();
  });



})

