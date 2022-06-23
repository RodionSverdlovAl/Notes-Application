const Homepage = () =>{
    return(
        <div className="home-page">
          <h3>Notes Application</h3>
          <div className="app_info">
            This is application is educational project. <br />
            This application have 2 pages: <br />
            First page is Post page where you can create a note, delete it or edit and sort it. <br />
            Second page is Users page where you can create user, delete and edit it. <br />
          </div>
          <h3>Used technologies</h3>
          <div className="using_technologies">
            In this application i use:
            <ul>
              <li>React</li>
              <li>Redux, Redux-Thunk</li>
              <li>React-router-dom</li>
              <li>Axios</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div className="developer_info">
            <div className="avatarka">
              <img src="image.png" alt="AVA" />
            </div>
            <div className="info">
              <p>Rodion Sverdlov</p>
              <p>email: rsverdlovalexandrovich@gmail.com</p>
              <a href="https://github.com/RodionSverdlovAl">GitHub</a>
              <a href="https://www.instagram.com/billyharrrrington/">Instagram</a>
            </div>
           
            
          </div>
        </div>
    )
}

export {Homepage}