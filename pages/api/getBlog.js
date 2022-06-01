import { URL} from "node:url"
import fs from "node:fs"
import path from "node:path"


export default function handler(req, res){
    const url = new URL(req.url,  `http://${req.headers.host}`)
    const blog = url.searchParams.get("b")
    const filepath = path.join(process.cwd(), "/contents/", `${blog}.json`);
    const isThere = (fs.existsSync(filepath) == true)? fs.readFileSync(filepath) : `Blog not found no such blog as "${blog}"`
    res.end(isThere)
}