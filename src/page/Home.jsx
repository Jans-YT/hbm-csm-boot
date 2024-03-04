import Nav from '../component/navbar';
import Side from '../component/side';



function home() {
    return (
        <div className='flex h-flex'>
            <header>
                <Side />
            </header>
            <div className='flex flex-col flex-1 ml-64 px-4'>
                <Nav />
            </div>
        </div>
    );
}

export default home;