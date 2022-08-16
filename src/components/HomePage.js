import logo from '../images/logo.png';

function HomePage() {
  return (
    <div>
      <div className="home-container">
        <div class="box">
          <img src={logo}></img>
        </div>

        <div class="box">
          <ul>
            Hello! Welcome to my React Playground. This is where I will practice
            React Hooks. Hence the name GET HOOKED!
          </ul>
          <p>
            Speaking of hooked, I love random facts. I recently learned that
            sloths can hold their breaths longer than dolphins. They can also
            die of starvation with a full stomach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
