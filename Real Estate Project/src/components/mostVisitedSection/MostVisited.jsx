// import React from "react";
// import "./mostVisited.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// const MostVisited = () => {
//     return (
//         <div className="card_container">
//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/src/assets/istockphoto.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button className="custom-button" variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
    
//         </div>
//     )
// }

// export default MostVisited

import React from 'react';
import './mostVisited.css';

const MostVisitedSection = () => {
  const mostVisitedItems = [
    {
      title: 'Most Visited Homes in 2024',
      description: 'Check out the homes that have been getting the most attention this year.',
      link: '#',
    },
    {
      title: 'Most Popular Listings Near You',
      description: 'Browse the most popular listings in your area for 2024.',
      link: '#',
    },
    {
      title: 'Best Real Estate Investments to Make',
      description: 'Discover which properties are generating the highest returns for investors.',
      link: '#',
    },
  ];

  return (
    <div className="most-visited-section py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Most Visited</h2>
        <div className="row">
          {mostVisitedItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostVisitedSection;