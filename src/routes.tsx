import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom';

// Public Access
import HomePublic from './Pages/public_access/home_public/index'
import Register from './Pages/public_access/register/index'
import Login from './Pages/public_access/login/index'
import SuccessFlashPage from './Pages/public_access/FlashPageSuccess/index'

// Private Access
import Home from './Pages/private_access/home/index'
import Rank from './Pages/private_access/rank/index'
import Profile from './Pages/private_access/profile/index'
import UsersProfile from './Pages/private_access/usersProfile/index'
import Teams from './Pages/private_access/teams/index'
import Materials from './Pages/private_access/materials/index'
import UpdateProfile from './Pages/private_access/updateProfile/index'
import CreateTeamPage from './Pages/private_access/createTeam/index'
import ChatPage from './Pages/private_access/chat/index'
import Users from './Pages/private_access/usersProfile/index'
import SubmmitProject from './Pages/private_access/submmitProject/index'



const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={HomePublic} path="/" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={SuccessFlashPage} path="/success-flash" />

            <Route component={Home} path="/home" />
            <Route component={Rank} path="/rank" />
            <Route component={Profile} path="/profile" />
            <Route component={Users} path="/user/:id" />
            <Route component={UpdateProfile} path="/update-profile" />
            <Route component={UsersProfile} path="/user-profile" />
            <Route component={Teams} path="/teams" />
            <Route component={CreateTeamPage} path="/create-team" />
            <Route component={Materials} path="/materials" />
            <Route component={ChatPage} path="/chat" />
            <Route component={SubmmitProject} path="/submit-project" />
        </BrowserRouter>
    )
}

export default Routes