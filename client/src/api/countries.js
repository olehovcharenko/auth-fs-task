
export const getCountriesList = async () => {
  try {
    const response = await fetch(
      "https://fs-task.herokuapp.com/countries",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    const countries = data.map((elem) => elem.name);
    return countries;
  } catch (error) {
    console.error(error);
  }
};
