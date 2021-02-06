require("dotenv").config();

const server = require("./server");
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

server.get("/", async (req, res) => {
  try {
    const messageOfTheDay = (await process.env.MOTD) || "Hello World!"; // add this line
    res.status(200).json({ motd: messageOfTheDay }); // change this line
  } catch (error) {
    console.error("\nERROR", error);
    res.status(500).json({ error: "Cannot get the daily message" });
  }
});
