import Nav from '../component/navbar'; // Corrected import
import Side from '../component/side'; // Corrected import
import Set from '../component/setting';


function lod() {
    return (
        <div className='flex h-flex'>
            <Side />
           

            <div className='flex flex-col flex-1'>
                <Nav />
               
                <Set />
            </div>
        </div>
    );
}

export default lod;