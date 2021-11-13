import initializeFirebase from "../FIrebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut    } from "firebase/auth";
import { useEffect, useState } from "react";





initializeFirebase();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();



const useFirebase = () =>{

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [user,setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [admin, setAdmin] = useState({});

     useEffect(()=>{
       fetch(`https://floating-woodland-55461.herokuapp.com/checkAdmin/${user.email}`)
       .then(res =>res.json())
       .then(data =>setAdmin(data.admin))
     },[user.email])

    //  console.log(admin);

  

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    };

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }     

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleLogin = (e) =>{
      setIsLoading(true);
        e.preventDefault();
        // console.log(email, password);
         return signInWithEmailAndPassword(auth, email, password)
        .then(result => {
    //   console.log(result.user);

    
  })
  .finally(()=>setIsLoading(false))
    }

    const handleRegister = (e) =>{
      setIsLoading(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    //   console.log(result.user);
    
  })
  .finally(()=>setIsLoading(false))
        addUserToDatabase(email,password,name);

        

    }

    const handleGoogleLogin = () =>{
      setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
  .then(result => {
    //   console.log(result.user);
    addGoogleUserToDatabase(result?.user?.email, result?.user?.displayName);
    
  })
  .finally(()=> setIsLoading(false));





    }

    const addGoogleUserToDatabase = (mail,displayName) =>{
      // console.log(mail,displayName);

      const googleUser ={
        displayName: displayName,
        email: mail
      };

      fetch('https://floating-woodland-55461.herokuapp.com/googleUser',{
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(googleUser)

      })

    }

   



    const addUserToDatabase = (mail, pass)=>{
       const userInfo ={
           displayName: name,
           email: mail,
           password: pass
       };

       fetch('https://floating-woodland-55461.herokuapp.com/addUser',{
           method: 'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(userInfo)
       })
       .then(res => res.json())
       .then(data => console.log(data));

       

    }


    const handleLogOut = () =>{
      setIsLoading(true);
      signOut(auth).then(() => {
        setUser({})
      })
      .finally(()=>setIsLoading(false))

    }


    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        }
        setIsLoading(false);
      });


   
   


    return{handleEmail, handlePassword, handleLogin, handleRegister, handleName, handleGoogleLogin, user, handleLogOut, isLoading, admin }


}

export default useFirebase;
