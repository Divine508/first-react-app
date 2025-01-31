const Data = Array.from({ length: 20 }, (v, i) => ({
  id: i + 1,
  title: `Blog Title ${i + 1}`,
  content: `This is the content for blog ${i + 1}`,
}));

export default Data;
