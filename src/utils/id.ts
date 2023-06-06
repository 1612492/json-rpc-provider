let requestId = 0;

export function generateId() {
  const id = requestId;
  requestId++;
  return id;
}
