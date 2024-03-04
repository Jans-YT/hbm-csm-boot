import Side from '../component/side'; // Corrected import
import Nav from '../component/navbar'; // Corrected import
import Utama from '../component/mainpage'; // Corrected import



function aboutp() {
    return (
        <div className='flex h-flex'>
            <header>
                <Side />
            </header>
            <div className='flex flex-col flex-1 ml-64 px-4'>
                <Nav />
                <Utama />
                {/* You can add Utama component here if needed */}
            </div>
        </div>
    );
}

export default aboutp;