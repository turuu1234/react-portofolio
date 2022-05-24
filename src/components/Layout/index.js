import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = ()=>{
    return(
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>
                &lt;Body&gt;
            </span>
            <Outlet/>
            <span className='tags bottom-tags'>
                &lt;Body&gt;
                <br />
                <span className='bottom-tag-html'>
                    &lt;html&gt;
                </span>
            </span>
        </div>
    </div>
    )
}
export default Layout