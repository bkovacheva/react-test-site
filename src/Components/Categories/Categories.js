import { Component } from 'react';
import "./Categories.css"

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }
  
    render() {
        const name = this.props.match.params.location;
        let destination;
        let imgURL;
        if (name){
            destination=name
            imgURL="../../images/"+name+".jpg"
        }
        else{
            destination='the world'
            imgURL="../../images/main.jpg"
        }
        return (
            <div>
                <main className="main-container">
                    <div className="background" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                            <h1>discover</h1>
                            <h1>{destination}</h1>
                        </div>
                    </div>
                </main>
                <section className="content"> 
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum sit amet nulla sit amet interdum. Sed est magna, pretium sit amet velit non, porttitor faucibus odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec orci non quam ultrices sodales a at ipsum. Aliquam erat volutpat. Integer fringilla finibus neque, eu ornare risus mattis tempus. Curabitur ornare neque quis nisl sodales, a consectetur justo tempus. Maecenas sed imperdiet quam. Mauris urna sem, tristique id elementum eget, consequat nec libero. Donec varius massa justo. Vivamus iaculis dolor eu nulla venenatis, vel mattis magna tempus. Ut bibendum mi quis augue porta, at placerat arcu condimentum. Praesent eu turpis vitae odio maximus placerat. Suspendisse tincidunt aliquam elit quis auctor. Donec ac tincidunt dolor, quis pellentesque ex. Nulla interdum enim ut tellus fermentum ornare.

                        </p>
                        <p>Vivamus porttitor ipsum et aliquet euismod. Vivamus luctus, augue id interdum consectetur, metus enim mattis augue, at laoreet nisi diam quis nunc. Phasellus ac arcu venenatis, pellentesque velit ut, auctor ipsum. Aenean ultrices dolor odio, vitae tempus purus tincidunt id. Aenean fermentum, augue finibus accumsan ultrices, erat leo faucibus tortor, eu dictum lorem tellus sit amet enim. Fusce metus ante, dignissim sed dui ut, sollicitudin laoreet enim. Duis tellus nulla, facilisis eu imperdiet vel, interdum vehicula lorem. Donec quis tellus facilisis ex vehicula scelerisque sit amet sit amet lorem. Praesent porttitor tristique porta. In pulvinar ex ut turpis rhoncus malesuada. Integer ut justo nec nisi tincidunt mollis ac sed libero. Donec ut auctor urna. Sed consectetur elit non libero ullamcorper, sed ultrices metus lacinia.
                        </p>
                        <div className="placesContainer" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        </div>
                        <div className="placesContainer" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        </div>
                        <div className="placesContainer" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};
export default Categories;