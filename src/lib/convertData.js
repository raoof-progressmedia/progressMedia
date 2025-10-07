export function flattenData(obj, category = "", subcategory = "") {
  const result = [];

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      const newCategory = category || key;
      const newSubcategory = category && !subcategory ? key : subcategory;
      result.push(...flattenData(value, newCategory, newSubcategory));
    } else {
      result.push({
        category,
        subcategory,
        question: key,
        answer: value,
      });
    }
  }

  return result;
}
