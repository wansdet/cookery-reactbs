import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { Footer, Header } from 'core-layout';
import { ManageComment, ManageComments } from 'features/admin/comment';
import { ManageRecipe, ManageRecipes } from 'features/admin/recipe';
import { ManageUser, ManageUsers } from 'features/admin/user';
import { CreateComment, UserComments } from 'features/comment';
import Home from 'features/home/Home';
import { BrowseRecipeCategories, CreateRecipe, MostPopularRecipes, SearchRecipes, UserRecipes } from 'features/recipe';
import { EditUser, LoginUser, LogoutUser, RegisterUser } from 'features/user';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="contentArea">
                    <Container>
                        <Routes>
                            <Route path='/' element={<Home/>}/>

                            <Route path={'/admin/manage-recipes'} element={<ManageRecipes/>}/>
                            <Route path={'/admin/manage-recipes/{id}'} element={<ManageRecipe/>}/>
                            <Route path={'/admin/manage-comments'} element={<ManageComments/>}/>
                            <Route path={'/admin/manage-comments/{id}'} element={<ManageComment/>}/>
                            <Route path={'/admin/manage-users'} element={<ManageUsers/>}/>
                            <Route path={'/admin/manage-users/{id}'} element={<ManageUser/>}/>

                            <Route path={'/comments/create-comment'} element={<CreateComment/>}/>
                            <Route path={'/comments/my-comments'} element={<UserComments/>}/>

                            <Route path={'/recipes/browse-categories'} element={<BrowseRecipeCategories/>}/>
                            <Route path={'/recipes/create-recipe'} element={<CreateRecipe/>}/>
                            <Route path={'/recipes/most-popular'} element={<MostPopularRecipes/>}/>
                            <Route path={'/recipes/my-recipes'} element={<UserRecipes/>}/>
                            <Route path={'/recipes/search'} element={<SearchRecipes/>}/>

                            <Route path={'/user/edit'} element={<EditUser/>}/>
                            <Route path={'/user/register'} element={<RegisterUser/>}/>
                            <Route path={'/login'} element={<LoginUser/>}/>
                            <Route path={'/logout'} element={<LogoutUser/>}/>

                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                    </Container>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;