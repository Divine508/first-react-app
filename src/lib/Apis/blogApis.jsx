export const getAllBogs = async () => {
  try {
    const response = await fetch("http://localhost:3008/blogs");

    const data = await response.json();

    if (!response.ok) {
      return { error: "something wet wrong" };
    }

    return data;
  } catch (error) {
    return { error: "something went wrong" };
  }
};
