import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Milk",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
    {
      id: 1,
      name: "Eggs",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
    {
      id: 1,
      name: "Milk",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
    {
      id: 1,
      name: "Milk",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
    {
      id: 1,
      name: "Milk",
      description: true,
      Repo: "",
      deployed: '',
      src: '',
    },
  ]
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
      <div className = 'row'>
      {
        projects.map(project => (
          <div className='col-md-4 col-sm-12'>
            <div className="card" >
              <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        )
        )
      }
      </div>
    </div>
  );
}
