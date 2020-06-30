
     export const fetchData = async ()=> {
       console.log("Fetch")
       const res = await fetch('http://localhost:8000/course/list', {method: 'GET'});
       const resData = await res.json();
       return resData;
    //    res.json()
    //    .then(res => setValue(res));
         }