import { ChromaClient } from "chromadb";
// import { OpenAIEmbeddingFunction } from "@chroma-core/openai";

const establishDbConnection = async (): Promise<ChromaClient> => {
    const client = new ChromaClient({
        database: "grimoire",
    });

    const deltaTimeUntilResponse = await client.heartbeat();

    if (deltaTimeUntilResponse < 0 || deltaTimeUntilResponse === 0) {
        throw new Error("database connection not established");
    }

    return client;
};

const getOrCreateCollection = async (
    client: ChromaClient,
    collectionName: string,
) => {
    try {
        return await client.getOrCreateCollection({
            name: collectionName,
            // TODO (AJB) 11/18/2025 - add this back in once you figure out how to store the OPENAI_API_KEY safely
            // embeddingFunction: new OpenAIEmbeddingFunction({
            //         apiKey: process.env.OPENAI_API_KEY,
            //         modelName: "text-embedding-3-small",
            //     }),
            metadata: {
                description:
                    "grimoire context database for software development",
            },
        });
    } catch (error) {
        throw new Error(`Failed to create new collection ${collectionName}`);
    }
};

export const database = {
    client: await establishDbConnection(),
    getOrCreateCollection,
};
