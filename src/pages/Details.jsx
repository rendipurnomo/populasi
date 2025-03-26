
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../assets/data/db';

const Details = () => {
    const data = db.data;
    const navigate = useNavigate();
    let Unit = useParams();


      const datas = data.filter((item)=> (item.CODEUNIT == (Unit.nomor.toUpperCase())));
  return (
    <div className='mt-2 mx-2'>
        <button className='hover:bg-red-400 cursor-pointer rounded-l-none py-1 px-3 text-sm bg-red-600 text-white font-semibold rounded-2xl' onClick={() => navigate(-1)}>Back</button>
        <h1 className='text-center font-bold text-2xl'>{Unit.nomor}</h1>
        <div className='flex flex-col gap-2 mb-5'>
        {datas.length > 0 && datas.map((item,index)=>(
            <div className='flex flex-col gap-2' key={index}>
                <p className='font-semibold border rounded-md p-1 bg-gray-200'><strong>Brand :</strong> {item.BRAND}</p>
                <p className='font-semibold border rounded-md p-1 bg-gray-200'><strong>Engine Model :</strong> {item.ENGINEMODEL}</p>
                <p className='font-semibold border rounded-md p-1 bg-gray-200'><strong>Model Unit :</strong> {item.MODELUNIT}</p>
                <p className='font-semibold border rounded-md p-1 bg-gray-200'><strong>Serial Number Engine :</strong> {item.SERIALNUMBERENGINE}</p>
                <p className='font-semibold border rounded-md p-1 bg-gray-200'><strong>Serial Number Unit :</strong> {item.SERIALNUMBERUNIT}</p>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Details