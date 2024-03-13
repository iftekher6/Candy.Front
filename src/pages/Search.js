//import { useSearchParams } from 'react-router-dom';
//import { Card } from '../components'
// import { useFetch } from '../hooks/useFetch';
// import { useTitle } from '../hooks/useTitle';



export const Search = ({apiPath}) => {
  // const [ searchParams ] = useSearchParams();
  // const queryTerm = searchParams.get("q");

  // const { data: movies } = useFetch(apiPath,queryTerm);
  
  // // pageTitle 
  // useTitle(`Search for ${queryTerm}`);


  return (
    <main>Search</main>


    // <main>
    //   <section className='pt-7 px-7' >
    //     <p className='text-3xl text-stone-700 dark:text-stone-200'>
    //         {movies.length === 0 ? `No Result Found for "${queryTerm}"` : `Result For "${queryTerm}"`}
    //     </p>
    //   </section>
    //   <section className='max-w-7xl mx-auto py-7'>
    //     <div className='flex justify-start flex-wrap '>
    //       {movies.map((movie) => (
    //         <Card key={movie.id} movie={movie}/>
    //       ))}
          
    //     </div>
    //   </section>
    // </main>
  )
}
