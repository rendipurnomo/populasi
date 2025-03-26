
import Button from '../components/Button';
import { Link, useParams } from 'react-router-dom';
import { db } from '../assets/data/db';

const Unit = () => {
    const data = db.data;
    let Unit = useParams();
    const unitCode = Unit.codeUnit;


      const datas = data.filter((item)=> (item.MODELUNITFORFORMULA == (unitCode.toUpperCase())))

  return (
    <div className='mt-2 mx-2'>
        <Button  title='back' color='red' link='/'/>
        <h1 className='text-center font-bold text-2xl'>{Unit.codeUnit}</h1>
        <div className='flex flex-col gap-2 mb-5'>
        {datas.length > 0 && datas.map((item,index)=>(
          <Link to={`/unit/${unitCode}/${item.CODEUNIT}`} className='font-semibold border rounded-md p-1 bg-gray-200' key={index}>{item.CODEUNIT}</Link>
        ))}
        </div>

    </div>
  )
}

export default Unit