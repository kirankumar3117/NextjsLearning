import { Comments } from "../../../data/comments";

export default function handler(req,res){
    res.status(200).send(Comments)
}