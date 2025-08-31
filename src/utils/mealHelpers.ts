export function extractIngredients(meal: any): string[] {
  if (!meal) return [];
  const items: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      items.push(`${meas?.trim() || ""} ${ing.trim()}`.trim());
    }
  }
  return items;
}

export function youtubeEmbedUrl(url?: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const id = u.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}