import express from 'express';

async function startServer() {
	const app = express();
	app.get("/", (req, res) => {
		return res.send("hello world");
	});

	app.listen(8000, () => console.log('express server started'));
}
startServer().catch(err => console.error(err));
