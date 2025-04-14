import React from 'react';

const Home = () => {
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img src='/sharecode.png' alt='sharecode-logo'></img>
        <h4 className='mainLabel'>Paste Invitation Room Id</h4>
        <div className='inputGroup'>
          <input type='text' className='inputBox' placeholder='ROOM ID' />
          <input type='text' className='inputBox' placeholder='USERNAME' />
          <button className='btn joinBtn'>Join</button>
          <span className='createInfo'>
            If you don't have an Invite then Create &nbsp;
            <a href='' className='createNewBtn'>New Room</a>
          </span>
        </div>
      </div>

      <footer>
        <h4>Built with ❣️ by <a href='https://github.com/101rror/'>Error</a></h4>
      </footer>
      
    </div>
  )
}

export default Home;