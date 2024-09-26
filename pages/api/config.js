import { clientConfig } from "@/lib/server/config";

export default function handler(req, res) {
  if (req.method === "GET") {
    delete clientConfig.notionPageId;
    res.status(200).json(clientConfig);
  } else {
    res.status(204).end();
  }
}
