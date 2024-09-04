const Service = () => {
    return ( 
        <div className="container">
  <h1>
    SEGREGATE SMARTLY: <br />
    SIMPLE WASTE MANAGEMENT TIPS
  </h1>
  <div className="card-container">
    <div className="card">
      <div className="card-front">
        <img src="cloth_bag.jpg" width={100} height={90} />
        <p>How can I reduce waste in daily shopping?</p>
      </div>
      <div className="card-back">
        <p>
          Use reusable cloth bags instead of plastic ones. This reduces plastic
          waste and is more environmentally friendly
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-front">
        <img src="aluminium-can-.avif" width={100} height={90} />
        <p>Is it necessary to rinse cans before recycling?</p>
      </div>
      <div className="card-back">
        <p>
          Yes, rinse aluminum cans to remove food residue before recycling. This
          helps prevent contamination in the recycling process
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-front">
        <img src="paper cup.jpeg" width={100} height={90} />
        <p>Are paper cups recyclable?</p>
      </div>
      <div className="card-back">
        <p>
          Paper cups often have a plastic lining that makes them non-recyclable.
          Consider using reusable cups or check if your local facility accepts
          them
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-front">
        <img src="e waste.jpeg" width={100} height={90} />
        <p>What should I do with old electronics?</p>
      </div>
      <div className="card-back">
        <p>
          Old electronics should be taken to e-waste recycling centers. Do not
          throw them in regular trash bins
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-front">
        <img src="compost.jpeg" height={90} width={100} />
        <p>What kitchen scraps can go into compost?</p>
      </div>
      <div className="card-back">
        <p>
          Vegetable peels, fruit scraps, coffee grounds, and eggshells can go
          into compost. Avoid meat, dairy, and oily foods
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-front">
        <img src="plastic bottle.jpg" height={90} width={100} />
        <p>Can I recycle plastic bottles with the caps on?</p>
      </div>
      <div className="card-back">
        <p>
          Yes! Plastic bottles can be recycled with the caps on. Make sure to
          rinse them out first and place them in the recycling bin
        </p>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default Service;