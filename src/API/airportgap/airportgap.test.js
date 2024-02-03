fixture("Airport Gap - Public Endpoints");

test("Fetch all airports, limited to 30 per page", async (t) => {
  const response = await t.request("https://airportgap.com/api/airports");

  await t.expect(response.status).eql(200);
  await t.expect(response.body.data.length).eql(30);

  console.log(response);
});
