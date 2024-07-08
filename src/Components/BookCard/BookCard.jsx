import BookImage from 'Assets/Images/book.jpg';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export default function BookCard({ data }) {
    const navigate = useNavigate();
    return (
        <div className="mt-5 mb-5 card md:card-side text-white bg-gray-800 shadow-xl md:h-60 w-full shadow-md">
            <figure className='h-full text-white'>
                <img src={BookImage} alt="Movie" className='h-1/5 md:h-full text-white'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white text-4xl">{data.title}</h2>
                <div className='mt-12 flex justify-between  text-white items-center gap-4'>
                    <div className='flex flex-col gap-3 text-white text-xl'>
                    <div className='flex justify-start gap-8 md:gap-5 items-center text-white'>
                        <div>
                            <BiUser />
                        </div>
                        <div>
                            {data.author?.name}
                        </div>
                    </div> 
                    <div>
                        {data.description}

                    </div>
                    </div>
                    
                    <div className="card-actions justify-end text-white">
                        <button 
                        onClick={() => {
                            navigate("/book/description", {state: {...data}});
                        }}
                        className="btn btn-primary text-white">
                            More Details
                        </button>
                    </div>
                </div>
               
            </div>
        </div>
    );
}