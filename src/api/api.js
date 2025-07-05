// Pass set data state function


export const fetchFashion = (setData) => {
  fetch("https://68667bd789803950dbb2db26.mockapi.io/MensClothes")
    .then((res) => {
      if (!res.ok) throw new Error("error bro");
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
    })
};

export const fetchMobile = (setData) => {
  let result;
  fetch("https://68667bd789803950dbb2db26.mockapi.io/mobiles") 
    .then((res) => {
      if (!res.ok) throw new Error("error bro");
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data)
    })
  return result;
}