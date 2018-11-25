import React, { Component } from 'react';
import './App.css';
import pat from './pat.jpg';
import walt from './walt.jpg';
import movie from './movie.jpg';
import parks from './parks.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <h1 styles={{ backgroungImage: 'url(' + pat + ')' }}>
            <b>Walt Disney World!</b>
          </h1>
        </div>

        <div class="main1">
          <h1> Walt Disney!</h1>
          <h5>Date: 11/21/2018 </h5>
          <img src={walt} alt=" " width="350px" height="200px" styles={{ paddingLeft: "60px" }}  ></img>

          <div>
          <p styles={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'justify' }}>As we all know, he was the creater of the amazing disney universe! He is Walt Disney!</p>
          <p styles={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'justify' }}>
            Walt Disney was an American motion-picture and television producer and showman, famous as a pioneer of cartoon films and as the creator of Disneyland.</p>
          <p styles={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'justify' }}>Disney was an innovative animator and created the cartoon character Mickey Mouse. He won 22 Academy Awards during his lifetime, and was the founder of theme parks Disneyland and Walt Disney World.</p>
          </div>

        </div>


        <div class="main2">
          <h1> Disney Movies!</h1>
          <h5>Date: 11/21/2018 </h5>
          <img src={movie} alt=" " width="350px" height="200px" styles={{ paddingLeft: "60px" }} ></img>

          <div>
          <p styles={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'justify !important;'}}>
            Disney movies might technically be made for kids, but let's be real..
            There's nothing better than sitting down with a bowl of popcorn and belting out "Hakuna Matata" on a Friday night.
          But there are so many that it's nearly impossible to pick just one!</p>
          <p styles={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'justify !important;' }}>
            Disney movies are known for their “happily ever afters,” but that’s not what they’re all about. They’re about life, and they show real emotion in both hardships and triumphs.
            There’s just something about Disney magic that makes you truly believe that dreams really do come true. We can thank Walt for that! </p>
            </div>
        </div>

        <div class="main3">
          <h1> Disney Parks!</h1>
          <h5>Date: 11/21/2018 </h5>
          <img src={parks} alt=" " width="320px" height="200px" styles={{ paddingLeft: "60px" }} ></img>
          <div>
          <p styles={{ paddingLeft: '25px', paddingRight: '25px', textAlign: 'justify' }}>
          Walt Disney Parks and Resorts, officially Walt Disney Parks and Resorts Worldwide, Inc. and informally known as Disney Parks, was one of The Walt Disney Company's four major business segments and a subsidiary.</p>
          <p styles={{ paddingLeft: '25px', paddingRight: '25px', textAlign: 'justify' }}>The company was responsible for the conception, building, and managing of Disney theme parks and vacation resorts, as well as a variety of family-oriented leisure enterprises. 
          It was found in 1971, following the opening of Magic Kingdom at Walt Disney World in Florida. </p>
          </div>
        </div>


        <div class="nav">
          <ul styles={{ backgroungImage: 'url(' + pat + ')' }}>
            <li styles={{ paddingTop: '70px', color: 'white' }}><a href="https://www.google.com" class="links">Google</a></li>
            <li styles={{ paddingTop: '35px', color: 'white' }}><a href="https://www.netflix.com" class="links">Netflix</a></li>
            <li styles={{ paddingTop: '35px', color: 'white' }}><a href="https://www.disney.com" class="links">Disney</a></li>
            <li styles={{ paddingTop: '35px', color: 'white' }}><a href="https://disneyparks.disney.go.com" class="links">Disney Parks</a></li>
          </ul>
        </div>

        <div class="footer">
          <p styles={{ backgroungImage: 'url(' + pat + ')' }}>Copyright &copy;PinakHonmode</p>
        </div>
      </div>
    );
  }
}
export default Header;
