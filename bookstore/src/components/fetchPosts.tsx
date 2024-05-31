


// import { useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// useEffect
// function fetchPosts() {

//     const [post, setPosts] = useState<Post[]>([]);

//    const posts= [{id:1, title:'lo mejor', body:'lorem'},{id:2, title:'html', body:'lorem'}]
 
// //    useEffect(()=>{
// //     const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
// //         .then(resp => resp.json())
// //         .then(posts=> setPosts(posts))
// //         .catch(error=> console.log(error));

// //    },[]);
// useEffect(()=>{
//     getPosts();
// }, []);

//    async function getPosts(){
//     try {
//         const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const posts = await resp.json();

//         setPosts(posts);

//         TransformStream.success('post cargado')
//     } catch( error)  {
//         console.log(error);
//         TransformStream.error('error')
//     }

//    }

//    const respuesta = await axios.get('http', {})


//    function handleSendPost((){
//     const newPost = {userId: 2, title: 'este es mi post', body: 'parafo'};

//     fetch('http', {
//         method:'POST',
//         body:JSON.stringify(newPost),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
//     .then(resp => {
//         if(resp.ok) toast.done('Post añadido) 
//             resp.json())
//     .then(data => console.log(data))
//    })
//    return (
//     <>
//      <section>
//         {

//         }
//         posts.slice(0,10).map(post => <article className="post" key={post.id}>
//     <h3>{post.title}</h3> 
//     <p>{post.body}</p>   
//     )
//      </section>
//     </>
//   )
// }

// export default fetchPosts