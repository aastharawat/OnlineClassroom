    
    
//     const createClass = async (e: any) =>{
//     console.log("aastha")
//     // const history = useHistory()
//     // history.push("/profile") 
    
//     await fetch("http://localhost:8000/course/classes", 
//     {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json',},
//       body: JSON.stringify(data)
//     }).then((res)=>console.log("Success", res))
//   }                     


     export const fetchData = async ()=> {
       console.log("Fetch")
       const res = await fetch('http://localhost:8000/course/list', {method: 'GET'});
       const resData = await res.json();
       return resData;
    //    res.json()
    //    .then(res => setValue(res));
         }