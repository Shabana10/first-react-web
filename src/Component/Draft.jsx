
export default function Draft(props) {
    
    return (
        <section className='d-flex align-item-center draft'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                {props.heading}
                            </h1>
                            <h2>
                                {props.intro}
                                <br /> <strong className='nav-brand text-primary'>{props.brand}</strong>
                            </h2>
                            <div className="mt-3">
                                <button className='btn btn-secondary fw-bold fs-5' onClick={props.onClick}>
                                {props.btnName}
                                </button> 
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={props.imgsrc} alt="" className='img-fluid' />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
