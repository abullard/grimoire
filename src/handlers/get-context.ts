import { database } from "src/chroma-db";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { Metadata, QueryResult } from "chromadb";

interface ChromaDbPayload {
    query: string[];
}

export const getContext = async (
    request: Request,
    _: ResponseToolkit,
): Promise<QueryResult<Metadata>> => {
    const { query } = request.payload as ChromaDbPayload;
    const grimoire = await database.getOrCreateCollection(
        database.client,
        "grimoire",
    );

    if (!grimoire) {
        throw new Error("could not obtain chromaDb collection.");
    }

    return await grimoire.query({ queryTexts: query });
};
