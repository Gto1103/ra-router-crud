import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(
	bodyParser.json({
		type(req) {
      return true;
		},
	})
);
app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	next();
});

let posts = [];
let nextId = 1;

app.get("/posts", (req, res) => {
	res.send(JSON.stringify(posts));
});

// http://localhost:7070/posts/:6

app.get("/posts/:id", (req, res) => {
	const postId = Number(req.params.id);
	const index = posts.findIndex((o) => o.id === postId);
	res.send(JSON.stringify({ post: posts[index] }));
});

app.post("/posts", (req, res) => {
	const { id, content } = req.body;
	if (id !== 0) {
		posts = posts.map(o => o.id !== Number(id) ? o : { ...o, content: content, created: Date.now()});
		res.status(204);
		res.end();
		return;
	}
	posts.push({ ...req.body, id: nextId++, created: Date.now() });
	res.status(204);
	res.end();
});

app.delete("/posts/:id", (req, res) => {
	const postId = Number(req.params.id);
	const index = posts.findIndex((o) => o.id === postId);
	if (index !== -1) {
		posts.splice(index, 1);
	}
	res.status(204);
	res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on port ${port}.`));