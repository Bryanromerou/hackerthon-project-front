import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProfilePage from '../pages/ProfilePage';
import News from '../pages/NewsPage';
import Events from '../pages/EventsPage';
import Forum from '../pages/Forum';
import NDs from '../pages/NDPage';
import LocalUpdates from '../pages/LocalUpdates';

const SwitchBoard = () => {
  return (
    <>
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/profile">
            <ProfilePage />
        </Route>
        <Route path="/news">
            <News />
        </Route>
        <Route path="/forum">
            <Forum />
        </Route>
        <Route path="/events">
            <Events />
        </Route>
        <Route path="/localupdates" component = {LocalUpdates}>
        </Route>
        <Route path="/natural-disasters">
            <NDs />
        </Route>
    </Switch>
    </>
  )
}

export default SwitchBoard