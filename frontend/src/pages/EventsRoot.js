import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

function EventsRootsLayout(){
return <>
<EventsNavigation/>
<Outlet/>
</>
}
export default EventsRootsLayout;