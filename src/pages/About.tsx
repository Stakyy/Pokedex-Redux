import React from 'react';
import '../scss/about.scss';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>Привет</h1>
        <div className="text">
          <h2>Привет, незнакомец</h2>
          <p>Этот Pokedex с сделан со всей душой и старанием</p>
          <p>Если он и тебе зашел, можешь написать мне об этом</p>
          <div className="link">
            <a href="https://vk.com/a.vester">Stakyy</a>
          </div>
        </div>
        <div className="lorem">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quam mollitia at
            dignissimos in dolores quia animi, corrupti enim vero facilis quos perspiciatis.
            Cupiditate atque maiores vero quaerat provident veritatis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores libero natus voluptatem odio? Perspiciatis magnam
            voluptatum saepe quisquam consequatur! Sapiente repellat maiores ipsam laborum similique
            repudiandae aspernatur reprehenderit quo hic? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptatibus eaque error vero repellendus. Optio, dolore. Vitae facere
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
