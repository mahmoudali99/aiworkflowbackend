type Chunk = {
  id: string;
  text: string;
  embedding: number[];
};

const store: Record<string, Chunk[]> = {};

export const saveChunks = (docId: string, chunks: Chunk[]) => {
  store[docId] = chunks;
};

export const getChunks = (docId: string) => store[docId] || [];

export const cosineSimilarity = (a: number[], b: number[]) => {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
};
