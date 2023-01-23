import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../context/context'

export default function Home() {

  let prefxImg = "https://image.tmdb.org/t/p/w500"

let {movis,tv,people} =useContext(MediaContext)

  return <>
 
  {/* =======================movies===================================== */}
  {
movis? <div className='container' >
<div className='row '>

  <div className="col-md-4">
    <div className="title ">
      <div className=' line mb-5 pb-5 w-25'></div>
      <h2>Trinding Movies <br />To watch naw </h2>
      <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
      <div className=' line  mb-5 w-75'></div>
      
    </div>
  </div>


  {movis.map((movie,index) =>
    <div key={index} className="col-lg-2  col-md-4 col-6  ">
      <div className="content  position-relative">
       <Link to={`/moviedetails/${movie.id}`}><img src={prefxImg + movie.poster_path} alt="" className='w-100' />
        <h3 className='mb-3'>{movie.title}</h3>

        <div className=" position-absolute top-0 end-0 p-2 bg-info">
            {movie.vote_average}
        </div>
        </Link> 
      </div>
      
    </div>
  )}
</div>
</div> :''
  }
  
    {/* ============================tv==================================== */}
    {tv?  <div className=' mt-5 pt-5 container' >
    <div className='row '>

      <div className="col-md-4">
        <div className="title ">
          <div className=' line mb-5 pb-5 w-25'></div>
          <h2>Trinding Tv <br />To watch naw </h2>
          <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
          <div className=' line  mb-5 w-75'></div>
        </div>
      </div>


      {tv.map((tv,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6  ">
          <div className="content position-relative ">
          <Link to={`/tvdetails/${tv.id}`}> <img src={prefxImg + tv.poster_path} alt="" className='w-100' />
            <h3 className='mb-3'>{tv.name}</h3>
            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {tv.vote_average}
            </div>
            </Link>
          </div>
        </div>
      )}
    </div>
    </div> :""}
 
{/* ===========people========================================== */}
{
  people?<div className=' mt-5 pt-5 container' >
  <div className='row '>

    <div className="col-md-4">
      <div className="title ">
        <div className=' line mb-5 pb-5 w-25'></div>
        <h2>Trinding Tv <br />To watch naw </h2>
        <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
        <div className=' line  mb-5 w-75'></div>
      </div>
    </div>


    {people.map((people,index) =>
      <div key={index} className="col-lg-2  col-md-4 col-6  ">
        <div className="content position-relative ">
        <Link to={`/peopleDetails/${people.id}`}>  <img src={prefxImg + people.profile_path} alt="" className='w-100 ' />
          <h3 className='mb-3'>{people.name}</h3>
          <div className=" position-absolute top-0 end-0 p-2 bg-info">
              {people.popularity}
          </div>
          </Link>
        </div>
      </div>
    )}
  </div>
  </div> :""
}
 
   
  </>
}
