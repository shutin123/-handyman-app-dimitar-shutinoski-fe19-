export interface CategoryData {
  id: number;
  imageUrl: string;
  title?: string;
}

const categoryData: CategoryData[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    imageUrl:
      num === 1
        ? "/src/assets/png/Group.png"
        : `/src/assets/png/Group-${num}.png`,
  };
});

export default categoryData;
