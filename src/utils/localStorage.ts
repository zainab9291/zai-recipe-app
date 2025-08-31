const KEY = "zai_recipe_favorites";

export function readFavorites(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(id: string) {
  try {
    const curr = readFavorites();
    const exists = curr.includes(id);
    const next = exists ? curr.filter((x) => x !== id) : [...curr, id];
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {}
}