import { readDB, writeDB } from "../../../../backendLibs/dbLib";
import { v4 as uuidv4 } from "uuid";

export default function roomIdMessageRoute(req, res) {
  if (req.method === "GET") {
    const rooms = readDB();
    const id = req.query.roomId;

    const result1 = rooms.map((x) => {
      if (x.roomId === id) {
        const messages = x.messages;
        return res.json({ ok: true, messages });
      } else {
        return res.status(404).json({ ok: false, message: "Invalid room Id" });
      }
    });

    return result1;
  } else if (req.method === "POST") {
    const rooms = readDB();

    //read request body
    const text = req.body.text;

    //create new id
    const newId = uuidv4();
  }
}
