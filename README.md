# <a href='https://svgshare.com/s/MrB' ><img src='https://svgshare.com/i/MrB.svg' title='shoulder' /></a>
A blogging resource for help, advice and services.

http://shoulder-app.surge.sh/

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**shoulder** is a blogging application intended for users to ask and receive help on a multitude of topics including services, advice, and opportunities. Bloggers are known as mentors. The goal is to be a hybrid of Craigslist, Medium and Reddit.

Features: Mentors can create, edit and share posts. Authentication will be active. Each post can be associated with a category and users will have the ability to search by category. Mentors will have a profile page listing their articles. Pagination will be active. Users will be able to set avatars.


<br>

## MVP

Mentors can create, edit and share posts. Authentication will be active. Each post can be associated with a category and users will have the ability to search by category. Mentors will have a profile page listing their articles. 


<br>

### Goals

- _Making the site feel user friendly, fluid and intuitive._
- _I want the experience to accessible by anyone._
- _The idea is to keep the site minimal, and generally bare bones, free of clutter._
- _We want to provide our users with a dedicated safe space, open to anonymity and free from deviation._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _A simple application that allows for remote execution of commands._ |
|   React Router   | _Standard routing library for React._ |
| Bootstrap | _Framework for developing responsive, mobile first projects on the web._ |
|     Sass      | _CSS extension_ |
|  Spring  | _Preloads your application so things like console, rake and tests run faster_ |
|  bcrypt  | _A library to help you hash passwords._ |

<br>

### Client (Front End)

#### Wireframes

shoudler.com/ <a href='https://svgshare.com/s/Mq6' ><img src='https://svgshare.com/i/Mq6.svg' title='' /></a>

- Desktop Landing

shoulder.com/join <a href='https://svgshare.com/s/Mpv' ><img src='https://svgshare.com/i/Mpv.svg' title='' /></a>

- Desktop Join Page

shoulder.com/user  <a href='https://svgshare.com/s/MrP' ><img src='https://svgshare.com/i/MrP.svg' title='Shoulder user profile web' /></a>

- Desktop User Profile

shoulder.com/create <a href='https://svgshare.com/s/Mph' ><img src='https://svgshare.com/i/Mph.svg' title='shoulder create post web' /></a>

- Desktop Create Page

shoulder.com/post <a href='https://svgshare.com/s/Mrx' ><img src='https://svgshare.com/i/Mrx.svg' title='Shoulder post web' /></a>
 
- Desktop Post Page

shoulder.com <a href='https://svgshare.com/s/Mr1' ><img src='https://svgshare.com/i/Mr1.svg' title='Shoulder homepage iphone 11' /></a>

- Mobile Landing Page

#### Component Hierarchy
``` structure
src
|__ assets/
      |__ main.css
      |__ post-table.css
      |__ tailwind.css
|__ components/
      |__ Header/
            |__ Header.jsx
      |__ Post/
            |__ CreatePost.jsx
            |__ EditPosts.jsx
      |__ Registration/
            |__ Login.jsx
            |__ Sign_up.jsx
      |__ React_pages/
            |__ AllPosts.jsx
            |__ Categories.jsx
            |__ Home.jsx
            |__ MembersPosts.jsx
            |__ Members.jsx
            |__ UserPosts.jsx
|__ services
        |__ apihelper.js
        |__ auth.js
 |__ App.css
 |__ App.js
 |__ Join.jsx
 |__ Log_In.jsx


```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Homepage  | functional |   _   |   _   | _The homepage will house all componenents_       |
|    Header    | functional |   _   |   _   | _The header will contain the logo and navigation, search, posts, members, categories, join and login components_     |
|  Posts  | functional |   _   |   _   | _Posts will contain a list of created posts _       |
|   Members    |   functional    |   _   |   _   | _Mentors will display user profiles_      |
| Categories | functional |   _   |   _   | _Categories will feature a drop down menu where users can find listed posts by specific category_                 |
|    Join    | functional |   _   |   _   | _Join is where users will be able to create a login and begin their profiles_ |
|    Log_In    | functional |   _   |   _   | _Login is where users will be able to enter their private profiles_ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend    |    H     |     20 hrs      |     TBD     |    TBD    |
| Frontend |    H     |     10 hrs      |     TBD     |     TBD     |
| PostMVP |    L     |     6 hrs      |     TBD     |     TBD     |
| TOTAL    |          |     36 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

#### ERD Model
<a href="https://imgbb.com/"><img src="https://i.ibb.co/f1Lf5pP/Shoulder-ERD.png" alt="Shoulder-ERD" border="0"></a>

<br>

***

## Post-MVP

> Adding comments and voting (like/dislike) functionality, admin users functions, share function. Pagination will be active. Users will be able to set avatars.

***

## Code Showcase
>Code for a category dropdown menu. The routes will take you to category pages where you can view all associated posts.
                <li>
                  <ul>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Categories &#x25BE;"
                    >
                      <li
                        class="bg-white relative block shadow-md text-left"
                        style={{
                          padding: "12px 16px",
                          zIndex: "99",
                          width: "inherit",
                          height: "inherit",
                          fontSize: "1.20rem",
                        }}
                      >
                        {this.state.categories.map((category) => (
                          <Dropdown.Item
                            class="hover:bg-gray-300"
                            className={css`
                              &:hover {
                                font-weight: 500;
                              }
                            `}
                            href={`/category/${category.id}`}
                          >
                            {category.name} <br />
                          </Dropdown.Item>
                        ))}
                      </li>
                    </DropdownButton>
                  </ul>
                </li>

## Code Issues & Resolutions
